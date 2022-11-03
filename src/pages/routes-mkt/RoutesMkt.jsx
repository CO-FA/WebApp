import { useEffect } from "react";
import { useRef } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import "../../assets/css/main.css";
import CalculadoraPrestamo from "./calculadora-prestamo/CalculadoraPrestamo";
import { RegistroCelular } from "./registro-celular/RegistroCelular";
import { RegistroDni } from "./registro-dni/RegistroDni";
import RegistroElegirIdentidad from "./registro-elegir-identidad/RegistroElegirIdentidad";
import { RegistroValidacionCelular } from "./registro-validar-celular/RegistroValidacionCelular";

import { useStepAtom } from "./atoms/Atoms";
import { STEPS } from "components/registro/STEPS-MKT";
import { useToken } from "api/hooks/useToken";

const RedirectOnboardign = () => {
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();

  useEffect(() => {
    history.push("/onboarding/registro-dni");
    setCurrentStep(STEPS.STEP_1_DNI);
    console.log("aaa");
  }, []);

  return null;
};

const VerifyStep = ({ children, step }) => {
  const { currentStep } = useStepAtom();

  if (currentStep <= step) {
    return children;
  }
  console.log("Step not set", step, currentStep);
  return <RedirectOnboardign />;
};

export function RoutesMkt() {
  useToken();
  // let location = useLocation();
  const nodeRef = useRef(null);
  return (
    <div className="index">
      <main
        role="main"
        className="container"
        style={{ borderRadius: "35px", overflow: "hidden" }}
      >
        <div className="animation-item" ref={nodeRef}>
          <Switch>
            <Route path="/onboarding/registro-dni">
              <VerifyStep step={STEPS.STEP_1_DNI}>
                <RegistroDni />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/elegir-identidad">
              <VerifyStep step={STEPS.STEP_2_IDENTIDAD}>
                <RegistroElegirIdentidad />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/celular">
              <VerifyStep step={STEPS.STEP_3_CELULAR}>
                <RegistroCelular />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/validar-pin">
              <VerifyStep step={STEPS.STEP_3_CELULAR}>
                <RegistroValidacionCelular />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/calculadora-prestamo">
              <VerifyStep step={STEPS.STEP_4_PRESTAMO}>
                <CalculadoraPrestamo />
              </VerifyStep>
            </Route>

            <Route path="/">
              <RedirectOnboardign />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}
