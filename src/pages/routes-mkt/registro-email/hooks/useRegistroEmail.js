import { validacionEmail } from "api/EmailValidation";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useIdentidadAtom, useLeadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { formErrors } from "utils/constantsErrors";

export const useRegistroEmail = () => {
    let { setShowLoader } = React.useContext(LoaderContext);
    const [errors, setErrors] = useState(false);
    const history = useHistory();
    const { setCurrentStep } = useStepAtom();
    const { identidad } = useIdentidadAtom();
    const {lead } = useLeadAtom();

    const submitForm = async (values, setSubmitting) => {
        if (errors) {
          return;
        }
        if (!errors) {
          setShowLoader(true);
          try{
            const datosEmail = await validacionEmail({
              "nroDocumento": identidad.cuit,
              "idPreaprobado":lead.id_preaprobado,
              "email":values.clienteEmail,
              "enviarCodigo":true,
            })
            console.log("datos email", datosEmail);
            history.push("/onboarding/validar-pin-email");
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

        if (!values.clienteEmail) {
            setErrors({
                clienteEmail: formErrors.EMAIL_EMPTY,
            });
        } else if (!regex.test(values.clienteEmail)) {
            setErrors({
                clienteEmail: formErrors.PATTERN_EMAIL_ERROR,
            });
        } else {
            setErrors(false);
        }
    }

    return {submitForm,validateForm}
};