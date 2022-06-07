import React, { useState } from "react";
import Encabezado from "components/commons/Encabezado";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { formErrors } from "../utils/constantsErrors";
import Input from "components/commons/Input";
import Footer from "components/commons/Footer";
import Button from "components/commons/Button";

import RegistroSetps from "../components/registro/RegistroSteps";
import { STEPS } from "../components/registro/constantsSteps";
import { LoaderContext } from "../components/loader/LoaderContext";

export default function RegistroStep6() {
  let { setShowLoader } = React.useContext(LoaderContext);
  const [errors, setErrors] = useState(false);
  const history = useHistory();

  const submitForm = (values, setSubmitting) => {
    setShowLoader(true);
    setTimeout(() => {
      if (!errors) {
        setShowLoader(false)
        history.push("/emailCode");
      }
    },2000);
  };
  const validateForm = (values) => {
    var errorsAUx = {};
    if (!values.clienteemailCode) {
      errorsAUx = {
        ...errorsAUx,
        clienteemailCode: formErrors.CODE_EMPTY,
      };
    } else if (String(values.clienteemailCode).length) {
      errorsAUx = {
        ...errorsAUx,
        clienteemailCode: formErrors.PATTERN_EMAIL_ERROR,
      };
    }
    setErrors(errorsAUx);
  }
  return (
    <>
      <Encabezado title={<RegistroSetps current={STEPS.STEP_3_EMAIL} />} />
      <Formik
        initialValues={{ clienteemailCode: "", }}
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
            <form>
              <section>
                <h3>Vamos a validar el Email</h3>
                <div className="row">

                  <div className="form-group col-9">
                    <Input
                      label="Ingresá tu Email"
                      placeholder="xxxx@gmail.com"
                      type="letras+symbol"
                      className="form-control"
                      name="clienteemailCode"
                      errors={[]}
                      values={values}
                    />
                  </div>
                  <div className="col-12">
                    {errors["clienteemailCode"] && (
                      <span
                        id="clienteemailCode-errorMsg"
                        className="form-text text-danger small"
                      >
                        *{errors["clienteemailCode"]}
                      </span>
                    )}
                  
                  </div>
                  <div className="col-12">
                    <p className="mt-5 text-center">
                      <a href="/" className="text-underline">
                        Te vamos a enviar un mail con un codigo de 
                        activación de 4 digitos
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
                    Continuar
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