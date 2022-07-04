import React, { useState } from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { formErrors } from "../utils/constantsErrors";
import Input from "components/commons/Input";
import Footer from "components/commons/Footer";
import Button from "components/commons/Button";
import { LoaderContext } from "../components/loader/LoaderContext";
import EncabezadoVerde from "components/commons/EncabezadoVerde";

export default function RegistroStep6() {
  let { setShowLoader } = React.useContext(LoaderContext);
  const [errors, setErrors] = useState(false);
  const history = useHistory();

  const submitForm = (values, setSubmitting) => {
    setShowLoader(true);
    setTimeout(() => {
      if (!errors) {
        setShowLoader(false);
        history.push("/emailCode");
      }
    }, 2000);
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
  };
  return (
    <>
      <EncabezadoVerde />
      <Formik
        initialValues={{ clienteEmail: "" }}
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
                <h3 className="mt-5">Cambiar mi direccion</h3>
                <div className="row">
                  <div className="form-group col-9">
                    <Input
                      label="Calle"
                      placeholder="Av. Santa Fe 1200,CABA"
                      type="text"
                      className="form-control"
                      name="clienteEmail"
                      errors={[]}
                      values={values}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-6">
                    <Input
                      label="Numero"
                      placeholder=""
                      type="number"
                      className="form-control"
                      name="clienteEmail"
                      errors={[]}
                      values={values}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-6">
                    <Input
                      label="Piso"
                      placeholder=""
                      type="number"
                      className="form-control"
                      name="clienteEmail"
                      errors={[]}
                      values={values}
                    />
                  </div>
                  <div className="form-group col-6">
                    <Input
                      label="Departamento"
                      placeholder=""
                      type="number"
                      className="form-control"
                      name="clienteEmail"
                      errors={[]}
                      values={values}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-6">
                    <Input
                      label="Codigo Postal"
                      placeholder=""
                      type="number"
                      className="form-control"
                      name="clienteEmail"
                      errors={[]}
                      values={values}
                    />
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
  );
}
