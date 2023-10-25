import React from "react";
import Encabezado from "components/commons/Encabezado";
import { Formik, Form } from "formik";
import Footer from "components/commons/Footer";
import Button from "components/commons/Button";
import { usePrestamoExitoso } from "./hooks/usePrestamoExitoso";
import { useIdentidadAtom } from "../../atoms/Atoms";

export function PrestamoExitoso() {
  const { submitForm, handleButtonClick } = usePrestamoExitoso();
  const {identidad} = useIdentidadAtom();
  return(
      <>
      <Encabezado/>
      <Formik
          onSubmit={() =>
          submitForm()
          }
      >
          {({
          handleSubmit,
          }) => (
          <>
              <Form>
                  <section>
                      <div className="row profile-container" style={{textAlign: "center"}}>
                          
                          <div className="form-group col-12" >
                              <h4>FELICITACIONES</h4>
                              <p>{identidad.nombreCompleto} <br/>Ya tenés el préstamo!!!</p>
                              <p>En segundos vas a tener depositado el dinero en tu cuenta.</p>
                          </div>
                          <div className="col-12" style={{marginTop:"60px"}}>
                              <h5 >Gracias por confiar en COFA</h5>
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
                              FINALIZAR OPERACIÓN
                          </Button>
                      </div>
                      <div className="form-group col-12" style={{marginTop:"10%"}}>
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
                  </Footer>
              </Form>
          </>
          )}
      </Formik>
  </>
);
}


