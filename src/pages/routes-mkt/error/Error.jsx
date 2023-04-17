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
        style={{
          background: "#FFD233",
          width: "100vw !important",
          height: "100vh !important",
          position: "fixed",
          left: 0,
          top: 0,
          margin: "0px",
          padding: "40px",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
          gap: "6em",
        }}
      >
        <h3>En estos momentos no tenemos un préstamo para ofrecerte. </h3>
        <Button onClick={volver} className="btn btn-light cont">
          VOLVER AL PERFIL
        </Button>
      </div>
    </>
  );
}
