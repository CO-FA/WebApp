import React, { useEffect, useState } from "react";
import "../../../assets/css/main.css";
import { useHistory } from "react-router-dom";
import { LoaderContext } from "../../../components/loader/LoaderContext";
import { useStatusNosisAtom, useStepAtom } from "../atoms/Atoms";
import { STEPS } from "components/registro/STEPS-MKT";
import { useParams } from "react-router-dom";


export function FinalizarNosis() {
  let { setShowLoader } = React.useContext(LoaderContext);
  const [errors] = useState(false);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const { statusNosis } = useStatusNosisAtom();
  let { cuit } = useParams();
  
 
  useEffect(() => {
    if (errors) {
      return;  
    }
    if (!errors) {
      setShowLoader(true);
      try {
        //http://localhost:8888/#/onboarding/finalizar-validacion-nosis/:nrodocumento + ticket.
        /* invocar a nuestro backend con el numero de documento que recibimos en la url (querystring) */
        /* guardar estado nosis y navego a la proxima pantalla */
        if(statusNosis === "OK"){
          history.push("/onboarding/info-post-nosis");
          setCurrentStep(STEPS.STEP_11_CONFIRMAR_PREAPROBADO);
        }
      } catch (error) {
        history.push("/onboarding/error"); 
        setCurrentStep(STEPS.STEP_99_ERROR);
        console.error(error);
      }
      setShowLoader(false);
  }}, [cuit]);

  return <>Cargando...</>;
};