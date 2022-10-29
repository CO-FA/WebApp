import React, { useState } from "react";
import Input from "components/commons/Input";
import Encabezado from "components/commons/Encabezado";
import Footer from "components/commons/Footer";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import Button from "components/commons/Button";
import { formErrors } from "utils/constantsErrors";
import RegistroSetps from "components/registro/RegistroSteps";
import { STEPS } from "components/registro/STEPS-MKT";
import { useStepAtom } from "../atoms/Atoms";

export function RegistroDni() {
  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const submitForm = (values, setSubmitting) => {
    if (!errors) {
      history.push("/onboarding/elegir-identidad");
      setCurrentStep(STEPS.STEP_2_IDENTIDAD);
    }
  };
  const validateForm = (values) => {
    if (!values.clienteDocNumero) {
      setErrors({
        clienteDocNumero: formErrors.DOCUMENT_EMPTY,
      });
    } else if (String(values.clienteDocNumero).length < 7) {
      setErrors({
        clienteDocNumero: formErrors.DOCUMENT_LENGTH,
      });
    } else {
      setErrors(false);
    }
  };

  return (
    <>
      <Encabezado title={<RegistroSetps current={STEPS.STEP_1_DNI} />} />
      <Formik
        initialValues={{ clienteDocNumero: "" }}
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
        validate={(values) => validateForm(values)}
      >
        {({ values, handleSubmit }) => (
          <>
            <section>
              <form className="pt-3">
                <div className="row">
                  <div className="form-group col-12">
                    <Input
                      label="Nro DNI"
                      type="number"
                      className="form-control"
                      name="clienteDocNumero"
                      errors={errors}
                      values={values}
                    />
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
                  Continuar
                </Button>
              </div>
            </Footer>
          </>
        )}
      </Formik>
    </>
  );
}
