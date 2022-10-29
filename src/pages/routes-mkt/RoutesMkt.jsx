import { useEffect } from "react";
import { useRef } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import "../../assets/css/main.css";
import { RegistroCelular } from "./registro-celular/RegistroCelular";
import { RegistroDni } from "./registro-dni/RegistroDni";
import RegistroElegirIdentidad from "./registro-elegir-identidad/RegistroElegirIdentidad";
import { RegistroValidacionCelular } from "./registro-validar-celular/RegistroValidacionCelular";

const RedirectOnboardign = () => {
  const history = useHistory();
  useEffect(() => {
    history.push("/onboarding/registro-dni");
  }, []);
  return null;
};

export function RoutesMkt() {
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
              <RegistroDni />
            </Route>
            <Route path="/onboarding/elegir-identidad">
              <RegistroElegirIdentidad />
            </Route>
            <Route path="/onboarding/celular">
              <RegistroCelular />
            </Route>
            <Route path="/onboarding/validar-pin">
              <RegistroValidacionCelular />
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
