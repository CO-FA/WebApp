import React, { useState } from "react";
import Encabezado from "components/commons/Encabezado";
import { Formik } from "formik";
import Input from "components/commons/Input";
import Footer from "components/commons/Footer";
import Button from "components/commons/Button";
import RegistroSetps from "../../../components/registro/RegistroSteps";
import { STEPS } from "../../../components/registro/STEPS-MKT";
import { useRegistroEmail } from "./hooks/useRegistroEmail";


export default function RegistroEmail() {
  const [errors] = useState(false);
  const {submitForm,validateForm} = useRegistroEmail()
  
  return (
    <>
      <Encabezado title={<RegistroSetps current={STEPS.STEP_8_VALIDAR_EMAIL} />} />
      <Formik
        initialValues={{ clienteEmail: "", }}
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
            <form>
              <section>
                <h3>Validamos tu Email</h3>
                <div className="row profile-container">
                  <div className="form-group col-12">
                    {/* TO DO: guardar email en SupaBase */}
                    <Input
                      label="Ingresá tu Email"
                      placeholder="juan@gmail.com"
                      type="email"
                      className="form-control"
                      name="clienteEmail"
                      errors={[]}
                      values={values}
                    />
                  </div>
                  <div className="form-group col-12">
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
                        Te vamos a enviar un mail con un código de 
                        activación de 4 dígitos
                      </a>
                    </p>
                  </div>
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
                    CONTINUAR
                  </Button>
                </div>
              </Footer>
            </form>
          </>
        )}
      </Formik>
    </>


  )
}