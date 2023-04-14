import React, { useState } from "react";
import Encabezado from "components/commons/Encabezado";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { formErrors } from "../../../utils/constantsErrors";
import Footer from "components/commons/Footer";
import Button from "components/commons/Button";

import RegistroSetps from "../../../components/registro/RegistroSteps";
import { STEPS } from "../../../components/registro/constantsSteps";
import { LoaderContext } from "../../../components/loader/LoaderContext";

export function PrestamoExitoso() {
    return(
        <>
        <Encabezado/>
        <Formik
            /* onSubmit={(values, { setSubmitting }) =>
            submitForm(values, setSubmitting)
            }
            validate={(values) => validateForm(values)} */
        >
            {({
            values,
            handleSubmit,
            /* and other goodies */
            }) => (
            <>
                <form>
                    <section>
                        <div className="row profile-container">
                            
                            <div className="form-group col-12">
                                <h4>FELICITACIONES</h4>
                                <p>Nombre Cliente <br/> El préstamo ya lo tenés !!!</p>
                                <p>En segundos vas a tener depositado el préstamo en tu cuenta.</p>
                            </div>
                            <div className="col-12">
                                <h5>Gracias por confiar en nosotros.</h5>
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
                                FINALIZAR OPERACIÓN
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