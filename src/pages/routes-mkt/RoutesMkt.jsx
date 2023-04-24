import { useEffect } from "react";
import { useRef } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import "../../assets/css/main.css";

//Export default
import CalculadoraPrestamo from "./calculadora-prestamo/CalculadoraPrestamo";

//export
import { RegistroCelular } from "./registro-celular/RegistroCelular";

import { RegistroDni } from "./registro-dni/RegistroDni";
import RegistroElegirIdentidad from "./registro-elegir-identidad/RegistroElegirIdentidad";
import { RegistroValidacionCelular } from "./registro-validar-celular/RegistroValidacionCelular";
import { RegistroClave } from "./registro-clave/RegistroClave";
import RegistroCbu from "./registro-cbu/RegistroCbu";
import { Mobbex } from "./mobbex/Mobbex";
import RegistroEmail from "./registro-email/RegistroEmail";
import RegistroValidacionEmail from "./registro-validar-email/RegistroValidacionEmail";
import { InfoPreNosis } from "./info-pre-nosis/InfoPreNosis";
import { InfoPostNosis } from "./info-post-nosis/InfoPostNosis";
import { PrestamoExitoso } from "./prestamo-exitoso/PrestamoExitoso";
import Nosis from "./nosis/Nosis";

import { useStepAtom } from "./atoms/Atoms";
import { STEPS } from "components/registro/STEPS-MKT";
import { useToken } from "api/hooks/useToken";
import { Error } from "./error/Error";

const RedirectOnboardign = () => {
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  useEffect(() => {
    history.push("/onboarding/registro-dni");
    setCurrentStep(STEPS.STEP_1_DNI);
  }, []);

  return null;
};

const VerifyStep = ({ children, step }) => {
  const { currentStep } = useStepAtom();

  /* if (currentStep <= step) { */
  return children;
  /* } */
  console.log("Step not set", step, currentStep);
  return <RedirectOnboardign />;
};

export function RoutesMkt() {
  useToken();
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
              {" "}
              {/* hacer 4 lugares para ingresar pin */}
              <VerifyStep step={STEPS.STEP_3_CELULAR}>
                <RegistroValidacionCelular />
              </VerifyStep>
            </Route>

            <Route path="/onboarding/calculadora-prestamo">
              <VerifyStep step={STEPS.STEP_4_PRESTAMO}>
                <CalculadoraPrestamo />
              </VerifyStep>
            </Route>

            <Route path="/onboarding/password">
              <VerifyStep step={STEPS.STEP_5_CLAVE}>
                <RegistroClave />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/cbu">
              <VerifyStep step={STEPS.STEP_6_VALIDAR_CBU}>
                <RegistroCbu />
              </VerifyStep>
            </Route>
            {/* --> va a mobbex */}
            <Route path="/onboarding/mobbex">
              <VerifyStep step={STEPS.STEP_7_MOBBEX}>
                <Mobbex urlMobbex={"https://www.google.com"} />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/email">
              <VerifyStep step={STEPS.STEP_8_VALIDAR_EMAIL}>
                <RegistroEmail />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/validar-pin-email">
              <VerifyStep step={STEPS.STEP_8_VALIDAR_EMAIL}>
                <RegistroValidacionEmail />
              </VerifyStep>
            </Route>

            <Route path="/onboarding/info-pre-nosis">
              <VerifyStep step={STEPS.STEP_9_VERIFICAR_PREAPROBADO}>
                <InfoPreNosis />
              </VerifyStep>
            </Route>

            {/* --> va a nosis */}
            <Route path="/onboarding/nosis">
              <VerifyStep step={STEPS.STEP_10_VALIDAR_IDENTIDAD_NOSIS}>
                <Nosis />
              </VerifyStep>
            </Route>

            <Route path="/onboarding/info-post-nosis">
              <VerifyStep step={STEPS.STEP_11_CONFIRMAR_PREAPROBADO}>
                <InfoPostNosis />
              </VerifyStep>
            </Route>

            <Route path="/onboarding/prestamo-exitoso">
              <VerifyStep step={STEPS.STEP_12_PRESTAMO_EXITOSO}>
                <PrestamoExitoso />
              </VerifyStep>
            </Route>

            <Route path="/onboarding/error">
              <VerifyStep step={STEPS.STEP_99_ERROR}>
                <Error />
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
