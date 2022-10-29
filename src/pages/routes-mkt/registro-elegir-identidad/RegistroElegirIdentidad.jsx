import React, { useState, useEffect } from "react";
import Header from "components/commons/Encabezado";
import Footer from "components/commons/Footer";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import Button from "components/commons/Button";
import RegistroSetps from "components/registro/RegistroSteps";
import { STEPS } from "components/registro/STEPS-MKT";
import OptionNombre from "components/registro/OptionNombre";

const API = {
  getCandidatos: async () => {
    return [
      { documento: "123123", apeYNom: "Ronaldo de Assis Moreira" },
      { documento: "22221412", apeYNom: "Adalberto Carlos Fragoso De Arruda" },
    ];
  },
};

export default function RegistroElegirIdentidad() {
  const history = useHistory();
  const [candidatos, setCandidatos] = useState();

  const submitForm = (values, setSubmitting) => {
    //TODO: Enviar sms de validación
    history.push("/onboarding/celular");
  };

  useEffect(() => {
    (async () => {
      setCandidatos(await API.getCandidatos());
    })();
  }, []);

  return (
    <>
      <Header title={<RegistroSetps current={STEPS.STEP_1_DNI} />} />
      <Formik
        initialValues={{ clienteNombres: null }}
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
      >
        {({
          values,
          handleSubmit,
          /* and other goodies */
        }) => (
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
                        value={c.documento}
                        label={c.apeYNom}
                        key={ix}
                        className={
                          values.clienteNombres === c.documento && "active"
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
