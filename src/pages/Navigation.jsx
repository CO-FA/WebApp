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
import Perfil from "./perfil/Perfil";
import PerfilModificarCelular from "../pages/perfil/PerfilModificarCelular";
import PerfilModificarEmail from "../pages/perfil/PerfilModificarEmail";
import PerfilModificarEmailValidacion from "../pages/perfil/PerfilModificarEmailValidicion";
import PerfilModificarPass from "../pages/perfil/PerfilModificarPass";
import PerfilModificarDireccion from "../pages/perfil/PerfilModificarDireccion";
import Notificaciones from "./Notificaciones";
import RegistroDniValido from "./RegistroDniValido";
import PersonalInformation from "./PersonalInformation";
import EstadoCuenta from "./EstadoCuenta";
import Soporte from "./Soporte";
import CargarmiCbu from "./estadofinanciero/CargarmiCbu";
import Cbu from "../pages/estadofinanciero/Cbu";
import CbuList from "./estadofinanciero/CbuList";
import DetallePrestamo from "./estadofinanciero/DetallePrestamo";
import PagarCuota from "./estadofinanciero/PagarCuota";
import PagarCuotaMediodePago from "./estadofinanciero/PagarCuotaMediodePago";
import InformePago from "./estadofinanciero/InformePago";
import SinPrestamo from "./estadofinanciero/SinPrestamo";
import RegistroValidacionCelular from "./RegistroValidacionCelular";
import RegistroValidacionPin from "./RegistroValidacionPin";
import RegistroValidacionUsuario from "./RegistroValidacionUsuario";
import RegistroValidacionApertura from "./RegistroValidacionApertura";
import RegistroValidacionFecha from "./RegistroValidacionFecha";
import RegistroValidacionUltimo from "./RegistroValidacionUltimo";

export default function Navigation() {
  // let location = useLocation();
  const nodeRef = useRef(null);
  return (
    <div className="index">
      <main
        role="main"
        className="container"
        style={{ borderRadius: "35px", overflow: "hidden" }}
      >
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
            <Route path="/perfilModificarCelular">
              <PerfilModificarCelular />
            </Route>
            <Route path="/perfilModificarEmail">
              <PerfilModificarEmail />
            </Route>
            <Route path="/perfilModificarEmailValidacion">
              <PerfilModificarEmailValidacion />
            </Route>
            <Route path="/perfilModificarPass">
              <PerfilModificarPass />
            </Route>
            <Route path="/perfilModificarDireccion">
              <PerfilModificarDireccion />
            </Route>
            <Route path="/notificaciones">
              <Notificaciones />
            </Route>
            <Route path="/cargarmiCbu/cbu">
              <Cbu />
            </Route>
            <Route path="/cargarmiCbu/cbu-list">
              <CbuList />
            </Route>
            <Route path="/cargarmiCbu">
              <CargarmiCbu />
            </Route>
            <Route path="/detalle-prestamo">
              <DetallePrestamo />
            </Route>
            <Route path="/prestamo-pagarcuotas">
              <PagarCuota />
            </Route>
            <Route path="/informe-pago">
              <InformePago />
            </Route>
            <Route path="/prestamo-pagarcuotas-mediodepago">
              <PagarCuotaMediodePago />
            </Route>
            <Route path="/sinPrestamo">
              <SinPrestamo />
            </Route>
            <Route path="/registro-validacion-celular">
              <RegistroValidacionCelular />
            </Route>
            <Route path="/registro-validacion-pin">
              <RegistroValidacionPin />
            </Route>
            <Route path="/registro-validacion-usuario">
              <RegistroValidacionUsuario />
            </Route>
            <Route path="/registro-apertura">
              <RegistroValidacionApertura />
            </Route>
            <Route path="/registro-fecha">
              <RegistroValidacionFecha />
            </Route>
            <Route path="/registro-ultimo">
              <RegistroValidacionUltimo />
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
      </main>
    </div>
  );
}
