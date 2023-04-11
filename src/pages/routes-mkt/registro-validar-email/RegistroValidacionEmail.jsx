import React, { useState } from "react";
import Input from "../../../components/commons/Input";
import Button from "../../../components/commons/Button";
import Encabezado from "../../../components/commons/Encabezado";
import Footer from "../../../components/commons/Footer";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import {  formErrors  } from "../../../utils/constantsErrors";

import RegistroSetps from "../../../components/registro/RegistroSteps";
import { STEPS } from "../../../components/registro/constantsSteps";
import { LoaderContext } from "../../../components/loader/LoaderContext";

export default function RegistroValidacionEmail() {
  let { setShowLoader } = React.useContext(LoaderContext);
	const [errors, setErrors] = useState(false);
	const history = useHistory();

	const submitForm = (values, setSubmitting) => {
		if (!errors) {
      setShowLoader(false)
			history.push("/newPassword");
		}
	};
	const validateForm = values => {
		if (!values.clientePin) {
			setErrors({ clientePin: formErrors.CODE_EMPTY });
		} else if (String(values.clientePin).length !== 4) {
			setErrors({ clientePin: formErrors.CODE_LENGTH });
		} else {
			setErrors(false);
		}
	};

	return (
    <>
      <Encabezado title={<RegistroSetps current={STEPS.STEP_3_EMAIL} />}/>
      <Formik
        initialValues={{ clientePin: "" }}
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
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
              <form className="pt-3">
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
                      <a className="mt-3 d-block text-underline" href="/">
                        Reenviarme Email
                      </a>
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