import React, { useState } from "react";
import Input from "../../components/commons/Input";
import Encabezado from "../../components/commons/Encabezado";
import Footer from "../../components/commons/Footer";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import Button from "../../components/commons/Button";
import { formErrors } from "../../utils/constantsErrors";

export default function OlvidePasswordStep1() {
	const [errors, setErrors] = useState(false);
	const history = useHistory();

	const submitForm = (values, setSubmitting) => {
		if (!errors) {
			history.push("/recuperar-pass2");
		}
	};
	const validateForm = values => {
		const pattern =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const regex = new RegExp(pattern);

		if (!values.clienteEmail) {
			setErrors({
				clienteEmail: formErrors.EMAIL_EMPTY,
			});
		} else if (!regex.test(values.clienteEmail)) {
			setErrors({
				clienteEmail: formErrors.PATTERN_EMAIL_ERROR,
			});
		} else {
			setErrors(false);
		}
	};

	return (
    <>
      <Encabezado />
      <Formik
        initialValues={{ clienteEmail: "" }}
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
                <h3>Recuperar mi contraseña</h3>
                <div className="row">
                  <div className="form-group col-12">
                    <Input
                      label="Ingresá tu Email"
                      type="email"
                      className="form-control"
                      name="clienteEmail"
                      errors={errors}
                      values={values}
                    />
                  </div>
                  <div className="col-12">
                    <p className="mt-3 text-center">
                      Te vamos a enviar un email con un código de activación de
                      4 dígitos
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
