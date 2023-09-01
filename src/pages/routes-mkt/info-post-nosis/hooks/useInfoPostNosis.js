import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { aceptacionDeTerminos, firmaElectronica } from "api/TerminosYCondiciones";
import { getIpAddress } from "api/ip";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useCbuAtom, useIdentidadAtom, useLeadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import { useCalculadoraPrestamo } from "pages/routes-mkt/calculadora-prestamo/hooks/useCalculadoraPrestamo";
import { generarAltaPrestamo } from "api/AltaPrestamo";
import { altaNuevoCliente } from "api/AltaCliente";
import { idCliente } from "api/GetIdCliente";

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

          //segundo obtengo/genero el cliente porqe ya acepto tener el prestamo. 
          const cliente = await idCliente(
          {
            lead: lead,
          })

          //TO DO: acceder al idCliente
          //const numIdCliente = idCliente.idCliente
          console.log("id cliente", cliente) //ERROR

          if(confirmacionSolicitud.status === "OK"){
            //tercero genero el alta del prestamo para obtener el idPrestamo
            const altaPrestamo = await generarAltaPrestamo({
              idCliente: idCliente,
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
            console.log("idPrestamo", idPrestamo)

            //cuarto paso idPrestamo para generar la firma electronica de ese prestamo
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
