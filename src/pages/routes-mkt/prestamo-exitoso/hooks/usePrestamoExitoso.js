import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const usePrestamoExitoso = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    let { setShowLoader } = React.useContext(LoaderContext);
    const [errors] = useState(false);
    const history = useHistory();
    const { setCurrentStep } = useStepAtom();
    
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
      setSelectedButton(buttonId);
      if (selectedButton === "detalles") {
        /*TO DO: api prestamos/detalles de prestamo */
        //TO DO: funcion va al back y muestra todo los detalles
        /* await detallesPrestamo(
          {
            "idPrestamo" : "1000001" //TO DO: pasar id correcto
          }
        ) */
        history.push("/onboarding/detalles-del-prestamo")
      } else if(selectedButton === "solicitud") {
        /* TO DO: api prestamo / descargar contrato*/
        //TO DO: funcion para descargar pdf
        /* await solicitudCredito(
          {
            "idPrestamo" : "1000001" //TO DO: pasar id correcto
          }
        ) */
        history.push("/onboarding/pdf-solicitud-prestamo")
      } 
    };

    return {submitForm, handleButtonClick}
};