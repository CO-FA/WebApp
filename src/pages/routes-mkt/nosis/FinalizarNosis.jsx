import React, { useEffect, useState } from "react";
import "../../../assets/css/main.css";
import { useHistory } from "react-router-dom";
import { useStepAtom, useUrlNosisAtom } from "../atoms/Atoms";
import { STEPS } from "components/registro/STEPS-MKT";

export function FinalizarNosis() {
  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const { urlNosis } = useUrlNosisAtom();

  useEffect(() => {
      if (!errors) {
        history.push("/onboarding/info-post-nosis");
        setCurrentStep(STEPS.STEP_11_CONFIRMAR_PREAPROBADO);
      }else{
        history.push("/onboarding/error");
        setCurrentStep(STEPS.STEP_99_ERROR);
      }
  },[]);    
  
  return <>
    Cargando...
    {window.open(urlNosis, "Verificar Identidad Nosis")}
  </>
};