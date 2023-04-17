import React, { useState } from "react";
import Encabezado from "components/commons/Encabezado";
import Input from "components/commons/Input";
import Footer from "components/commons/Footer";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { formErrors } from "utils/constantsErrors";
import RegistroSetps from "components/registro/RegistroSteps";
import { STEPS } from "components/registro/STEPS-MKT";
import { useLoaderContext } from "components/loader/LoaderContext";
import Button from "components/commons/Button";
import { useStepAtom, useIdentidadAtom, useCelularAtom } from "../atoms/Atoms";
import { enviarSMSValidacion } from "api/PhoneValidation";

export function RegistroCelular() {
  let { setShowLoader } = useLoaderContext();
  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const { codArea, setCodArea, numCelular, setNumCelular, pin, setPin } =
    useCelularAtom();
  const { identidad } = useIdentidadAtom();

  const submitForm = async (values, setSubmitting) => {
    if (!errors) {
      setShowLoader(true);

      setCodArea(values.clienteCelCodigo);
      setNumCelular(values.clienteCelNumero);

      const data = await enviarSMSValidacion(
        values.clienteCelCodigo + "" + values.clienteCelNumero,
        identidad.dni
      );

      setShowLoader(false);
      history.push("/onboarding/validar-pin");
      setCurrentStep(STEPS.STEP_3_CELULAR);
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
        initialValues={{ clienteCelCodigo: "", clienteCelNumero: "" }}
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
        validate={(values) => validateForm(values)}
      >
        {({
          values,
          handleSubmit,
          /* and other goodies */
        }) => (
          <>
            <form>
              <section>
                <h3>Vamos a validar el celular</h3>
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
                      placeholder="38913312"
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
