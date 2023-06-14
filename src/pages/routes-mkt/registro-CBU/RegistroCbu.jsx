import React, { useState } from "react";
import Input from "components/commons/Input";
import Footer from "components/commons/Footer";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import Button from "components/commons/Button";
import { formErrors } from "utils/constantsErrors";
import { LoaderContext } from "components/loader/LoaderContext";
import Encabezado from "components/commons/Encabezado";
import { useModal } from "components/modal/ModalContext";
import { useEffect } from "react";
import Cbu from "pages/estadofinanciero/Cbu";
import { STEPS } from "components/registro/STEPS-MKT";
import { useCbuAtom, useIdentidadAtom, useStepAtom } from "../atoms/Atoms";
import { useFindBanco } from "./hooks/useFindBanco";
import { suscripcionMobbex } from "api/SuscripcionMobbex";

export default function RegistroCbu({}) {
  let { setShowLoader } = React.useContext(LoaderContext);
  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const { showModal, show, setElement } = useModal();
  const { setCurrentStep } = useStepAtom();
  const [cbu, setCbu] = useState();
  const { banco } = useFindBanco({ cbu });
  const {clienteCbu, setClienteCbu} = useCbuAtom();
  const { identidad } = useIdentidadAtom();

  useEffect(() => {
    setElement(<Cbu />);
    return () => setElement(null);
  }, []);

  const submitForm = async (values, setSubmitting) => {
    if (errors) {
      return;
    }
    if (!errors) {
      setShowLoader(true);
      setClienteCbu(values.nroCbu)
      try {
        const datos = await suscripcionMobbex({
          nroDocumento: identidad.dni,
          //returnURL: "http://localhost:8888/#/onboarding/email",
          returnURL: "http://localhost:8888/#/onboarding/finalizar-mobbex",
        })
        history.push("/onboarding/mobbex");
        setCurrentStep(STEPS.STEP_7_MOBBEX);
      } catch (error) {
        history.push("/onboarding/error");
        setCurrentStep(STEPS.STEP_99_ERROR);
        console.error(error);
      }
      setShowLoader(false);
    }
  };

  const validateForm = (values) => {
    setCbu(values.nroCbu);
  };

  return (
    <>
      <Encabezado />
      <Formik
        initialValues={{nroCbu: clienteCbu}}
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
        validate={(values) => validateForm(values)}
      >
        {({ values, handleSubmit }) => (
          <>
            <section style={{ height: "80%" }}>
              <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
                Cargá tu CBU/CVU <br></br> y te deposito el dinero
              </h2>
              <form>
                <h4>
                  Ingresá el CBU de tu cuenta
                  <Button
                    onClick={() => {
                      showModal(true);
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM7.08229 9.9655H8.75807C8.76589 9.66862 8.8069 9.4235 8.88112 9.23014C8.95534 9.03678 9.08815 8.84831 9.27956 8.66471L9.95339 8.03776C10.2385 7.76042 10.4456 7.48893 10.5745 7.22331C10.7034 6.95768 10.7678 6.66276 10.7678 6.33854C10.7678 5.59635 10.5286 5.02409 10.0501 4.62174C9.57155 4.2194 8.89675 4.01823 8.02565 4.01823C7.15065 4.01823 6.47097 4.236 5.98659 4.67155C5.50221 5.1071 5.25612 5.71549 5.24831 6.49674H7.22878C7.23659 6.20377 7.31276 5.97135 7.45729 5.79948C7.60182 5.6276 7.79128 5.54167 8.02565 5.54167C8.53347 5.54167 8.78737 5.83659 8.78737 6.42643C8.78737 6.66862 8.71218 6.8903 8.56178 7.09147C8.41139 7.29264 8.19167 7.51432 7.9026 7.75651C7.61354 7.9987 7.40456 8.28483 7.27565 8.61491C7.14674 8.94499 7.08229 9.39518 7.08229 9.9655ZM6.84206 11.7467C6.84206 12.0358 6.94655 12.2731 7.15553 12.4587C7.36452 12.6442 7.62526 12.737 7.93776 12.737C8.25026 12.737 8.511 12.6442 8.71999 12.4587C8.92897 12.2731 9.03346 12.0358 9.03346 11.7467C9.03346 11.4577 8.92897 11.2204 8.71999 11.0348C8.511 10.8493 8.25026 10.7565 7.93776 10.7565C7.62526 10.7565 7.36452 10.8493 7.15553 11.0348C6.94655 11.2204 6.84206 11.4577 6.84206 11.7467Z"
                        fill="#53BA38"
                      />
                    </svg>
                  </Button>
                </h4>

                <div className="row profile-container">
                  <div className="form-group col-12">
                    <Input
                      label="CBU (22 números)"
                      type="text"
                      placeholder="007XXXXXXXXXXXXXXXXXXX"
                      className="form-control"
                      name="nroCbu"
                      errors={[]}
                      values={values}
                      /* falta icono editar */
                    />
                    {<p>{banco?.ds_banco}</p>}
                  </div>
                </div>
                <div className="form-group col-12">
                  <Button
                    className="btn btn-warning cont mb-3"
                    // no toma estos estilos, clase btn
                   /* style={
                        {
                          height: "43px",
                          borderRadius: "50px",
                          border: "none",
                          fontWeight: "700",
                          fontSize: "14px",
                          width: "100%",
                        }
                      } */

                    disabled={false}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    ¿Es correcto el número?
                  </Button>

                  <span className="span-cbu">
                    Por favor no olvides tener tu cbu actualizado
                  </span>
                </div>
              </form>
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
