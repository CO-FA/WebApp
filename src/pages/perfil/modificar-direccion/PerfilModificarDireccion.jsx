import React from "react";
import { Formik } from "formik";
import Input from "../../../components/commons/Input";
import Footer from "../../../components/commons/Footer";
import Button from "../../../components/commons/Button";
import EncabezadoVerde from "../../../components/commons/EncabezadoVerde";
import { useModificarDireccion } from "./useModificarDireccion";

export default function ModificarDireccion() {
  const {submitForm,validateForm, errors} = useModificarDireccion()
  
  return (
    <>
      <EncabezadoVerde />
      <Formik
        initialValues={{ clienteDireccion: " " }}
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
                      placeholder="Av. Santa Fe"
                      type="text"
                      className="form-control"
                      name="clienteDireccionCalle"
                      errors={errors}
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
                      name="clienteDireccionNum"
                      errors={errors}
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
                      name="clienteDireccionPiso"
                      errors={errors}
                      values={values}
                    />
                  </div>
                  <div className="form-group col-6">
                    <Input
                      label="Departamento"
                      placeholder=""
                      type="number"
                      className="form-control"
                      name="clienteDireccionDpto"
                      errors={errors}
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
                      name="clienteDireccionCP"
                      errors={errors}
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
                    GUARDAR {/* TO DO: guardar info en supabase */}
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
