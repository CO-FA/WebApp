import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { aceptacionDeTerminos, firmaElectronica } from "api/TerminosYCondiciones";
import { getIpAddress } from "api/ip";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useIdentidadAtom, useLeadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import { useModal } from "components/modal/ModalContext";
import DetallesOperacion from "../components/DetallesOperacion";
import SolicitudCredito from "../components/SolicitudCredito";

export const useInfoPostNosis = () => {
  let { setShowLoader } = React.useContext(LoaderContext);
  const [errors] = useState(false);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const { identidad } = useIdentidadAtom();
  const { lead } = useLeadAtom();
  const { setElement } = useModal();
  const [selectedButton, setSelectedButton] = useState(null);
  const { showModal  } = useModal();

  const handleButtonClick = (buttonId) => {
    //TO DO: corregir. limpiar set select buton?
    showModal(true);
    setSelectedButton(buttonId);
    console.log("boton: ", buttonId);
  };

  useEffect(() => {
    if (selectedButton === "detalles") {
      setElement(<DetallesOperacion />);
    } else if (selectedButton === "solicitud") {
      setElement(<SolicitudCredito />);
    } else {
      setElement(null);
    }
  }, []);

  const submitForm = async () => {
      if (errors) {
        return;
      }
      if (!errors) {
        setShowLoader(true);
        try {
          const ipCliente = await getIpAddress()
    
          const confirmacionSolicitud = await aceptacionDeTerminos(
            { 
            idPreaprobado: lead.id_preaprobado,
            nroDocumento:identidad.cuit,
            IP: ipCliente 
          })
          console.log("status confirmacion prestamo", confirmacionSolicitud) 
  
          const infoFirmaElectronica = await firmaElectronica({
            idPrestamo: "1000001", //TO DO: pasar idPrestamo correcto
            accion: 1, 
          })
          console.log("Firma Electronica", infoFirmaElectronica)
  
          history.push("/onboarding/firma-electronica");
          setCurrentStep(STEPS.STEP_12_FIRMA_ELECTRONICA);
          
        } catch (error) {
          history.push("/onboarding/error");
          setCurrentStep(STEPS.STEP_99_ERROR);
          console.error(error);
        }
        setShowLoader(false);
      }
    };
    return{submitForm, handleButtonClick}

};
