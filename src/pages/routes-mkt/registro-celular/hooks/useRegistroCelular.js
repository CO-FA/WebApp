import { enviarSMSValidacion } from "api/PhoneValidation";
import { useLoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useCelularAtom, useIdentidadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { formErrors } from "utils/constantsErrors";

export const useRegistroCelular = () => {
    let { setShowLoader } = useLoaderContext();
    const [errors, setErrors] = useState(false);
    const history = useHistory();
    const { setCurrentStep } = useStepAtom();
    const { setCodArea, setNumCelular } = useCelularAtom();
    const { identidad } = useIdentidadAtom();

    const submitForm = async (values) => {
        if (!errors) {
          setShowLoader(true);
          setCodArea(values.clienteCelCodigo);
          setNumCelular(values.clienteCelNumero);
          await enviarSMSValidacion(
            values.clienteCelCodigo + "" + values.clienteCelNumero,
            identidad.cuit
          );
          setShowLoader(false);
          //TO DO: ir a pantala intermedia por unos segundos diciendo "te va a llegar un mensaje"

          history.push("/onboarding/validar-pin");
          setCurrentStep(STEPS.STEP_3_CELULAR);
        }
    };

    const validateForm = (values) => {
        var errorsAUx = {};
        if (!values.clienteCelCodigo) {
            errorsAUx = {
            ...errorsAUx,
            clienteCelCodigo: formErrors.CODE_EMPTY,
            };
        } else if (String(values.clienteCelCodigo).length < 2) {
            errorsAUx = {
            ...errorsAUx,
            clienteCelCodigo: formErrors.CODE_PHONE_ERROR,
            };
        } else {
            errorsAUx = false;
        }
        if (!values.clienteCelNumero) {
            errorsAUx = {
            ...errorsAUx,
            clienteCelNumero: formErrors.PHONE_EMPTY,
            };
        } else if (String(values.clienteCelNumero).length < 6) {
            errorsAUx = {
            ...errorsAUx,
            clienteCelNumero: formErrors.PHONE_ERROR,
            };
        } else {
            errorsAUx = errorsAUx || false;
        }
        setErrors(errorsAUx);
    };

    return{submitForm,validateForm, errors}

};