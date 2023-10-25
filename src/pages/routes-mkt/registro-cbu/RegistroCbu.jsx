import React from "react";
import Input from "components/commons/Input";
import Footer from "components/commons/Footer";
import { Formik } from "formik";
import Button from "components/commons/Button";
import Encabezado from "components/commons/Encabezado";
import { useModal } from "components/modal/ModalContext";
import { useCbuAtom } from "../../atoms/Atoms";
import { useFindBanco } from "./hooks/useFindBanco";
import { useRegistroCbu } from "./hooks/useRegistroCbu";
import "../../../assets/css/main.css"

export default function RegistroCbu() {
  const { showModal } = useModal();
  const {clienteCbu} = useCbuAtom();
  const {submitForm, validateForm, validateCBU, cbu, isContinuarButtonEnabled, errors} = useRegistroCbu()
  const { banco } = useFindBanco({ cbu });

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
                  Ingresá el CBU/CVU de tu cuenta
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM7.08229 9.9655H8.75807C8.76589 9.66862 8.8069 9.4235 8.88112 9.23014C8.95534 9.03678 9.08815 8.84831 9.27956 8.66471L9.95339 8.03776C10.2385 7.76042 10.4456 7.48893 10.5745 7.22331C10.7034 6.95768 10.7678 6.66276 10.7678 6.33854C10.7678 5.59635 10.5286 5.02409 10.0501 4.62174C9.57155 4.2194 8.89675 4.01823 8.02565 4.01823C7.15065 4.01823 6.47097 4.236 5.98659 4.67155C5.50221 5.1071 5.25612 5.71549 5.24831 6.49674H7.22878C7.23659 6.20377 7.31276 5.97135 7.45729 5.79948C7.60182 5.6276 7.79128 5.54167 8.02565 5.54167C8.53347 5.54167 8.78737 5.83659 8.78737 6.42643C8.78737 6.66862 8.71218 6.8903 8.56178 7.09147C8.41139 7.29264 8.19167 7.51432 7.9026 7.75651C7.61354 7.9987 7.40456 8.28483 7.27565 8.61491C7.14674 8.94499 7.08229 9.39518 7.08229 9.9655ZM6.84206 11.7467C6.84206 12.0358 6.94655 12.2731 7.15553 12.4587C7.36452 12.6442 7.62526 12.737 7.93776 12.737C8.25026 12.737 8.511 12.6442 8.71999 12.4587C8.92897 12.2731 9.03346 12.0358 9.03346 11.7467C9.03346 11.4577 8.92897 11.2204 8.71999 11.0348C8.511 10.8493 8.25026 10.7565 7.93776 10.7565C7.62526 10.7565 7.36452 10.8493 7.15553 11.0348C6.94655 11.2204 6.84206 11.4577 6.84206 11.7467Z"
                        fill="#53BA38"
                      />
                    </svg>
                  </Button>
                </h4>

                <div className="row profile-container">
                  <div className="form-group col-12">
                    <label htmlFor="nroCbu">CBU/CVU</label>
                    <div className="input-with-icon">
                      {/* TO DO: mensaje de error abajo el input */}
                      <Input
                        type="text"
                        placeholder="007XXXXXXXXXXXXXXXXXXX"
                        className="form-control"
                        name="nroCbu"
                        errors={errors}
                        values={values}
                      />
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="19" 
                        height="18" 
                        viewBox="0 0 19 18" 
                        fill="none"
                      >
                        <path d="M16.6972 11.2958C16.4483 11.2958 16.2467 11.4975 16.2467 11.7463V15.7468C16.2458 16.493 15.6412 17.0978 14.895 17.0985H2.25279C1.50655 17.0978 0.901995 16.493 0.901115 15.7468V4.00572C0.901995 3.25966 1.50655 2.65492 2.25279 2.65404H6.25325C6.50211 2.65404 6.70381 2.45235 6.70381 2.20349C6.70381 1.9548 6.50211 1.75293 6.25325 1.75293H2.25279C1.00918 1.75434 0.00140799 2.76211 0 4.00572V15.747C0.00140799 16.9906 1.00918 17.9984 2.25279 17.9998H14.895C16.1386 17.9984 17.1464 16.9906 17.1478 15.747V11.7463C17.1478 11.4975 16.9461 11.2958 16.6972 11.2958Z" fill="#53BA38"/>
                        <path d="M16.9697 0.593865C16.1779 -0.197955 14.8942 -0.197955 14.1024 0.593865L6.06412 8.6321C6.00904 8.68718 5.96926 8.75547 5.94849 8.83045L4.89144 12.6466C4.84797 12.8031 4.89215 12.9706 5.0069 13.0856C5.12182 13.2003 5.28938 13.2445 5.44584 13.2012L9.26203 12.144C9.337 12.1232 9.40529 12.0834 9.46038 12.0284L17.4984 3.98994C18.289 3.1976 18.289 1.91491 17.4984 1.12257L16.9697 0.593865ZM7.04585 8.92496L13.6245 2.34611L15.7462 4.46778L9.16734 11.0466L7.04585 8.92496ZM6.62204 9.77539L8.31709 11.4706L5.97243 12.1202L6.62204 9.77539ZM16.8613 3.35283L16.3835 3.83066L14.2616 1.70882L14.7396 1.23098C15.1795 0.79116 15.8926 0.79116 16.3324 1.23098L16.8613 1.75968C17.3004 2.20003 17.3004 2.91265 16.8613 3.35283Z" fill="#53BA38"/>
                      </svg>
                    </div>  
                    {<p style={{ fontWeight: "bold", fontSize: "12px", marginLeft:"20px" }}>{banco?.ds_banco}</p>}
                  </div>
                </div>
                <div className="form-group col-12 text-center">
                  <Button
                    className="btn btn-warning cont mb-3"
                    disabled={false}
                    type="button" 
                    onClick={validateCBU}
                  >
                    ¿Es correcto el número?
                  </Button>

                  <span className="span-cbu">
                    Por favor no olvides tener tu CBU/CVU actualizado
                  </span>
                </div>
              </form>
            </section>
            <Footer>
              <div className="col-12">
                <Button
                  className="btn btn-primary cont"
                  disabled={!isContinuarButtonEnabled}
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
