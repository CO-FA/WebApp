/* import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const useFirmaElectronica = () => {
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
            //TO DO: esperar que el cliente firme, toma el estado ok y va a la pantalla prestamo exitoso 
            //TO DO: dispara el envio del prestamo desde el back.
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

    return
}; */