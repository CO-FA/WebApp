import { validacionCodigoEmail, validacionEmail } from "api/EmailValidation";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useEmailAtom, useIdentidadAtom, useLeadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { formErrors } from "utils/constantsErrors";

export const useRegistroValidarEmail = () => {
    let { setShowLoader } = React.useContext(LoaderContext);
	  const [errors, setErrors] = useState(false);
	  const history = useHistory();
    const { setCurrentStep } = useStepAtom();
    const { identidad } = useIdentidadAtom();
    const {lead } = useLeadAtom();
    const { email } = useEmailAtom();

    const submitForm = async(values) => {
        if (errors) {
          return;
        }
        if (!errors) {
          setShowLoader(true);
          try{
            await validacionCodigoEmail({
              "nroDocumento": identidad.cuit,
              "idPreaprobado":lead.id_preaprobado,
              "enviarCodigo": values.clientePin,
            })
    
            history.push("/onboarding/info-pre-nosis");
            setCurrentStep(STEPS.STEP_9_VERIFICAR_PREAPROBADO);
          }catch (error) {
            history.push("/onboarding/error");
            setCurrentStep(STEPS.STEP_99_ERROR);
            console.error(error);
          }
          setShowLoader(false);
        }
    };
    
    const validateForm = values => {
        if (!values.clientePin) {
            setErrors({ clientePin: formErrors.CODE_EMPTY });
        } else if (String(values.clientePin).length !== 4) {
            setErrors({ clientePin: formErrors.CODE_LENGTH });
        } else {
            setErrors(false);
        }
    };

    const reenviarPinEmail = async (values) => {
      const pin = await validacionEmail({
        "nroDocumento": identidad.cuit,
        "idPreaprobado":lead.id_preaprobado,
        "email": email,
        "enviarCodigo":true,
      })
      console.log("reenviar", pin.codigo)
    };

    return{submitForm,validateForm, reenviarPinEmail}
};