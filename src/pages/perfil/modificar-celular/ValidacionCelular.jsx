import React from "react";
import Input from "../../../components/commons/Input";
import Footer from "../../../components/commons/Footer";
import { Formik, Form } from "formik";
import Button from "../../../components/commons/Button";
import Encabezadoverde from "../../../components/commons/EncabezadoVerde";
import { usePerfilModificarCelular } from "./usePerfilModificarCelular";

export default function ValidarCelular() {
  const {submitFormValidar,validateForm, errors, reenviarPinSms} = usePerfilModificarCelular()
 
  return (
    <>
      <Encabezadoverde />
      <Formik
        initialValues={{
          clientePin: "",
        }}
        onSubmit={(values, { setSubmitting }) =>
          submitFormValidar(values, setSubmitting)
        }
        validate={(values) => validateForm(values)}
      >
        {({ values, handleSubmit }) => (
          <>
            <Form>
              <section>
                <h3 className="mt-3">Ingresá el PIN SMS</h3>
                <div className="row">
                  <div className="form-group col-12">
                    <Input
                      label="PIN"
                      placeholder="PIN"
                      type="number"
                      className="form-control"
                      name="clientePin"
                      errors={errors}
                      values={values}
                    />
                  </div>
                  <div className="col-12">
                    <p className="mt-5 text-center">
                      <Button
                        type="button"
                        onClick={reenviarPinSms}
                        className="text-underline"
                      >
                        ¿No te llegó? Reenviarme el SMS
                      </Button>
                    </p>
                  </div>
                </div>
              </section>
              <Footer>
                <div className="col-12" style= {{marginTop: "40%"}}>
                  <Button
                    className="btn btn-primary cont"
                    disabled={false}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    GUARDAR {/* TO DO:  guardar los datos en la base de datos */}
                  </Button>
                </div>
              </Footer>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
