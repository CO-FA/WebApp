import React, { useState } from "react";
import Encabezado from "components/commons/Encabezado";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { formErrors } from "../../../utils/constantsErrors";
import Input from "components/commons/Input";
import Footer from "components/commons/Footer";
import Button from "components/commons/Button";

import { STEPS } from "../../../components/registro/constantsSteps";
import { LoaderContext } from "../../../components/loader/LoaderContext";
import { useStepAtom, useIdentidadAtom } from "../atoms/Atoms";
import { useCalculadoraPrestamo } from "../calculadora-prestamo/hooks/useCalculadoraPrestamo";

export function InfoPreNosis() {
    const {
        monto,
        cuota,
        montoCuota,
    } = useCalculadoraPrestamo();

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
            history.push("/onboarding/nosis");
            setCurrentStep(STEPS.STEP_10_VALIDAR_IDENTIDAD_NOSIS);
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
        >
            {({
            values,
            handleSubmit,
            /* and other goodies */
            }) => (
            <>
                <form>
                    <section>
                        <h3>¡Último paso!</h3>
                        <div className="row profile-container">
                            <div className="form-group col-12">
                                <h4>Ya tenés APROBADO el préstamo por </h4>
                                <h4>${monto}</h4>
                                <p>En {cuota} cuotas de ${montoCuota}</p>
                            </div>
                            <div className="form-group col-12">
                                <h4  style={{ fontWeight: "bold"}}>Vamos a validar tu identidad</h4>
                                <p>Necesitamos:<br/>- Foto del frente y dorso de tu DNI <br/>- Una selfie :)</p>
                            
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