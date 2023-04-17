import React, { useState } from "react";
import Button from "../components/commons/Button";
import Input from "../components/commons/Input";
import Encabezado from "../components/commons/Encabezado";
import Footer from "../components/commons/Footer";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { formErrors } from "../utils/constantsErrors";
import { Link } from "react-router-dom";

export default function Login() {
	const [errors, setErrors] = useState(false);
	const history = useHistory();

	const submitForm = (values, setSubmitting) => {
		if (!errors) {
			history.push("/perfil");
		}
	};
	const validateForm = values => {

		if (!values.clienteUsuario) {
			setErrors({ clienteUsuario: formErrors.USER_EMPTY });
		} else if (!values.clientePass) {
			setErrors({
				clientePass: formErrors.PASSWORD_EMPTY,
			});
		} else {
			setErrors(false);
		}
	};

	return (
    <>
      <Encabezado />
      <Formik
        initialValues={{ clienteUsuario: "", clientePass: "" }}
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
              <form className="js-check-form pt-3" id="dni-form" noValidate>
                <h3>Ingresar</h3>
                <div className="row">
                  <div className="form-group col-12">
                    <Input
                      label="Ingresá tu usuario (email o nro. de DNI)"
                      type="text"
                      className="form-control"
                      name="clienteUsuario"
                      errors={errors}
                      values={values}
                    />
                  </div>

                  <div className="form-group col-12">
                    <Input
                      label="Ingresá tu contraseña"
                      name="clientePass"
                      className="form-control border-right-0"
                      type="password"
                      showPasswordButton
                      errors={errors}
                      values={values}
                    />
                  </div>
                  <div className="col-12">
                    <p className="text-center mt-4">
                      <Link to="/forgotPassword">Olvidé mi contraseña</Link>
                    </p>
                  </div>
                </div>
              </form>
            </section>
            <Footer>
              <form className="form-signin">
                <Button
                  className="btn btn-primary cont"
                  disabled={false}
                  type="submit"
                  onClick={handleSubmit}
                >
                  CONTINUAR
                </Button>
              </form>
            </Footer>
          </>
        )}
      </Formik>
    </>
  );
}
