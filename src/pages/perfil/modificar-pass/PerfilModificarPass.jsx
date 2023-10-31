import React from "react";
import Input from "../../../components/commons/Input";
import Footer from "../../../components/commons/Footer";
import { Formik } from "formik";
import Button from "../../../components/commons/Button";
import EncabezadoVerde from "../../../components/commons/EncabezadoVerde";
import { useModificarPass } from "./useModificarPass";

export default function ModificarContrasena() {
  const {submitForm,validateForm, errors} = useModificarPass()
 
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
                <div className="row">
                  <div className="form-group col-12">
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

                <div className="row">
                  <div className="form-group col-12">
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
                  <div className="form-group col-12">
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
              </form>
            </section>
            <Footer>
              <div classNameName="col-12">
                <Button
                  classNameName="btn btn-primary cont"
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
