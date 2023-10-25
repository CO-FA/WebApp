import React, { useState } from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { formErrors } from "../../utils/constantsErrors";
import Input from "../../components/commons/Input";
import Footer from "../../components/commons/Footer";
import Button from "../../components/commons/Button";
import { LoaderContext } from "../../components/loader/LoaderContext";
import EncabezadoVerde from "../../components/commons/EncabezadoVerde";

export default function InformePago() {
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
    if (values.clienteEmail === "") {
      setErrors({ clienteEmail: "No puede estar vacio" });
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
                <div className="row">
                  <div className="form-group col-12">
                    <Input
                      label=""
                      placeholder="Fecha de pago DD/MM/AAAA"
                      type="date"
                      className="form-control"
                      name="clienteEmail"
                      errors={[]}
                      values={values}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-12">
                    <Input
                      label=""
                      placeholder="$ Importe de pago realizado"
                      type="number"
                      className="form-control"
                      name="clienteEmail"
                      errors={[]}
                      values={values}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-12">
                    <Input
                      label=""
                      placeholder="Numero de comprobante"
                      type="number"
                      className="form-control"
                      name="clienteEmail"
                      errors={[]}
                      values={values}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label for="exampleFormControlSelect1"></label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>Medio de Pago</option>
                    <option>Mercado de Pago</option>
                    <option>RapiPago</option>
                    <option>CobroExpress</option>
                    <option>Transferencia Bancaria</option>
                    <option>Pago mis cuentas</option>
                    <option>Link</option>
                    <option>Provincia Net</option>
                    <option>Pago en Sucursal</option>
                  </select>
                </div>
              </section>
              <div className="row">
                  <div className="form-group col-12">
                    <Input
                      label=""
                      placeholder="Adjuntar comprobante de pago"
                      type="number"
                      className="form-control"
                      name="clienteComprobante"
                      errors={[]}
                      values={values}
                    />
                  </div>
                </div>

              <Footer>
                <div className="col-12">
                  {/* TO DO: enviar a cobranzas@cofa.com.ar y volver al perfil*/}
                  <Button
                    className="btn btn-primary cont"
                    disabled={false}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    ENVIAR
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
