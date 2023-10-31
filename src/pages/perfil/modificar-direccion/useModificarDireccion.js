import React, { useState } from "react";
import { LoaderContext } from "../../../components/loader/LoaderContext";
import { useHistory } from "react-router-dom";
import { formErrors } from "../../../utils/constantsErrors";

export const useModificarDireccion = () => {
    let { setShowLoader } = React.useContext(LoaderContext);
    const [errors, setErrors] = useState(false);
    const history = useHistory();

  const submitForm = (values, setSubmitting) => {
    setShowLoader(true);
    setTimeout(() => {
      if (!errors) {
        setShowLoader(false);
        history.push("/perfil");
      }
    }, 2000);
  };

    const validateForm = (values) => {
       
        if (!values.clienteDireccionCalle) {
          setErrors({
            clienteDireccionCalle: formErrors.DATO_EMPTY,
          });
        } else if (!values.clienteDireccionNum) {
            setErrors({
                clienteDireccionNum: formErrors.DATO_EMPTY,
            });
        } else if (!values.clienteDireccionCP) {
            setErrors({
              clienteDireccionCP: formErrors.DATO_EMPTY,
            });
        } else {
          setErrors(false);
        }
        return errors
    };

    return{submitForm,validateForm, errors}

};