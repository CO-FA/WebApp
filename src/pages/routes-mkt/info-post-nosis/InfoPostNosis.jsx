import React from "react";
import Button from "components/commons/Button";
import { Formik } from "formik";
import { useCbuAtom, usePrestamoAtom } from "../atoms/Atoms";
import { useFindBanco } from "../registro-cbu/hooks/useFindBanco";
import Encabezado from "components/commons/Encabezado";
import Footer from "components/commons/Footer";
import { useInfoPostNosis } from "./hooks/useInfoPostNosis";

export function InfoPostNosis() {
  const { monto, cuota, montoCuota } = usePrestamoAtom();
  const { clienteCbu } = useCbuAtom();
  const { banco } = useFindBanco({ cbu: clienteCbu });
  const { submitForm, handleButtonClick } = useInfoPostNosis();

  return (
    <>
      <Encabezado />
      <Formik
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
      >
        {({
          values,
          handleSubmit,
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
                      <b> con vencimiento primera cuota el DD/MM/AA </b> {/* TO DO: pasar dia de vencimiento */}
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
                    <Button 
                      onClick={() => {
                        handleButtonClick("detalles");}}  
                    >Detalles de la operación</Button> {/*TO DO: api prestamos/detalles de prestamo */}
                    <Button
                      onClick={() => {
                        handleButtonClick("solicitud");
                      }}
                    >Solicitud de crédito</Button> {/* TO DO: api prestamo / descargar contrato*/}
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
