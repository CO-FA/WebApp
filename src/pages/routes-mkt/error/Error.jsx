import React from "react";
import { useHistory } from "react-router-dom";

import { STEPS } from "components/registro/STEPS-MKT";
import { LoaderContext } from "components/loader/LoaderContext";
import { useStepAtom } from "../atoms/Atoms";
import Button from "components/commons/Button";

export function Error() {
  let { setShowLoader } = React.useContext(LoaderContext);

  const history = useHistory();
  const { setCurrentStep } = useStepAtom();

  const volver = async (values, setSubmitting) => {
    setShowLoader(true);
    //Limpiar atoms
    setShowLoader(false);
    history.push("/onboarding/registro-dni");
    setCurrentStep(STEPS.STEP_1_DNI);
  };

  return (
    <>
      <div
        className="container  w-100 h-100 text-center"
        style={{ background: "#FFD233" }}
      >
        <h3>En estos momentos no tenemos un préstamo para ofrecerte. </h3>
        <Button onClick={volver}>Volver</Button>
      </div>
    </>
  );
}
