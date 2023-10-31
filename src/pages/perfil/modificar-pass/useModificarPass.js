import { crearPassword } from "api/Password";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useIdentidadAtom, useStepAtom } from "pages/atoms/Atoms";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { formErrors } from "utils/constantsErrors";

export const useModificarPass = () => {
    let { setShowLoader } = React.useContext(LoaderContext);
    const history = useHistory();
    const { setCurrentStep } = useStepAtom();
    const [errors, setErrors] = useState(false);
    const { identidad } = useIdentidadAtom();

    const submitForm = async (values, setSubmitting) => {
        if (errors) {
          return;
        }
        if (!errors) {
          setShowLoader(true);
          try {
            /* await crearPassword({
              nroDocumento: identidad.dni,
              password: values.clientePass,
            }) */
            history.push("/perfil");
          } catch (error) {
            history.push("/onboarding/error");
            setCurrentStep(STEPS.STEP_99_ERROR);
            console.error(error);
          }
          setShowLoader(false);
        }
    };
    
    const validateForm = (values) => {
        // Min 8, 1 letra mayus, 1 letra min, 1 num
        let pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g;

        if (values.clientePass !== values.clientePassConfirm) {
            setErrors({ clientePassConfirm: formErrors.PASSWORD_DOESNT_MATCH });
        } else if (!values.clientePass) {
            setErrors({
            clientePass: formErrors.PASSWORD_EMPTY,
            clientePassConfirm: formErrors.PASSWORD_DOESNT_MATCH,
            });
        } else if (!values.clientePass.match(pattern)) {
            setErrors({
            clientePass: formErrors.PATTERN_ERROR,
            });
        } else {
            setErrors(false);
        }

        return errors
    };
    
    return{submitForm,validateForm, errors}
};