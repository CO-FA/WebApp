import { getPadronAfip } from "api/PadronAfip";
import { useLoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useIdentidadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const useRegistroIdentidad = () => {
    const history = useHistory();
    const [candidatos, setCandidatos] = useState();
    const { documento, setIdentidad } = useIdentidadAtom();
    const { setCurrentStep } = useStepAtom();
    const { setShowLoader } = useLoaderContext();
    
    const submitForm = (values, setSubmitting) => {
        const identidad = (candidatos || []).find(
          (c) => "" + values.clienteNombres === c.dni + ""
        );
        setIdentidad(identidad);
    
        history.push("/onboarding/celular");
        setCurrentStep(STEPS.STEP_3_CELULAR);
       
    };
    
    useEffect(() => {
        (async () => {
          const identidades = await getPadronAfip(documento);
          setCandidatos(identidades);
          setShowLoader(false);
        })();
    }, []);

    return{submitForm, candidatos}
};