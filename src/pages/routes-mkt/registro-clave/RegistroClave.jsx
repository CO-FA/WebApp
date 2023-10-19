import React, { useState } from "react";
import Input from "components/commons/Input";
import Encabezado from "components/commons/Encabezado";
import Footer from "components/commons/Footer";
import { Formik } from "formik";
import Button from "components/commons/Button";
import RegistroSetps from "components/registro/RegistroSteps";
import { STEPS } from "components/registro/STEPS-MKT";
import { useRegistroClave } from "./hooks/useRegistroClave";

export const RegistroClave = () => {
  const {submitForm,validateForm, errors} = useRegistroClave()
  //TO DO: no valida errores en la clave
  return (
    <>
      <Encabezado title={<RegistroSetps current={STEPS.STEP_5_CLAVE} />} />
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
        }) => (
          <>
            <section>
              <form>
                <h3>¡Último paso!</h3>
                <div className="row profile-container">
                  <div className="form-group col-12">
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
                  <div className="form-group col-12">
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
                        número.
                      </li>
                      <li>Ejemplo: Mica2010</li>
                    </ul>
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
};
