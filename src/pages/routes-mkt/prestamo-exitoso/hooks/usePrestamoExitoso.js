import { infoPrestamo } from "api/InfoPrestamo";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useLeadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const usePrestamoExitoso = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    let { setShowLoader } = React.useContext(LoaderContext);
    const [errors] = useState(false);
    const history = useHistory();
    const { setCurrentStep } = useStepAtom();
    const { lead } = useLeadAtom();
    
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
      console.log("buttonId", buttonId)
      await infoPrestamo({buttonId});
      //TO DO: corregir / ver como hago
      if (buttonId === "detalles") {
        history.push("/onboarding/detalles-del-prestamo")
      } else if(buttonId === "solicitud") {
        history.push("/onboarding/pdf-solicitud-prestamo")
      } 
    };

  return {submitForm, handleButtonClick}
};