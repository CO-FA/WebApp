import { useEffect } from "react";
import { useRef } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "../../assets/css/main.css";
import CalculadoraPrestamo from "./calculadora-prestamo/CalculadoraPrestamo";
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
import { useStepAtom } from "./atoms/Atoms";
import { STEPS } from "components/registro/STEPS-MKT";
import { useToken } from "api/hooks/useToken";
import { Error } from "./error/Error";
import Perfil from "pages/perfil/Perfil";
import ModificarCelular from "pages/perfil/PerfilModificarCelular";
import ModificarEmail from "pages/perfil/PerfilModificarEmail";
import OlvidePasswordStep2 from "pages/perfil/PerfilModificarPass";
import ModificarDireccion from "pages/perfil/PerfilModificarDireccion";
import { FinalizarMobbex } from "./mobbex/FinalizarMobbex";
import { FinalizarNosis } from "./nosis/FinalizarNosis";
import FirmaElectronica from "./firma-electronica/Firma-electronica";
import LogoCofa from "components/logoCofa";
import PinCelularScreen from "./enviar-pin/enviarPinCelular";
import PinEmailScreen from "./enviar-pin/enviarPinEmail";
import { DetallesPrestamo } from "./prestamo-exitoso/DetallesPrestamo";
import { SolicitudPrestamo } from "./prestamo-exitoso/SolicitudPrestamo";
import DetallePrestamo from "pages/estadofinanciero/DetallePrestamo";
import CbuList from "pages/estadofinanciero/CbuList";
import SinPrestamo from "pages/estadofinanciero/SinPrestamo";
import PagarCuota from "pages/estadofinanciero/PagarCuota";
import MediosDePagoCuotas from "pages/estadofinanciero/PagarCuotaMediodePago";
import InformePago from "pages/estadofinanciero/InformePago";
import Notificaciones from "pages/perfil/Notificaciones";
import Soporte from "pages/perfil/Soporte";
import Home from "pages/Home";
import Login from "pages/Login";
import RegistroStep1 from "pages/RegistroStep1";
import RegistroStep2 from "pages/RegistroStep2";
import OlvidePasswordStep1 from "pages/OlvidePasswordStep1";
import OlvidePasswordStep3 from "pages/OlvidePasswordStep3";
import Terminos from "components/registro/Terminos";

const RedirectOnboardign = () => {
  const history = useHistory();
  //const { setCurrentStep } = useStepAtom();
  useEffect(() => {
    history.push("/home");
    //setCurrentStep(STEPS.STEP_1_DNI);
  }, []);
  return null;
};

const VerifyStep = ({ children, step }) => {
  const { currentStep } = useStepAtom();

  /* if (currentStep <= step) { */
  return children;
  /* } */
  /* console.log("Step not set", step, currentStep);
  return <RedirectOnboardign />; */
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
            {/* HOME */}
            <Route path="/home">
                <Home />
            </Route>

            {/* HOME / YA TENGO UN PRESTAMO */}
            {/* esto va directo al perfil. tanto si recupera como si entra con login */}
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/recuperar-pass1">
              <OlvidePasswordStep1 />
            </Route>
            <Route path="/recuperar-pass2">
              <OlvidePasswordStep2 />
            </Route>
            <Route path="/recuperar-pass3">
              <OlvidePasswordStep3 />
            </Route>
            
            
            {/* HOME / QUIERO UN PRESTAMO */}
            {/* arranca el proceso de onboarding */}
            <Route path="/registro">
              <RegistroStep1 />
            </Route>
            <Route path="/terminosycondiciones">
              <RegistroStep2/>
            </Route>
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
            <Route path="/onboarding/enviar-pin-celular">
              <VerifyStep step={STEPS.STEP_3_CELULAR}>
                <PinCelularScreen />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/validar-pin">
              {" "}
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
            <Route path="/onboarding/mobbex">
              <VerifyStep step={STEPS.STEP_7_MOBBEX}>
                <Mobbex />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/finalizar-suscripcion">
              <VerifyStep step={STEPS.STEP_7_MOBBEX}>
                <FinalizarMobbex />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/email">
              <VerifyStep step={STEPS.STEP_8_VALIDAR_EMAIL}>
                <RegistroEmail />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/enviar-pin-email">
              <VerifyStep step={STEPS.STEP_8_VALIDAR_EMAIL}>
                <PinEmailScreen />
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
            <Route path="/onboarding/finalizar-validacion-nosis/:cuit">
              <VerifyStep step={STEPS.STEP_10_VALIDAR_IDENTIDAD_NOSIS}>
                <FinalizarNosis />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/info-post-nosis">
              <VerifyStep step={STEPS.STEP_11_CONFIRMAR_PREAPROBADO}>
                <InfoPostNosis />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/firma-electronica">
              <VerifyStep step={STEPS.STEP_12_FIRMA_ELECTRONICA}>
                <FirmaElectronica />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/prestamo-exitoso">
              <VerifyStep step={STEPS.STEP_13_PRESTAMO_EXITOSO}>
                <PrestamoExitoso />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/detalles-del-prestamo">
              <VerifyStep step={STEPS.STEP_13_PRESTAMO_EXITOSO}>
                <DetallesPrestamo />
              </VerifyStep>
            </Route>
            <Route path="/onboarding/pdf-solicitud-prestamo">
              <VerifyStep step={STEPS.STEP_13_PRESTAMO_EXITOSO}>
                <SolicitudPrestamo />
              </VerifyStep>
            </Route>

            {/* INICIA SEGUNDA PARTE DEL DESARROLLO DE CofApp */}
            <Route path="/perfil">
                <Perfil />
            </Route>
            <Route path="/notificaciones">
              <VerifyStep step={STEPS.STEP_14_NOTIFICACIONES}>
                <Notificaciones/>
              </VerifyStep>
            </Route>
            <Route path="/soporte">
              <VerifyStep step={STEPS.STEP_13_PERFIL}>
                <Soporte/>
              </VerifyStep>
            </Route>

            {/* LINEA MODIFICAR DATOS */}
            <Route path="/perfil-modificar-celular">
              <VerifyStep step={STEPS.STEP_16_MODIFICAR_CELULAR}>
                <ModificarCelular />
              </VerifyStep>
            </Route>
            <Route path="/perfil-modificar-email">
              <VerifyStep step={STEPS.STEP_17_MODIFICAR_EMAIL}>
                <ModificarEmail />
              </VerifyStep>
            </Route>
            <Route path="/perfil-modificar-pass">
              <VerifyStep step={STEPS.STEP_18_MODIFICAR_CONTRASEÑA}>
                <OlvidePasswordStep2 />
              </VerifyStep>
            </Route>
            <Route path="/perfil-modificar-direccion">
              <VerifyStep step={STEPS.STEP_19_MODIFICAR_DIRECCION}>
                <ModificarDireccion />
              </VerifyStep>
            </Route>


            {/* LINEA ESTADO FINANCIERO / MIS PRESTAMOS */}
            <Route path="/detalle-prestamo">
              <VerifyStep step={STEPS.STEP_22_DETALLE_PRESTAMO}>
                <DetallePrestamo/>
              </VerifyStep>
            </Route>
            <Route path="/instancia-judicial">
              <VerifyStep step={STEPS.STEP_22_DETALLE_PRESTAMO}>
                <SinPrestamo/>
              </VerifyStep>
            </Route>
            <Route path="/pagar-cuota">
              <VerifyStep step={STEPS.STEP_22_DETALLE_PRESTAMO}>
                <PagarCuota/>
              </VerifyStep>
            </Route>
            <Route path="/pagar-cuota-medios-de-pago">
              <VerifyStep step={STEPS.STEP_22_DETALLE_PRESTAMO}>
                <MediosDePagoCuotas/>
              </VerifyStep>
            </Route>
            <Route path="/informe-pago">
              <VerifyStep step={STEPS.STEP_22_DETALLE_PRESTAMO}>
                <InformePago/>
              </VerifyStep>
            </Route>
            {/* cancelar prestamo */}
            {/* refinanciar prestamo */}


            {/* LINEA ESTADO FINANCIERO / CARGAR CBU-CVU */}
            <Route path="/mis-cbu-cvu">
              <VerifyStep step={STEPS.STEP_23_CARGAR_CBU}>
                <CbuList/>
              </VerifyStep>
            </Route>
            <Route path="/cargar-otro-cbu">
              <VerifyStep step={STEPS.STEP_23_CARGAR_CBU}>
                <RegistroCbu/>
              </VerifyStep>
            </Route>

            {/* LINEA ESTADO FINANCIERO / CARGAR MIS TARJETAS */}
            {/* listado de mis tarjetas cargadas */}
            <Route path="/cargar-tarjeta">
              <VerifyStep step={STEPS.STEP_24_CARGAR_TARJETA}>
                <Mobbex />
              </VerifyStep>
            </Route>

            {/* LINEA VER ASISTENCIAS - disabled */}

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
