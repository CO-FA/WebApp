import React from "react";
import Encabezado from "components/commons/Encabezado";
import Input from "components/commons/Input";
import Footer from "components/commons/Footer";
import { Form, Formik } from "formik";
import RegistroSetps from "components/registro/RegistroSteps";
import { STEPS } from "components/registro/STEPS-MKT";
import Button from "components/commons/Button";
import { useRegistroCelular } from "./hooks/useRegistroCelular";

export function RegistroCelular() {
  const {submitForm,validateForm,errors} = useRegistroCelular()

  return (
    <>
      <Encabezado title={<RegistroSetps current={STEPS.STEP_3_CELULAR} />} />
      <Formik
        initialValues={{ clienteCelCodigo: "", clienteCelNumero: "" }}
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
            <Form>
              <section>
                <h3>Vamos a validar el celular</h3>
                <div className="row">
                  {/* TO DO: mostrar prefijo pais */}
                  <div className="form-group col-3">
                    <Input
                      label="Código"
                      type="number"
                      placeholder="011"
                      className="form-control"
                      name="clienteCelCodigo"
                      errors={errors}
                      values={values}
                    />
                  </div>
                  <div className="form-group col-9">
                    <Input
                      label="Celular"
                      placeholder="99999999"
                      type="number"
                      className="form-control"
                      name="clienteCelNumero"
                      errors={errors}
                      values={values}
                    />
                  </div>
                  <p style={{marginLeft:"20px"}}>**Ingresa tu numero sin 0 y sin 15**</p>
                  {/* <div className="col-12">
                    {errors["clienteCelCodigo"] && (
                      <span
                        id="clienteCelCodigo-errorMsg"
                        className="form-text text-danger small"
                      >
                        *{errors["clienteCelCodigo"]}
                      </span>
                    )}
                    {errors["clienteCelNumero"] && (
                      <span
                        id="clienteCelCodigo-errorMsg"
                        className="form-text text-danger small"
                      >
                        *{errors["clienteCelNumero"]}
                      </span>
                    )}
                  </div> */}
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
                </div>
              </Footer>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
