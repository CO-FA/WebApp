import React, { useState } from "react";
import Encabezado from "components/commons/Encabezado";
import Input from "components/commons/Input";
import Footer from "components/commons/Footer";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import Button from "components/commons/Button";
import { formErrors } from "utils/constantsErrors";

import RegistroSetps from "components/registro/RegistroSteps";
import { STEPS } from "components/registro/STEPS-MKT";
import { LoaderContext } from "components/loader/LoaderContext";
import { useStepAtom, useIdentidadAtom, useCelularAtom } from "../atoms/Atoms";
import { savePhone } from "api/PhoneValidation";

export function RegistroValidacionCelular() {
  let { setShowLoader } = React.useContext(LoaderContext);
  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const { identidad } = useIdentidadAtom();
  const { codArea, setCodArea, numCelular, setNumCelular, pin, setPin } =
    useCelularAtom();
  const submitForm = async (values, setSubmitting) => {
    if (errors) {
      return;
    }

    if (!errors) {
      setShowLoader(true);
      setShowLoader(false);
      const data = await savePhone(values.clientePin, identidad.dni);
      history.push("/onboarding/calculadora-prestamo");
      setCurrentStep(STEPS.STEP_4_PRESTAMO);
    }
  };
  const validateForm = (values) => {
    var errorsAUx = {};
    if (!values.clienteCelCodigo) {
      errorsAUx = {
        ...errorsAUx,
        clienteCelCodigo: formErrors.CODE_EMPTY,
      };
    } else if (String(values.clienteCelCodigo).length < 2) {
      errorsAUx = {
        ...errorsAUx,
        clienteCelCodigo: formErrors.CODE_PHONE_ERROR,
      };
    } else {
      errorsAUx = false;
    }
    if (!values.clienteCelNumero) {
      errorsAUx = {
        ...errorsAUx,
        clienteCelNumero: formErrors.PHONE_EMPTY,
      };
    } else if (String(values.clienteCelNumero).length < 6) {
      errorsAUx = {
        ...errorsAUx,
        clienteCelNumero: formErrors.PHONE_ERROR,
      };
    } else {
      errorsAUx = errorsAUx || false;
    }
    setErrors(errorsAUx);
  };
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
                      placeholder="011"
                      className="form-control"
                      name="clienteCelCodigo"
                      errors={[]}
                      values={values}
                    />
                  </div>
                  <div className="form-group col-9">
                    <Input
                      label="Celular"
                      placeholder="38 XX XX XX"
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
                      <a href="/" className="text-underline">
                        ¿No te llegó? Reenviarme el SMS
                      </a>
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
                    Continuar
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
