import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { aceptacionDeTerminos, firmaElectronica } from "api/TerminosYCondiciones";
import { getIpAddress } from "api/ip";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useIdentidadAtom, useLeadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import { useCalculadoraPrestamo } from "pages/routes-mkt/calculadora-prestamo/hooks/useCalculadoraPrestamo";
import { generarAltaPrestamo } from "api/AltaPrestamo";

export const useInfoPostNosis = () => {
  let { setShowLoader } = React.useContext(LoaderContext);
  const [errors] = useState(false);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const { identidad } = useIdentidadAtom();
  const { lead } = useLeadAtom();
  const {
      monto,
      cuota,
      montoCuota,
  } = useCalculadoraPrestamo();

  const submitForm = async () => {
      if (errors) {
        return;
      }
      if (!errors) {
        setShowLoader(true);
        try {
          const ipCliente = await getIpAddress()
          //primero acepto terminos y condiciones
          const confirmacionSolicitud = await aceptacionDeTerminos(
          { 
            idPreaprobado: lead.id_preaprobado,
            nroDocumento:identidad.cuit,
            IP: ipCliente 
          })
          if(confirmacionSolicitud.status === "OK"){
            //segundo genero el alta del prestamo con los datos para obtener el idPrestamo
            const altaPrestamo = await generarAltaPrestamo({
              idCliente: lead.id_preaprobado, //TO DO: ACA VA EL ID CLIENTE QUE ENREALIDAD TODAVIA NO ESTA CREADO!
              fechaAlta: new Date(),
              comercializadora_Sucursal: 1,
              monto: monto,
              cuotas: cuota,
              lineaCredito: 1,
              destinoFondos: 1,
              importeCuota: montoCuota,
              primerVto: null,
              formaPago: 2,
              estado: 9,
              referencia: "Préstamo de prueba"
            })
            console.log("alta prestamo", altaPrestamo)
           
            const idPrestamo = altaPrestamo.idPrestamo
            //TO DO: guardar idPrestamo cliente en SupaBase

            //tercero paso idPrestamo para generar la firma electronica de ese prestamo
            const infoFirmaElectronica = await firmaElectronica({
              idPrestamo: idPrestamo,
              accion: 1, 
            })
            console.log("Electronica", infoFirmaElectronica)
          }
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
    return{submitForm}

};
