import React from "react";
import Input from "components/commons/Input";
import Encabezado from "components/commons/Encabezado";
import Footer from "components/commons/Footer";
import { Formik, Form } from "formik";
import Button from "components/commons/Button";
import RegistroSetps from "components/registro/RegistroSteps";
import { STEPS } from "components/registro/STEPS-MKT";
import {
  useIdentidadAtom,
  useSituacionLaboralAtom,
  useGeneroAtom,
} from "../atoms/Atoms";
import { SelectGenero } from "./components/SelectGenero";
import { SelectSituacionLaboral } from "./components/SelectSituacionLaboral";
import { useRegistroDni } from "./hooks/useRegistroDni";


export function RegistroDni() {
  const { documento } = useIdentidadAtom();
  const { situacionLaboral } = useSituacionLaboralAtom();
  const { genero } = useGeneroAtom();
  const {submitForm,validateForm,opciones,errors} = useRegistroDni()

  return (
    <>
      <Encabezado title={<RegistroSetps current={STEPS.STEP_1_DNI} />} />
      <Formik
        initialValues={{
          clienteDocNumero: documento,
          clienteSituacionLaboral: situacionLaboral,
          clienteGenero: genero,
        }}
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
        validate={(values) => validateForm(values)}
      >
        {({ values, handleSubmit }) => (
          <>
            <section>
              <Form>
                <div className="pt-3">
                  <div className="row">
                    <div className="form-group col-12">
                      <Input
                        label="Nro DNI"
                        type="number"
                        placeholder={"Ingrese Nro DNI"}
                        className="form-control"
                        name="clienteDocNumero"
                        errors={errors}
                        values={values}
                      />
                    </div>
                    <div className="form-group col-12">
                      <SelectSituacionLaboral
                        opciones={opciones}
                        errors={errors}
                      />
                    </div>
                    <div className="form-group col-12">
                      <SelectGenero errors={errors} />
                    </div>
                  </div>
                </div>
              </Form>
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
          </>
        )}
      </Formik>
    </>
  );
}
