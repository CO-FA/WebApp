import React, { useState } from "react";
import Encabezado from "components/commons/Encabezado";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import Footer from "components/commons/Footer";
import Button from "components/commons/Button";
import { STEPS } from "../../../components/registro/constantsSteps";
import { LoaderContext } from "../../../components/loader/LoaderContext";
import { useStepAtom, usePrestamoAtom, useLeadAtom, useIdentidadAtom } from "../atoms/Atoms";
import { useCbuAtom } from "../atoms/Atoms";
import { useFindBanco } from "../registro-cbu/hooks/useFindBanco";
import { aceptacionDeTerminos, firmaElectronica } from "api/TerminosYCondiciones";
import { getIpAddress } from "api/ip";

export function InfoPostNosis() {
  let { setShowLoader } = React.useContext(LoaderContext);
  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const { monto, cuota, montoCuota } = usePrestamoAtom();
  const { clienteCbu } = useCbuAtom();
  const { banco } = useFindBanco({ cbu: clienteCbu });
  const { identidad } = useIdentidadAtom();
  const { lead } = useLeadAtom();

  const submitForm = async (values, setSubmitting) => {
    if (errors) {
      return;
    }
    if (!errors) {
      setShowLoader(true);
      try {
        const ipCliente = await getIpAddress()
 
        const confirmacionSolicitud = await aceptacionDeTerminos(
          { 
          idPreaprobado: lead.id_preaprobado,
          nroDocumento:identidad.cuit,
          IP: ipCliente 
        })
        console.log("status confirmacion prestamo", confirmacionSolicitud) 

        const infoFirmaElectronica = await firmaElectronica({
          idPrestamo: "1000001",
          accion: 1, //1: Generar y enviar documento para firma electrónica. Según el servicio contratado y la configuración en la plataforma SB, será enviado por mail, SMS o WhatsApp.
        })
        console.log("Firma Electronica", infoFirmaElectronica)

        history.push("/onboarding/firma-electronica");
        setCurrentStep(STEPS.STEP_12_FIRMA_ELECTRONICA);
        
      } catch (error) {
        history.push("/onboarding/error");
        setCurrentStep(STEPS.STEP_99_ERROR);
        console.error(error);
      }
      setShowLoader(false);
    }
  };

  return (
    <>
      <Encabezado />
      <Formik
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
        /* validate={(values) => validateForm(values)} */
      >
        {({
          values,
          handleSubmit,
          /* and other goodies */
        }) => (
          <>
            <form>
              <section>
                <h3>Revisá y confirmá</h3>
                <div className="row profile-container">
                  <div className="form-group col-12">
                    <p>Estas pidiendo un préstamo de ${monto}</p>
                    <p>
                      A devolver en {cuota} cuotas de ${montoCuota} <br />
                      <b> con vencimiento primera cuota el DD/MM/AA </b>
                    </p>
                    <p>
                      Te lo estaremos depositando en tu CBU/CVU <br />{" "}
                      {clienteCbu} <br />
                      {banco?.ds_banco}
                    </p>
                  </div>
                </div>
              </section>
              <Footer>
                <div className="col-12">
                  <Button
                    className="btn btn-primary cont"
                    disabled={false}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    CONTINUAR
                  </Button>
                  <p style={{fontSize: '12px'}}>
                    <b>
                    Al confirmar declaro aceptar la solicitud de crédito y sus
                    términos y condiciones</b>
                  </p>
                  <div className="form-group col-12">
                    <Button>Detalles de la operación</Button> {/* detalles del prestamo */}
                    <Button>Solicitud de crédito</Button>
                  </div>
                </div>
              </Footer>
            </form>
          </>
        )}
      </Formik>
    </>
  );
}
