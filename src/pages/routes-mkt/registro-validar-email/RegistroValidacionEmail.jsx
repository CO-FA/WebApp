import React from "react";
import Input from "../../../components/commons/Input";
import Button from "../../../components/commons/Button";
import Encabezado from "../../../components/commons/Encabezado";
import Footer from "../../../components/commons/Footer";
import { Formik } from "formik";
import RegistroSetps from "../../../components/registro/RegistroSteps";
import { STEPS } from "../../../components/registro/STEPS-MKT";
import { useRegistroValidarEmail } from "./hooks/useRegistroValidarEmail";

export default function RegistroValidacionEmail() {
  const {submitForm,validateForm, reenviarPinEmail, errors} = useRegistroValidarEmail()

	return (
    <>
      <Encabezado title={<RegistroSetps current={STEPS.STEP_8_VALIDAR_EMAIL} />}/>
      <Formik
        initialValues={{ clientePin: "" }}
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
        validate={(values) => validateForm(values)}
      >
        {({
          values,
          handleSubmit,
        }) => (
          <>
            <section>
              <form>
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
                      Si no te llegó el correo fijate en SPAM o correos no
                      deseados.
                      <Button
                        type="button"
                        onClick={reenviarPinEmail}
                        className="text-underline"
                      >
                        Reenviarme Email
                      </Button>
                    </p>
                  </div>
                </div>
              </form>
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
              </div>
            </Footer>
          </>
        )}
      </Formik>
    </>
  );
}