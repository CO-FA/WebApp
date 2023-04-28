import React from "react";
import { useHistory } from "react-router-dom";

import { STEPS } from "components/registro/STEPS-MKT";
import { LoaderContext } from "components/loader/LoaderContext";
import { useStepAtom } from "../atoms/Atoms";
import Button from "components/commons/Button";
import Footer from "components/commons/Footer";

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
      <div className="text-center" style={{
        background: "#FFD233",
        width: "100vw !important",
        height: "inherit",
        padding: "40px",
        marginLeft: "-15px",
        marginRight: "-15px",
      }}
      >
        <h3>En estos momentos no tenemos un préstamo para ofrecerte. </h3>
        <Footer>
          <Button onClick={volver} className="btn btn-light cont">
            VOLVER
          </Button>
        </Footer>
      </div>
    </>
  );
}
