import { useEffect, useState } from "react";
import { STEPS } from "components/registro/STEPS-MKT";
import {
  useIdentidadAtom,
  useSituacionLaboralAtom,
  useGeneroAtom,
  useStepAtom,
} from "pages/atoms/Atoms";
import { useHistory } from "react-router-dom";
import { formErrors } from "utils/constantsErrors";
import { getSituaciones } from "api/SituacionesLaborales";
import { useLoaderContext } from "components/loader/LoaderContext";

export const useRegistroDni = () => {
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const { setDocumento } = useIdentidadAtom();
  const { setSituacionLaboral } = useSituacionLaboralAtom();
  const { setShowLoader } = useLoaderContext();
  const { setGenero } = useGeneroAtom();
  const [opciones, setOpciones] = useState([]);

  useEffect(() => {
    getSituaciones()
      .then((response) => {
        setOpciones(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar situaciones laborales:", error);
      });
  }, []);

  const submitForm = async (values, setSubmitting) => {
    if (Object.keys(errors).length === 0) {
      setDocumento(values.clienteDocNumero);
      setSituacionLaboral(values.clienteSituacionLaboral);
      setGenero(values.clienteGenero);
      setShowLoader(true);
      history.push("/onboarding/elegir-identidad");
      setCurrentStep(STEPS.STEP_2_IDENTIDAD);
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
        clienteGenero: "Seleccione género",
      }),
    };

    setErrors(errorValidate);
    return errorValidate;
  };

  return { submitForm, validateForm, opciones, errors };
};
