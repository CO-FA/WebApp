import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { aceptacionDeTerminos, firmaElectronica } from "api/TerminosYCondiciones";
import { getIpAddress } from "api/ip";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useIdentidadAtom, useLeadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";

export const useInfoPostNosis = () => {
  let { setShowLoader } = React.useContext(LoaderContext);
  const [errors] = useState(false);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const { identidad } = useIdentidadAtom();
  const { lead } = useLeadAtom();
  const [selectedButton, setSelectedButton] = useState(null);

  //id prestamo se genera al dar alta prestamo
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    if (selectedButton === "detalles") {
      /*TO DO: api prestamos/detalles de prestamo */
      detallesPrestamo(
        {
          "idPrestamo" : "1000001" //TO DO: pasar id correcto
        }
      )
      history.push("/onboarding/detalles-del-prestamo")
    } else if(selectedButton === "solicitud") {
      /* TO DO: api prestamo / descargar contrato*/
      solicitudCredito(
        {
          "idPrestamo" : "1000001" //TO DO: pasar id correcto
        }
      )
      history.push("/onboarding/pdf-solicitud-prestamo")
    } 
  };

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
          ("status confirmacion prestamo", confirmacionSolicitud) 
  
          const infoFirmaElectronica = await firmaElectronica({
            idPrestamo: "1000001", //TO DO: pasar idPrestamo correcto
            accion: 1, 
          })
          ("Firma Electronica", infoFirmaElectronica)
  
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
