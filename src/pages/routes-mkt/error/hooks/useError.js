import React from "react";
import { useHistory } from "react-router-dom";
import { STEPS } from "components/registro/STEPS-MKT";
import { LoaderContext } from "components/loader/LoaderContext";
import { useStepAtom } from "pages/atoms/Atoms";

export const useError = () => {
    let { setShowLoader } = React.useContext(LoaderContext);
    const history = useHistory();
    const { setCurrentStep } = useStepAtom();

    const volver = async () => {
        setShowLoader(true);
        //TO DO: Limpiar atoms
        setShowLoader(false);
        history.push("/onboarding/registro-dni");
        setCurrentStep(STEPS.STEP_1_DNI);
    };

    return{volver}

};