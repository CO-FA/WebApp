import React, { useState } from "react";
import Input from "../../components/commons/Input";
import Footer from "../../components/commons/Footer";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import Button from "../../components/commons/Button";
import { formErrors } from "../../utils/constantsErrors";
import { LoaderContext } from "../../components/loader/LoaderContext";
import Encabezadoverde from "../../components/commons/EncabezadoVerde";

export default function ModificarCelular({ celCodigo, cellNumero }) {
  let { setShowLoader } = React.useContext(LoaderContext);
  const [errors, setErrors] = useState(false);
  const history = useHistory();

  const submitForm = (values, setSubmitting) => {
    if (errors) {
      return;
    }
    setShowLoader(true);
    setTimeout(() => {
      if (!errors) {
        setShowLoader(false);
        history.push("/validateEmail");
      }
    }, 2000);
  };
  const validateForm = (values) => {
    var errorsAUx = {};
    if (!values.clienteCelCodigo) {
      errorsAUx = {
        ...errorsAUx,
        clienteCelCodigo: formErrors.CODE_EMPTY,
      };
    } else if (String(values.clienteCelCodigo).length < 2) {
      errorsAUx = {
        ...errorsAUx,
        clienteCelCodigo: formErrors.CODE_PHONE_ERROR,
      };
    } else {
      errorsAUx = false;
    }
    if (!values.clienteCelNumero) {
      errorsAUx = {
        ...errorsAUx,
        clienteCelNumero: formErrors.PHONE_EMPTY,
      };
    } else if (String(values.clienteCelNumero).length < 6) {
      errorsAUx = {
        ...errorsAUx,
        clienteCelNumero: formErrors.PHONE_ERROR,
      };
    } else {
      errorsAUx = errorsAUx || false;
    }
    setErrors(errorsAUx);
  };
  return (
    <>
      <Encabezadoverde />
      <Formik
        initialValues={{
          clienteCelCodigo: celCodigo,
          clienteCelNumero: cellNumero,
          clientePin: "",
        }}
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
        validate={(values) => validateForm(values)}
      >
        {({ values, handleSubmit }) => (
          <>
            <form>
              <section>
                <h3 className="mt-5">Mi celular registrado es:</h3>
                <div className="row">
                  <div className="form-group col-3">
                    <Input
                      label="Cód"
                      type="number"
                      placeholder="011"
                      className="form-control"
                      name="clienteCelCodigo"
                      errors={[]}
                      values={values}
                    />
                  </div>
                  <div className="form-group col">
                    <Input
                      label="Celular"
                      placeholder="38913312"
                      type="number"
                      className="form-control"
                      name="clienteCelNumero"
                      errors={[]}
                      values={values}
                    />
                  </div>

                  <div />
                </div>
                <h3 className="mt-3">Mi nuevo celular es:</h3>
                <div className="row">
                  <div className="form-group col-3">
                    <Input
                      label="Cód"
                      type="number"
                      placeholder="011"
                      className="form-control"
                      name="clienteCelCodigo"
                      errors={[]}
                      values={values}
                    />
                  </div>
                  <div className="form-group col">
                    <Input
                      label="Celular"
                      placeholder="38913312"
                      type="number"
                      className="form-control"
                      name="clienteCelNumero"
                      errors={[]}
                      values={values}
                    />
                  </div>
                  <div className="col-12">
                    {errors["clienteCelCodigo"] && (
                      <span
                        id="clienteCelCodigo-errorMsg"
                        className="form-text text-danger small"
                      >
                        *{errors["clienteCelCodigo"]}
                      </span>
                    )}
                    {errors["clienteCelNumero"] && (
                      <span
                        id="clienteCelCodigo-errorMsg"
                        className="form-text text-danger small"
                      >
                        *{errors["clienteCelNumero"]}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="mt-3">Ingresá el PIN SMS</h3>
                <div className="row">
                  <div className="form-group col-12">
                    <Input
                      label="PIN"
                      placeholder="PIN"
                      type="number"
                      className="form-control"
                      name="clientePin"
                      errors={errors}
                      values={values}
                    />
                  </div>
                  <div className="col-12">
                    <p className="mt-5 text-center">
                      <a href="/" className="text-underline">
                        ¿No te llegó? Reenviarme el SMS
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
  );
}
