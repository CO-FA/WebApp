import React, { useState } from "react";
import Input from "components/commons/Input";
import Encabezado from "components/commons/Encabezado";
import Footer from "components/commons/Footer";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import Button from "components/commons/Button";
import { formErrors } from "utils/constantsErrors";
import RegistroSetps from "components/registro/RegistroSteps";
import { STEPS } from "components/registro/STEPS-MKT";
import { useStepAtom, useIdentidadAtom } from "../atoms/Atoms";
import { useLoaderContext } from "components/loader/LoaderContext";

export function RegistroDni() {
  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const { documento, setDocumento } = useIdentidadAtom();
  const { setShowLoader } = useLoaderContext();

  const submitForm = async (values, setSubmitting) => {
    if (!errors) {
      setDocumento(values.clienteDocNumero);
      setShowLoader(true);

      history.push("/onboarding/elegir-identidad");
      setCurrentStep(STEPS.STEP_2_IDENTIDAD);
      console.log("nav /onboarding/elegir-identidad");
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
        initialValues={{ clienteDocNumero: documento }}
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
        validate={(values) => validateForm(values)}
      >
        {({ values, handleSubmit }) => (
          <>
            <section>
              <Form>
                <div className="pt-3">
                  <div className="row">
                    <div className="form-group col-12">
                      <Input
                        label="Nro DNI"
                        type="number"
                        placeholder={"Ingrese Nro DNI"}
                        className="form-control"
                        name="clienteDocNumero"
                        errors={errors}
                        values={values}
                      />
                    </div>
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
