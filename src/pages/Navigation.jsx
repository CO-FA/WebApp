import { useRef } from "react";
import { Switch, Route } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../assets/css/main.css";
import Home from "../pages/Home";
import RegistroStep1 from "../pages/RegistroStep1";
import RegistroStep2 from "../pages/RegistroStep2";
import RegistroStep3 from "../pages/RegistroStep3";
import RegistroStep4 from "../pages/RegistroStep4";
import RegistroStep5 from "../pages/RegistroStep5";
import RegistroStep6 from "../pages/RegistroStep6";
import RegistroStep7 from "../pages/RegistroStep7";
import Login from "../pages/Login";
import OlvidePasswordStep1 from "../pages/OlvidePasswordStep1";
import OlvidePasswordStep2 from "../pages/OlvidePasswordStep2";
import OlvidePasswordStep3 from "../pages/OlvidePasswordStep3";
import Perfil from "./Perfil";
import PerfilModificarDatos from  "../pages/perfilModificarDatos"
import Notificaciones from "./Notificaciones";
import RegistroDniValido from "./RegistroDniValido";
import PersonalInformation from "./PersonalInformation";
import EstadoCuenta from "./EstadoCuenta";
import Soporte from "./Soporte";

export default function Navigation() {
  // let location = useLocation();
  const nodeRef = useRef(null);
  return (
    <div className="index">
      <main role="main" className="container">
        {/* <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="page"
            timeout={300}
            nodeRef={nodeRef}
            unmountOnExit
          > */}
        {/*TODO: Arreglar animación de transicion entre pantallas*/}
        <div className="animation-item" ref={nodeRef}>
          <Switch>
            <Route path="/registro">
              <RegistroStep1 />
            </Route>
            <Route path="/terminos">
              <RegistroStep2 />
            </Route>
            <Route path="/documento">
              <RegistroStep3 />
            </Route>
            <Route path="/documentoValido">
              <RegistroDniValido />
            </Route>
            <Route path="/validatePhone">
              <RegistroStep4 />
            </Route>
            <Route path="/validatePhonePIN">
              <RegistroStep5 />
            </Route>
            <Route path="/validateEmail">
              <RegistroStep6 />
            </Route>
            <Route path="/emailCode">
              <RegistroStep7 />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/forgotPassword">
              <OlvidePasswordStep1 />
            </Route>
            <Route path="/emailCode">
              <OlvidePasswordStep2 />
            </Route>
            <Route path="/newPassword">
              <OlvidePasswordStep3 />
            </Route>
            <Route path="/perfil">
              <Perfil />
            </Route>
            <Route path="/perfilModificarDatos">
              <PerfilModificarDatos />
            </Route>
            <Route path="/notificaciones">
              <Notificaciones />
            </Route>
            <Route path="/informacionPersonal">
              <PersonalInformation />
            </Route>
            <Route path="/estadoCuenta">
              <EstadoCuenta />
            </Route>
            <Route path="/soporte">
              <Soporte />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        {/* </CSSTransition>
        </TransitionGroup> */}
      </main>
    </div>
  );
}
