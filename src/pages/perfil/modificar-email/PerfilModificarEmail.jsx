import React from "react";
import { Formik, Form } from "formik";
import Input from "../../../components/commons/Input";
import Footer from "../../../components/commons/Footer";
import Button from "../../../components/commons/Button";
import EncabezadoVerde from "../../../components/commons/EncabezadoVerde";
import { useEmailAtom } from "pages/atoms/Atoms";
import { useModificarEmail } from "./useModificarEmail";

export default function ModificarEmail() {
  const {email} = useEmailAtom()
  const {submitForm,validateForm, errors} = useModificarEmail()
 
  return (
    <>
      <EncabezadoVerde />
      <Formik
        initialValues=
        {{ 
          clienteEmail: email,
          clienteEmailNuevo: "" 
        }}
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
            <Form>
              <section>
                <h3 className="mt-5">Mi mail registrado es</h3>
                <div className="row">
                  <div className="form-group col">
                    <Input
                      label="Ingresá tu Email"
                      placeholder=""
                      type="email"
                      className="form-control"
                      name="clienteEmail"
                      errors={errors}
                      values={values}
                    />
                  </div>
                </div>
                <h3 className="mt-3">Mi mail nuevo es</h3>
                <div className="row">
                  <div className="form-group col-12">
                    <Input
                      label="Ingresá tu Email"
                      placeholder="xxxx@gmail.com"
                      type="email"
                      className="form-control"
                      name="clienteEmailNuevo"
                      errors={errors}
                      values={values}
                    />
                  </div>
                </div>
                <div className="col-12">
                  {errors["clienteEmail"] && (
                    <span
                      id="clienteEmail-errorMsg"
                      className="form-text text-danger small"
                    >
                      *{errors["clienteEmail"]}
                    </span>
                  )}
                </div>

                <div className="col-12">
                  <p className="mt-5 text-center">
                    <a href="/" className="text-underline">
                      Te vamos a enviar un mail con un codigo de activación de 4
                      digitos
                    </a>
                  </p>
                </div>
              </section>

              <Footer>
                <div className="col-12">
                  <Button
                    className="btn btn-primary cont"
                    disabled={false}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    VALIDAR EMAIL
                  </Button>
                </div>
              </Footer>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
