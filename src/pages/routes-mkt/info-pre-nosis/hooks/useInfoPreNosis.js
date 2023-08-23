import { validacionNosis } from "api/NosisValidation";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useIdentidadAtom, useLeadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const useInfoPreNosis = () => {
    let { setShowLoader } = React.useContext(LoaderContext);
    const [errors] = useState(false);
    const history = useHistory();
    const { setCurrentStep } = useStepAtom();
    const { identidad } = useIdentidadAtom();
    const { lead } = useLeadAtom();

    const submitForm = async (values, setSubmitting) => {
        if (errors) {
          return;  
        }
        if (!errors) {
          setShowLoader(true);
          try {
            const datosNosis = await validacionNosis({
              nroDocumento: identidad.cuit,
              idPreaprobado: lead.id_preaprobado,
              CallbackURL: "http://localhost:8888/#/onboarding/finalizar-validacion-nosis/" + identidad.cuit ,
            })
            console.log("URL para Nosis", datosNosis.URL)
            console.log("status-nosis", datosNosis.status)
        
            window.location.href = datosNosis.URL
    
            setCurrentStep(STEPS.STEP_10_VALIDAR_IDENTIDAD_NOSIS);
          } catch (error) {
            history.push("/onboarding/error");
            setCurrentStep(STEPS.STEP_99_ERROR);
            console.error(error);
          }
          setShowLoader(false);
        }
    };

    return{submitForm}

};
