import React from "react";
import Header from "components/commons/Encabezado";
import Footer from "components/commons/Footer";
import { Formik } from "formik";
import Button from "components/commons/Button";
import RegistroSetps from "components/registro/RegistroSteps";
import { STEPS } from "components/registro/STEPS-MKT";
import OptionNombre from "components/registro/OptionNombre";
import { useIdentidadAtom } from "../atoms/Atoms";
import { useRegistroIdentidad } from "./hooks/useRegistroIdentidad";

export default function RegistroElegirIdentidad() {
  const { identidad } = useIdentidadAtom();
  const { submitForm, candidatos } = useRegistroIdentidad();

  return (
    <>
      <Header title={<RegistroSetps current={STEPS.STEP_1_DNI} />} />
      <Formik
        initialValues={{ clienteNombres: identidad?.dni }}
        onSubmit={(values, { setSubmitting }) =>
           submitForm(values, setSubmitting)
        }
      >
        {({ values, handleSubmit }) => (
          <>
            <form className="pt-3">
              <section>
                <div className="btn-group-toggle" data-toggle="buttons">
                  <h3>Soy</h3>
                  <span
                    id="clienteNombres-errorMsg"
                    className="form-text text-danger small"
                  ></span>
                  {(candidatos || []).map((c, ix) => {
                    return (
                      <OptionNombre
                        value={c.dni}
                        label={c.nombreCompleto}
                        key={ix}
                        className={
                          values.clienteNombres === c.dni && "active"
                        }
                      />
                    );
                  })}
                  <OptionNombre
                    value="ninguno"
                    label="No soy ninguna de esas personas"
                    className={values.clienteNombres === "ninguno" && "active"}
                  />
                </div>
              </section>

              <Footer>
                <div className="col-12">
                  <Button
                    className="btn btn-primary cont"
                    disabled={!values.clienteNombres}
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
