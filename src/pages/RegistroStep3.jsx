import React, { useState } from "react";
import Input from "../components/commons/Input";
import Encabezado from "../components/commons/Encabezado";
import Footer from "../components/commons/Footer";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import Button from "../components/commons/Button";
import { formErrors } from "../utils/constantsErrors";
import RegistroSetps from "../components/registro/RegistroSteps";
import SelectorGenero from "../components/registro/SelectorGenero";
import {STEPS} from "../components/registro/constantsSteps"

export default function RegistroStep3() {
	const [errors, setErrors] = useState(false);
	const history = useHistory();

	const submitForm = (values, setSubmitting) => {
		if (!errors) {
			history.push("/documentoValido");
		}
	};
	const validateForm = values => {
		if (!values.clienteDocNumero) {
			setErrors({
				clienteDocNumero: formErrors.DOCUMENT_EMPTY,
			});
		} else if (String(values.clienteDocNumero).length !== 8) {
			setErrors({
				clienteDocNumero: formErrors.DOCUMENT_LENGTH,
			});
		} else if (!values.clienteGender) {
			setErrors({
				clienteGender: formErrors.GENDER_EMPTY,
			});
		} else {
			setErrors(false);
		}
	};

	return (
    <>
      <Encabezado title={<RegistroSetps current={STEPS.STEP_1_DNI} />} />
      <Formik
        initialValues={{ clienteDocNumero: "", clienteGender: "" }}
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
                <div className="btn-group-toggle" data-toggle="buttons">
                  <SelectorGenero values={values} errors={errors} />
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
