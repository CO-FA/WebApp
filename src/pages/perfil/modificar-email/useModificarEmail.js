import { validacionEmail } from "api/EmailValidation";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useEmailAtom, useIdentidadAtom, useLeadAtom, useStepAtom } from "pages/atoms/Atoms";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { formErrors } from "utils/constantsErrors";

export const useModificarEmail = () => {
    let { setShowLoader } = React.useContext(LoaderContext);
    const [errors, setErrors] = useState(false);
    const history = useHistory();
    const { setCurrentStep } = useStepAtom();
    const { identidad } = useIdentidadAtom();
    const {lead } = useLeadAtom();
    const { setEmail } = useEmailAtom();

    const submitForm = async (values, setSubmitting) => {
        if (errors) {
          return;
        }
        if (!errors) {
          setShowLoader(true);
          try{
            setEmail(values.clienteEmail)
            const pin = await validacionEmail({
              "nroDocumento": identidad.cuit,
              "idPreaprobado":lead.id_preaprobado,
              "email":values.clienteEmail,
              "enviarCodigo":true,
            })
            console.log("enviar", pin.codigo)
            
            history.push("/perfil-validar-email");
            setCurrentStep(STEPS.STEP_8_VALIDAR_EMAIL);
          }catch (error) {
            history.push("/onboarding/error");
            setCurrentStep(STEPS.STEP_99_ERROR);
            console.error(error);
          }
          setShowLoader(false);
        }
      };
    
    
    const validateForm = (values) => {
      const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const regex = new RegExp(pattern);

      if (!values.clienteEmailNuevo) {
          setErrors({
              clienteEmail: formErrors.EMAIL_EMPTY,
          });
      } else if (!regex.test(values.clienteEmailNuevo)) {
          setErrors({
            clienteEmailNuevo: formErrors.PATTERN_EMAIL_ERROR,
          });
      } else {
        setErrors(false);
      }
      if (!values.clientePin) {
        setErrors({ clientePin: formErrors.CODE_EMPTY });
      } else if (String(values.clientePin).length !== 4) {
        setErrors({ clientePin: formErrors.CODE_LENGTH });
      } else {
        setErrors(false);
      }
      return errors
    }

    const submitFormValidar = (values, setSubmitting) => {
        if (!errors) {
          setShowLoader(false);
          history.push("/perfil");
        }
      };

    return {submitForm,validateForm, errors, submitFormValidar}
};