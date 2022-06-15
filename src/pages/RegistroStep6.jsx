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
  }
  return (
    <>
      <Encabezado title={<RegistroSetps current={STEPS.STEP_3_EMAIL} />} />
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
                      type="email"
                      className="form-control"
                      name="clienteEmail"
                      errors={[]}
                      values={values}
                    />
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