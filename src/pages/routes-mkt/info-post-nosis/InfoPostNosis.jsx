import React from "react";
import Button from "components/commons/Button";
import { Formik } from "formik";
import { useCbuAtom, usePrestamoAtom } from "../atoms/Atoms";
import { useFindBanco } from "../registro-cbu/hooks/useFindBanco";
import Encabezado from "components/commons/Encabezado";
import Footer from "components/commons/Footer";
import { useInfoPostNosis } from "./hooks/useInfoPostNosis";
import "../../../assets/css/main.css";

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
                    <hr></hr>
                    <div className="button-container">
                      <Button 
                        onClick={() => {
                          handleButtonClick("detalles");
                        }}  
                      >Detalles de la operación
                      </Button> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 2.03033C-0.0732232 1.73744 -0.0732233 1.26256 0.21967 0.96967C0.512563 0.676777 0.987437 0.676777 1.28033 0.96967L5.78033 5.46967C6.07322 5.76256 6.07322 6.23744 5.78033 6.53033L1.28033 11.0303C0.987438 11.3232 0.512564 11.3232 0.219671 11.0303C-0.0732224 10.7374 -0.0732225 10.2626 0.219671 9.96967L4.18934 6L0.21967 2.03033Z" fill="#16171B"/>
                      </svg>
                    </div>
                    <hr></hr>
                    <div className="button-container">
                      <Button
                        onClick={() => {
                          handleButtonClick("solicitud");
                        }}
                      >Solicitud de crédito</Button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 2.03033C-0.0732232 1.73744 -0.0732233 1.26256 0.21967 0.96967C0.512563 0.676777 0.987437 0.676777 1.28033 0.96967L5.78033 5.46967C6.07322 5.76256 6.07322 6.23744 5.78033 6.53033L1.28033 11.0303C0.987438 11.3232 0.512564 11.3232 0.219671 11.0303C-0.0732224 10.7374 -0.0732225 10.2626 0.219671 9.96967L4.18934 6L0.21967 2.03033Z" fill="#16171B"/>
                      </svg>
                    </div>
                    <hr></hr>
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
