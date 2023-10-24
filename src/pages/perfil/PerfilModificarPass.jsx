import React, { useState } from "react";
import Input from "../../components/commons/Input";
import Footer from "../../components/commons/Footer";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import Button from "../../components/commons/Button";
import { formErrors } from "../../utils/constantsErrors";
import EncabezadoVerde from "../../components/commons/EncabezadoVerde";

export default function OlvidePasswordStep2() {
  const [errors, setErrors] = useState(false);
  const history = useHistory();

  const submitForm = (values, setSubmitting) => {
    if (!errors) {
      history.push("/login");
    }
  };
  const validateForm = (values) => {
    debugger;
    // Min 8, 1 letra mayus, 1 letra min, 1 num
    let pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g;

    if (values.clientePass !== values.clientePassConfirm) {
      setErrors({ clientePassConfirm: formErrors.PASSWORD_DOESNT_MATCH });
    } else if (!values.clientePass) {
      setErrors({
        clientePass: formErrors.PASSWORD_EMPTY,
        clientePassConfirm: formErrors.PASSWORD_DOESNT_MATCH,
      });
    } else if (!values.clientePass.match(pattern)) {
      setErrors({
        clientePass: formErrors.PATTERN_ERROR,
      });
      /*} else if (values.clientePass.length !== 8) {
			setErrors({
				clientePass: formErrors.PASSWORD_LENGTH,
			});
		} */
    } else {
      setErrors(false);
    }
  };

  return (
    <>
      <EncabezadoVerde />
      <Formik
        initialValues={{ clientePass: "", clientePassConfirm: "" }}
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
              <form>
                <h3>Cambiar mi contraseña</h3>
                <div class="row">
                  <div class="form-group col-12">
                    <Input
                      label="Ingresá tu contraseña actual"
                      name="clientePass"
                      className="form-control border-right-0"
                      type="password"
                      errors={errors}
                      showPasswordButton
                      values={values}
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="form-group col-12">
                    <Input
                      label="Ingresá tu contraseña nueva"
                      name="clientePassNew"
                      className="form-control border-right-0"
                      type="password"
                      required
                      errors={errors}
                      showPasswordButton
                      values={values}
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="form-group col-12">
                    <Input
                      label="Repetí tu contraseña nueva"
                      name="clientePassConfirm"
                      className="form-control border-right-0"
                      type="password"
                      required
                      errors={errors}
                      showPasswordButton
                      values={values}
                    />
                  </div>
                </div>

                <div className="row">
                  <ul>
                    <li className="mt-3">
                      Tu contraseña debe tener minimo 8 caracteres que contengan
                      al menos una minuscula, una mayuscula y un número.{" "}
                    </li>
                    <li className="mt-3 pt-3">Ejemplo: Mica2010</li>
                  </ul>
                </div>
              </form>
              {/* TO DO: agregar link olvide mi contraseña */}
            </section>
            <Footer>
              <div className="col-12">
                <Button
                  className="btn btn-primary cont"
                  disabled={false}
                  type="submit"
                  onClick={handleSubmit}
                >
                  GUARDAR
                </Button>
              </div>
            </Footer>
          </>
        )}
      </Formik>
    </>
  );
}
