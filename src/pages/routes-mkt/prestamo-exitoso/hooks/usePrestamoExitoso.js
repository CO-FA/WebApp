import { infoDetalles } from "api/InfoDetalles";
import { infoSolicitud } from "api/infoSolucitud";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useIdentidadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const usePrestamoExitoso = () => {
    let { setShowLoader } = React.useContext(LoaderContext);
    const [errors] = useState(false);
    const history = useHistory();
    const { setCurrentStep } = useStepAtom();
    const { identidad } = useIdentidadAtom();
    
    const submitForm = async () => {
        if (errors) {
          return;
        }
        if (!errors) {
          setShowLoader(true);
          try
          {
            history.push("/onboarding/logo-cofa");
            setCurrentStep(STEPS.STEP_12_FIRMA_ELECTRONICA);
          }catch (error) {
            history.push("/onboarding/error");
            setCurrentStep(STEPS.STEP_99_ERROR);
          }
          setShowLoader(false);
        }
    };

    const handleButtonClick = async (buttonId) => {
      
      if (buttonId === "detalles") {
        await infoDetalles({nroDocumento: identidad.dni});
        console.log("trae todo los detalles")
        history.push("/onboarding/detalles-del-prestamo")
      } else if(buttonId === "solicitud") {
        await infoSolicitud({nroDocumento: identidad.dni});
        console.log("pdf")
        history.push("/onboarding/pdf-solicitud-prestamo")
      } 
    };

  return {submitForm, handleButtonClick}
};