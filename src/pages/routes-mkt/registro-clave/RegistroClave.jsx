/* import React from "react"; */

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
import { Link } from "react-router-dom";
import { useStepAtom } from "../atoms/Atoms";

export const RegistroClave = (props) => {
  /* return <div>Acá va la pantalla de registro clave</div>; */
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const [errors, setErrors] = useState(false);

  const submitForm = (values, setSubmitting) => {
    if (!errors) {
      //TODO: ejecutar WS de guardar clave
      setCurrentStep(STEPS.STEP_6_VALIDAR_CBU);
      history.push("/onboarding/cbu");
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
      <Encabezado title={<RegistroSetps current={STEPS.STEP_4_CLAVE} />} />
      <Formik
        initialValues={{ clientePass: "", clientePassConfirm: "" }}
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
                <h3>¡Último paso!</h3>

                <div className="row profile-container">
                  <div class="form-group col-12">
                    <Input
                      label="Ingresá tu contraseña alfanumérica"
                      name="clientePass"
                      className="form-control border-right-0"
                      type="password"
                      maxlength="8"
                      errors={errors}
                      showPasswordButton
                      values={values}
                    />
                  </div>
                  <div class="form-group col-12">
                    <Input
                      label="Repetí tu contraseña alfanumérica"
                      name="clientePassConfirm"
                      className="form-control border-right-0"
                      type="password"
                      required=""
                      maxlength="8"
                      errors={errors}
                      showPasswordButton
                      values={values}
                    />
                  </div>
                  <div className="col-12">
                    <ul>
                      <li>
                        Tu contraseña debe tener mínimo 8 caracteres que
                        contengan al menos una minúscula, una mayúscula y un
                        número.{" "}
                      </li>
                      <li>Ejemplo: Mica2010</li>
                    </ul>
                  </div>
                </div>
              </form>
            </section>
            <Footer>
              <div class="col-12">
                <Button
                  className="btn btn-primary cont"
                  disabled={false}
                  type="button"
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
};
