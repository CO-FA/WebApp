import React from "react";
import { useHistory } from "react-router-dom";
import { getIpAddress } from "api/ip";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import {useIdentidadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import { validateLoan } from "api/GenerateLoan";

export const useInfoPostNosis = () => {
  let { setShowLoader } = React.useContext(LoaderContext);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const {identidad} = useIdentidadAtom();

  const submitForm = async () => {
    setShowLoader(true);
    try {
      const ipCliente = await getIpAddress();
      const respValidateLoan = await validateLoan({
        IP: ipCliente,
        nroDocumento: identidad.dni,
      });

      console.log("resp validate loan", respValidateLoan); //"Pendiente de firma"

      history.push("/onboarding/firma-electronica");
      setCurrentStep(STEPS.STEP_12_FIRMA_ELECTRONICA);
    } catch (error) {
      history.push("/onboarding/error");
      setCurrentStep(STEPS.STEP_99_ERROR);
      console.error(error);
    } finally {
      setShowLoader(false);
    }
  };

  return { submitForm };
};

