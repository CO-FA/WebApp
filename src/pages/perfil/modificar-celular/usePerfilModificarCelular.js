import { enviarSMSValidacion } from "api/PhoneValidation";
import { useLoaderContext } from "components/loader/LoaderContext";
import { useCelularAtom, useIdentidadAtom } from "pages/atoms/Atoms";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { formErrors } from "utils/constantsErrors";

export const usePerfilModificarCelular = () => {
    let { setShowLoader } = useLoaderContext();
    const [errors, setErrors] = useState(false);
    const history = useHistory();
    const { setCodArea, setNumCelular } = useCelularAtom();
    const { identidad } = useIdentidadAtom();
    const { codArea, numCelular } = useCelularAtom();

    const submitForm = async (values) => {
        if (!errors) {
          setShowLoader(true);
          setCodArea(values.clienteCelCodigo);
          setNumCelular(values.clienteCelNumero);
          const pin = await enviarSMSValidacion(
            values.clienteCelCodigo + "" + values.clienteCelNumero,
            identidad.cuit
          );
          setShowLoader(false);
          console.log("enviar",pin.codigo)
          history.push("/perfil-validar-celular");
          //setCurrentStep(STEPS.STEP_3_CELULAR);
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

        if (!values.clientePin) {
          errorsAUx = {
            ...errorsAUx,
            clientePin: formErrors.PIN_EMPTY,
          };
        } else if (String(values.clientePin).length < 4) {
          errorsAUx = {
            ...errorsAUx,
            clientePin: formErrors.PIN_ERROR,
          };
        } else {
          errorsAUx = errorsAUx || false;
        }
        setErrors(errorsAUx);
        return errorsAUx;
    };

    const submitFormValidar = async (values) => {
      if (!errors) {
        setShowLoader(true);
        setCodArea(values.clienteCelCodigo);
        setNumCelular(values.clienteCelNumero);
        setShowLoader(false);
        history.push("/perfil");
        //setCurrentStep(STEPS.STEP_3_CELULAR);
      }
  };
    
    const reenviarPinSms = async (values) => {
        const pin = await enviarSMSValidacion(
          codArea + "" + numCelular, /* el nuevo numero que Ingresa el usuario */
          identidad.cuit
        );
        console.log("reenviar", pin);
      };

    return{submitForm,validateForm, errors, reenviarPinSms, submitFormValidar}

};