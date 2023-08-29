import React, { useState } from "react";
import "../../../assets/css/main.css";
import { useStepAtom } from "../atoms/Atoms";
import { STEPS } from "components/registro/STEPS-MKT";
import { useHistory } from "react-router-dom";
import { LoaderContext } from "components/loader/LoaderContext";

export default function FirmaElectronica() {
    /* let { setShowLoader } = React.useContext(LoaderContext);
    const { setCurrentStep } = useStepAtom();
    const [errors, setErrors] = useState(false);
    const history = useHistory();

    if (errors) {
        return;
    }
    if (!errors) {
    setShowLoader(true);
    try {
        //TO DO: esperar que el cliente firme, toma el estado ok y va a la pantalla exitoso prestamo 
        // y a su vez dispara el envio del prestamo desde el back.
        //alta prestado: https://sandbox.sbsoftware.net/API/v1/loans/new
        
        history.push("/onboarding/prestamo-exitoso");
        setCurrentStep(STEPS.STEP_13_PRESTAMO_EXITOSO);
    } catch (error) {
        history.push("/onboarding/error");
        setCurrentStep(STEPS.STEP_99_ERROR);
        console.error(error);
    }
    setShowLoader(false);
    } */

    return(
        //pantalla intermedia que espera que el cliente firme. 
        //igual que email y sms
        <>ESPERANDO TU FIRMA ELECTRONICA</>
    );
}; 

/* // TO DO: previo a este paso hay que generar un alta cliente para obtener el idcliente

const {
      monto,
      cuota,
      montoCuota,
    } = useCalculadoraPrestamo();
    
            const altaPrestamo = await generarAltaPrestamo({
              idCliente: lead.id_preaprobado,
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
            /* {
              "errorCode": 0,
              "idPrestamo": 1000040,
              "netoLiquidado": 0,
              "status": "OK"
            } */
         