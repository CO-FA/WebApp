import React, { useState } from "react";
import Encabezado from "components/commons/Encabezado";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { formErrors } from "../../../utils/constantsErrors";
import Footer from "components/commons/Footer";
import Button from "components/commons/Button";

import { STEPS } from "../../../components/registro/constantsSteps";
import { LoaderContext } from "../../../components/loader/LoaderContext";
import { useStepAtom, useIdentidadAtom } from "../atoms/Atoms";

export function InfoPostNosis() {
    let { setShowLoader } = React.useContext(LoaderContext);
	const [errors, setErrors] = useState(false);
	const history = useHistory();
    const { setCurrentStep } = useStepAtom();

    const submitForm = (values, setSubmitting) => {
        if (errors) {
        return;
        }
        if (!errors) {
        setShowLoader(true);
        try{
            history.push("/onboarding/prestamo-exitoso");
            setCurrentStep(STEPS.STEP_12_PRESTAMO_EXITOSO);
        }catch (error) {
            history.push("/onboarding/error");
            setCurrentStep(STEPS.STEP_99_ERROR);
            console.error(error);
        }
        setShowLoader(false);
        }
    };

    return(
        <>
        <Encabezado/>
        <Formik
            onSubmit={(values, { setSubmitting }) =>
            submitForm(values, setSubmitting)
            }
            /* validate={(values) => validateForm(values)} */
        >
            {({
            values,
            handleSubmit,
            /* and other goodies */
            }) => (
            <>
                <form>
                    <section>
                        <h3>Revisá y confirmá</h3>
                        <div className="row profile-container">
                            <div className="form-group col-12">
                                <p>Estas pidiendo un préstamo de <br/> $99999999</p>
                                <p>a devolver en 99 cuotas de <br/> $99999999 <b> con vencimiento <br/> primera cuota el DD/MM/AA </b></p>
                                <p>Te lo estaremos depositando en tu CBU/CVU <br/> 000000000000000000000000 <br/>(nombre entidad bancaria)</p>
                            </div>
                            {/* <div className="form-group col-12">
                            
                            </div> */}
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
                            <p>Al confirmar declaro aceptar la solicitud de crédito y sus términos y condiciones</p>
                            <div className="form-group col-12">
                                
                                <Button>Detalles de la operación</Button>
                                <Button>Solicitud de crédito</Button>
                                <Button>Anexo de solicitud (?)</Button>
                            </div>
                        </div>
                    </Footer>
                </form>
            </>
            )}
        </Formik>
    </>
);
}