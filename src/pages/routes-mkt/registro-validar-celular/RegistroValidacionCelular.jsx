import React from "react";
import Encabezado from "components/commons/Encabezado";
import Input from "components/commons/Input";
import Footer from "components/commons/Footer";
import { Formik } from "formik";
import Button from "components/commons/Button";
import RegistroSetps from "components/registro/RegistroSteps";
import { STEPS } from "components/registro/STEPS-MKT";
import {useCelularAtom} from "../atoms/Atoms";
import { useRegistroValidarCel } from "./hooks/useRegistroValidarCel";


export function RegistroValidacionCelular() {
  const { codArea, numCelular } = useCelularAtom();
  const {submitForm,validateForm, errors, reenviarPinSms} = useRegistroValidarCel()
  
  return (
    <>
      <Encabezado title={<RegistroSetps current={STEPS.STEP_3_CELULAR} />} />
      <Formik
        initialValues={{
          clienteCelCodigo: codArea,
          clienteCelNumero: numCelular,
          clientePin: "",
        }}
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
        validate={(values) => validateForm(values)}
      >
        {({ values, handleSubmit }) => (
          <>
            <form>
              <section>
                <div className="row">
                  <div className="form-group col-3">
                    <Input
                      label="Cód"
                      type="number"
                      placeholder="000"
                      className="form-control"
                      name="clienteCelCodigo"
                      errors={[]}
                      values={values}
                    />
                  </div>
                  <div className="form-group col-9">
                    <Input
                      label="Celular"
                      placeholder="00000000"
                      type="number"
                      className="form-control"
                      name="clienteCelNumero"
                      errors={[]}
                      values={values}
                    />
                  </div>
                  <div className="col-12">
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
                  </div>
                  <div className="col-12 mt-3">
                    <h3>Ingresá el PIN SMS</h3>
                  </div>
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
            </form>
          </>
        )}
      </Formik>
    </>
  );
}
