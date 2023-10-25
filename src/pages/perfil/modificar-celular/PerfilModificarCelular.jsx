import React from "react";
import Input from "../../../components/commons/Input";
import Footer from "../../../components/commons/Footer";
import { Formik, Form } from "formik";
import Button from "../../../components/commons/Button";
import Encabezadoverde from "../../../components/commons/EncabezadoVerde";
import { useCelularAtom } from "pages/atoms/Atoms";
import { usePerfilModificarCelular } from "./usePerfilModificarCelular";

export default function ModificarCelular() {
  const { codArea, numCelular } = useCelularAtom();
  const {submitForm,validateForm, errors} = usePerfilModificarCelular()
 
  return (
    <>
      <Encabezadoverde />
      <Formik
        initialValues={{
          codigoAntiguo: codArea,
          celAntiguo: numCelular,
          clienteCelCodigo: "",
          clienteCelNumero: "",
          clientePin: "",
        }}
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
        validate={(values) => validateForm(values)}
      >
        {({ values, handleSubmit }) => (
          <>
            <Form>
              <section>
                <h3 className="mt-5">Mi celular registrado es</h3>
                <div className="row">
                  <div className="form-group col-3">
                    <Input
                      label="Cód"
                      type="number"
                      placeholder={codArea}
                      className="form-control"
                      name="codigoAntiguo"
                      errors={errors}
                      values={values}
                    />
                  </div>
                  <div className="form-group col">
                    <Input
                      label="Celular"
                      placeholder={numCelular}
                      type="number"
                      className="form-control"
                      name="celAntiguo"
                      errors={errors}
                      values={values}
                    />
                  </div>
                </div>
                <h3 className="mt-3">Mi nuevo celular es</h3>
                <div className="row">
                  <div className="form-group col-3">
                    <Input
                      label="Cód"
                      type="number"
                      placeholder=""
                      className="form-control"
                      name="clienteCelCodigo"
                      errors={errors}
                      values={values}
                    />
                  </div>
                  <div className="form-group col">
                    <Input
                      label="Celular"
                      placeholder=""
                      type="number"
                      className="form-control"
                      name="clienteCelNumero"
                      errors={errors}
                      values={values}
                    />
                  </div>
                </div>
              </section>
              <Footer>
                <div className="col-12" style= {{marginTop: "40%"}}>
                  <Button
                    className="btn btn-primary cont"
                    disabled={false}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    VALIDAR CELULAR
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
