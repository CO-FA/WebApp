import { validarLead } from "api/LeadValidation";
import { enviarSMSValidacion } from "api/PhoneValidation";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useCelularAtom, useCodigoAtom, useGeneroAtom, useIdentidadAtom, usePrestamoAtom, useSituacionLaboralAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { formErrors } from "utils/constantsErrors";

export const useRegistroValidarCel = () => {
    let { setShowLoader } = React.useContext(LoaderContext);
    const [errors, setErrors] = useState(false);
    const history = useHistory();
    const { setCurrentStep } = useStepAtom();
    const { identidad } = useIdentidadAtom();
    const { situacionLaboral } = useSituacionLaboralAtom();
    const { codArea, numCelular } = useCelularAtom();
    const { setIntereses } = usePrestamoAtom();
    const { genero } = useGeneroAtom();
    const { setClientePin } = useCodigoAtom()

    const submitForm = async (values, setSubmitting) => {
        if (errors) {
          return;
        }
        if (!errors) {
          setShowLoader(true);
          setClientePin(values.clientePin)
          try {
            const valid = await validarLead({
              nombre: identidad.nombreCompleto,
              telefono: codArea + " " + numCelular,
              dni: identidad.dni,
              cuit: identidad.cuit,
              sexo: genero,
              situacion: situacionLaboral,
              codigo: values.clientePin,
            });
            setIntereses(valid.data);
    
            history.push("/onboarding/calculadora-prestamo");
            setCurrentStep(STEPS.STEP_4_PRESTAMO);
          } catch (error) {
            history.push("/onboarding/error");
            setCurrentStep(STEPS.STEP_99_ERROR);
            console.error(error);
          }
          setShowLoader(false);
        }
    };
    
    const validateForm = (values) => {
        var errorsAUx = {};
        if (!values.clienteCelCodigo) {
          errorsAUx = {
            ...errorsAUx,
            clienteCelCodigo: formErrors.CODE_EMPTY,
          };
        } else if (String(values.clienteCelCodigo).length < 2) {
          errorsAUx = {
            ...errorsAUx,
            clienteCelCodigo: formErrors.CODE_PHONE_ERROR,
          };
        } else {
          errorsAUx = false;
        }
        if (!values.clienteCelNumero) {
          errorsAUx = {
            ...errorsAUx,
            clienteCelNumero: formErrors.PHONE_EMPTY,
          };
        } else if (String(values.clienteCelNumero).length < 6) {
          errorsAUx = {
            ...errorsAUx,
            clienteCelNumero: formErrors.PHONE_ERROR,
          };
        } else {
          errorsAUx = errorsAUx || false;
        }
        setErrors(errorsAUx);
    };

    const reenviarPinSms = async (values) => {
      await enviarSMSValidacion(
        values.clienteCelCodigo + "" + values.clienteCelNumero,
        identidad.cuit
      );
    };

    return{submitForm,validateForm, errors, reenviarPinSms}
};