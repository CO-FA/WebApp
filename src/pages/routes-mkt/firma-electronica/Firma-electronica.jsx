import React from "react";
import "../../../assets/css/main.css";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function FirmaElectronica() {
    let { setShowLoader } = React.useContext(LoaderContext);
    const { setCurrentStep } = useStepAtom();
    const [errors, setErrors] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (errors) {
            return;
        }
        if (!errors) {
        setShowLoader(true);
        try {
            //TO DO: esperar que el cliente firme, toma el estado ok. 
            //TO DO: dispara el envio del prestamo desde el back.
            //TO DO: va a la pantalla prestamo exitoso
            history.push("/onboarding/prestamo-exitoso");
            setCurrentStep(STEPS.STEP_13_PRESTAMO_EXITOSO);
        } catch (error) {
            history.push("/onboarding/error");
            setCurrentStep(STEPS.STEP_99_ERROR);
            console.error(error);
        }
        setShowLoader(false);
        }
    
    }, []);

    return(
        //TO DO: pantalla intermedia que espera que el cliente firme. 
        <>ESPERANDO TU FIRMA ELECTRONICA</>
    );
}; 
         