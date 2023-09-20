import React from "react";
import { Formik, Form } from "formik";
import { usePrestamoAtom } from "../atoms/Atoms";
import { useInfoPreNosis } from "./hooks/useInfoPreNosis";
import Encabezado from "components/commons/Encabezado";
import Footer from "components/commons/Footer";
import Button from "components/commons/Button";

export function InfoPreNosis() {
  const { monto, cuota, montoCuota } = usePrestamoAtom();
  const { submitForm } = useInfoPreNosis();

  return (
    <>
      <Encabezado />
      <Formik
        initialValues={{}}
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
      >
        {() => (
          <Form>
            <section>
              <h3>¡Último paso!</h3>
              <div className="row profile-container">
                <div className="form-group col-12">
                  <h4>Ya tenés APROBADO el préstamo por </h4>
                  <h4>${monto}</h4>
                  <p>
                    En {cuota} cuotas de ${montoCuota}
                  </p>
                </div>
                <div className="form-group col-12">
                  <h4 style={{ fontWeight: "bold" }}>
                    Vamos a validar tu identidad con Nosis
                  </h4>
                  <p>
                    Necesitamos:
                    <br />- Foto del frente y dorso de tu DNI <br />- Una
                    selfie :)
                  </p>
                </div>
              </div>
            </section>
            <Footer>
              <div className="col-12">
                <Button
                  className="btn btn-primary cont"
                  type="submit"
                >
                  CONTINUAR
                </Button>
              </div>
            </Footer>
          </Form>
        )}
      </Formik>
    </>
  );
}
