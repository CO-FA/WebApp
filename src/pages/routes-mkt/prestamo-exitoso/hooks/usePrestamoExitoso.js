import { infoDetalles } from "api/InfoDetalles";
import { infoSolicitud } from "api/infoSolucitud";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useDetallesAtom, useIdentidadAtom, useSolicitudAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const usePrestamoExitoso = () => {
    let { setShowLoader } = React.useContext(LoaderContext);
    const [errors] = useState(false);
    const history = useHistory();
    const { setCurrentStep } = useStepAtom();
    const { identidad } = useIdentidadAtom();
    const {  setDetallesPrestamo } = useDetallesAtom();
    const {setPdfSolicitud} = useSolicitudAtom();

    const submitForm = async () => {
      if (errors) {
        return;
      }
      setShowLoader(true);
      try {
        await history.push("/onboarding/logo-cofa");
      } catch (error) {
        history.push("/onboarding/error");
        setCurrentStep(STEPS.STEP_99_ERROR);
      } finally {
        setShowLoader(false);
      }
    };
    

    const handleButtonClick = async (buttonId) => {

      if (buttonId === "detalles") {
        const detallesPrestamo = await infoDetalles({nroDocumento: identidad.dni});
        setDetallesPrestamo(detallesPrestamo.response);
        history.push("/onboarding/detalles-del-prestamo")

      } else if(buttonId === "solicitud") {
        const respSolicitud = await infoSolicitud({nroDocumento: identidad.dni});
        setPdfSolicitud(respSolicitud.URL)
        history.push("/onboarding/pdf-solicitud-prestamo")
      } 
    };

  return {submitForm, handleButtonClick}
};