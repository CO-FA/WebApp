import React from "react";
import Input from "../../../components/commons/Input";
import Button from "../../../components/commons/Button";
import Encabezado from "../../../components/commons/Encabezado";
import Footer from "../../../components/commons/Footer";
import { Formik, Form } from "formik";
import RegistroSetps from "../../../components/registro/RegistroSteps";
import { STEPS } from "../../../components/registro/constantsSteps";
import { useModificarEmail } from "./useModificarEmail";

export default function ValidarEmail() {
  const {validateForm, errors, submitFormValidar} = useModificarEmail()

  return (
    <>
      <Encabezado title={<RegistroSetps current={STEPS.STEP_3_EMAIL} />} />
      <Formik
        initialValues={{ clientePin: "" }}
        onSubmit={(values, { setSubmitting }) =>
        submitFormValidar(values, setSubmitting)
        }
        validate={(values) => validateForm(values)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          /* and other goodies */
        }) => (
          <>
            <section>
              <Form className="pt-3">
                <h3>Ingresá el código</h3>
                <div className="row">
                  <div className="form-group col-12">
                    <Input
                      label="PIN"
                      type="number"
                      className="form-control"
                      name="clientePin"
                      errors={errors}
                      values={values}
                      maxLength="1"
                    />
                  </div>
                  <div className="col-12">
                    <p className="mt-3 text-center">
                      Si no te llegó el correo fijate en SPAM ó correos no
                      deseados.
                      <a className="mt-3 d-block text-underline" href="/">
                        Reenviarme Email
                      </a>
                    </p>
                  </div>
                </div>
              </Form>
            </section>

            <Footer>
              <div className="col-12">
                <Button
                  className="btn btn-primary cont"
                  disabled={false}
                  type="submit"
                  onClick={handleSubmit}
                >
                  GUARDAR
                </Button>
              </div>
            </Footer>
          </>
        )}
      </Formik>
    </>
  );
}
