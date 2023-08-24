import { getSituaciones } from "api/SituacionesLaborales";
import { useLoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useGeneroAtom, useIdentidadAtom, useSituacionLaboralAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { formErrors } from "utils/constantsErrors";

export const useRegistroDni = () => {
    const [errors, setErrors] = useState(false);
    const history = useHistory();
    const { setCurrentStep } = useStepAtom();
    const { setDocumento } = useIdentidadAtom();
    const { setSituacionLaboral } = useSituacionLaboralAtom();
    const { setShowLoader } = useLoaderContext();
    const { setGenero } = useGeneroAtom();
    const [opciones, setOpciones] = useState();

    useEffect(() => {
      getSituaciones().then((response) => {
        setOpciones(response.data);
      });
    }, []);

    const submitForm = async (values, setSubmitting) => {
      if (!errors) {
        setDocumento(values.clienteDocNumero);
        setSituacionLaboral(values.clienteSituacionLaboral);
        setGenero(values.clienteGenero);
        setShowLoader(true);
  
        history.push("/onboarding/elegir-identidad");
        setCurrentStep(STEPS.STEP_2_IDENTIDAD);
        console.log("nav /onboarding/elegir-identidad");
      }
    };

    const validateForm = (values) => {
      const errorValidate = {
        ...(String(values.clienteDocNumero).length < 7 && {
          clienteDocNumero: formErrors.DOCUMENT_LENGTH,
        }),
        ...(!values.clienteDocNumero && {
          clienteDocNumero: formErrors.DOCUMENT_EMPTY,
        }),
        ...(!values.clienteSituacionLaboral && {
          clienteSituacionLaboral: "Seleccione situación laboral",
        }),
        ...(!values.clienteGenero && {
          clienteGenero: "Seleccione genero",
        }),
      };
      if (Object.keys(errorValidate).length > 0) {
        setErrors(errorValidate);
      } else {
        setErrors(false);
      }
    };
    
    return{submitForm,validateForm,opciones, errors}
};