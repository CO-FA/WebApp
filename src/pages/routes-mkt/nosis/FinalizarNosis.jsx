import React, { useEffect, useState } from "react";
import "../../../assets/css/main.css";
import { useHistory } from "react-router-dom";
import { LoaderContext } from "../../../components/loader/LoaderContext";
import { useStepAtom } from "../../atoms/Atoms";
import { STEPS } from "components/registro/STEPS-MKT";
import { useParams } from "react-router-dom";
import { updateStatusNosis } from "api/StatusNosis";


export function FinalizarNosis() {
  let { setShowLoader } = React.useContext(LoaderContext);
  const [errors] = useState(false);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  let { cuit } = useParams();
  
  useEffect(() => {
    async function updateNosisStatus() {
      if (errors) {
        return;
      }

      setShowLoader(true);

      try {
        await updateStatusNosis({
          cuit: cuit,
          nosis_status: "finalizado",
        });
  
        history.push("/onboarding/info-post-nosis");
        setCurrentStep(STEPS.STEP_11_CONFIRMAR_PREAPROBADO);
      } catch (error) {
        history.push("/onboarding/error");
        setCurrentStep(STEPS.STEP_99_ERROR);
        console.error(error);
      }
  
      setShowLoader(false);
    }
  
    updateNosisStatus();
  }, [cuit]);
  
  return <>Cargando...</>;
};