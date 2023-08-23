import React, { useEffect, useState } from "react";
import "../../../assets/css/main.css";
import { useHistory } from "react-router-dom";
import { useStepAtom } from "../atoms/Atoms";
import { STEPS } from "components/registro/STEPS-MKT";

export function FinalizarMobbex() {
  const [errors] = useState(false);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();

  useEffect(() => {
    if (window.parent) {
      window.parent.location.href = window.location.href
    }
    if (!errors) {
      history.push("/onboarding/email");
      setCurrentStep(STEPS.STEP_8_VALIDAR_EMAIL);
    }else{
      history.push("/onboarding/error");
      setCurrentStep(STEPS.STEP_99_ERROR);
    }
  },[])     
  
  return <>Cargando...</>
};