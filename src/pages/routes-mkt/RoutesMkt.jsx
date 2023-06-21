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
import Perfil from "pages/perfil/Perfil";
import ModificarCelular from "pages/perfil/PerfilModificarCelular";
import ModificarEmail from "pages/perfil/PerfilModificarEmail";
import OlvidePasswordStep2 from "pages/perfil/PerfilModificarPass";
import ModificarDireccion from "pages/perfil/PerfilModificarDireccion";
import DetallePrestamo from "pages/estadofinanciero/DetallePrestamo";
import { FinalizarMobbex } from "./mobbex/FinalizarMobbex";

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
            {/* <Route path="/onboarding/finalizar-suscripcion">
              <VerifyStep step={STEPS.STEP_7_MOBBEX}>
                <FinalizarMobbex />
              </VerifyStep>
            </Route> */}
            
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

            <Route path="/perfil">
              <VerifyStep step={STEPS.STEP_13_PERFIL}>
                <Perfil />
              </VerifyStep>
            </Route>

            <Route path="/notificaciones">
              <VerifyStep step={STEPS.STEP_14_NOTIFICACIONES}>
                {/* falta pantalla */}
              </VerifyStep>
            </Route>

            <Route path="/editar-perfil">
              <VerifyStep step={STEPS.STEP_15_EDITAR_PERFIL}>
                {/* falta pantalla */}
              </VerifyStep>
            </Route>

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
            <Route path="/perfil-modificar-contraseña">
              <VerifyStep step={STEPS.STEP_18_MODIFICAR_CONTRASEÑA}>
                <OlvidePasswordStep2 />
              </VerifyStep>
            </Route>

            <Route path="/perfil-modificar-direccion">
              <VerifyStep step={STEPS.STEP_19_MODIFICAR_DIRECCION}>
                <ModificarDireccion />
              </VerifyStep>
            </Route>

            <Route path="/estado-financiero">
              <VerifyStep step={STEPS.STEP_20_ESTADO_FINANCIERO}>
                {/* falta pantalla */}
              </VerifyStep>
            </Route>

            <Route path="/mis-prestamos">
              <VerifyStep step={STEPS.STEP_21_MIS_PRESTAMOS}>
                {/* aparecen los numeros de todos los prestamos en pantalla */}
                {/* seleccionando uno va a detalle prestamo */}
              </VerifyStep>
            </Route>

            <Route path="/detalle-prestamos">
              <VerifyStep step={STEPS.STEP_22_DETALLE_PRESTAMO}>
                <DetallePrestamo />
              </VerifyStep>
            </Route>

            <Route path="/cargar-otro-cbu">
              <VerifyStep step={STEPS.STEP_23_CARGAR_CBU}>
                {/* carga cbu */}
                {/* pequeños cambios con respecto a la pantalla de onboarding */}
              </VerifyStep>
            </Route>

            <Route path="/cargar-tarjeta">
              <VerifyStep step={STEPS.STEP_24_CARGAR_TARJETA}>
                {/* cargar mi tarjta --> va a mobbex */}
              </VerifyStep>
            </Route>

            <Route path="/seguros">
              <VerifyStep step={STEPS.STEP_25_SEGUROS}>
                {/* perfil --> seguros */}
              </VerifyStep>
            </Route>

            {/* <Route path="/">
              <VerifyStep step={STEPS.}>

              </VerifyStep>
            </Route> */}








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
