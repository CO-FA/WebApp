import { useDiaVencimientoAtom, useIdentidadAtom, useLeadAtom, usePrestamoAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import { useEffect} from "react";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { datosPrestamo } from "api/Prestamo";
import React, { useState } from "react";
import { getDiasVencimiento } from "api/DiasVencimientoCuota";
import { formErrors } from "utils/constantsErrors";

export const calcularCuota = (capital, interes, plazo) => {
  const interest = (capital * (interes * 0.01)) / plazo;
  let payment = capital / plazo + interest;
  return payment || 0.0;
};

export const useCalculadoraPrestamo = () => {
  const {
    intereses,
    monto,
    setMonto,
    montoCuota,
    setMontoCuota,
    cuota,
    setCuota,
  } = usePrestamoAtom();
  const { identidad } = useIdentidadAtom();
  const { setCurrentStep } = useStepAtom();
  const {setLead} = useLeadAtom();
  let { setShowLoader } = React.useContext(LoaderContext);
  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const [opcionesDias, setOpcionesDias] = useState();
  const { setDiaVencimiento  } = useDiaVencimientoAtom();

  useEffect(() => {
    getDiasVencimiento().then((response) => {
      setOpcionesDias(response.data);
    });
  }, []);


  const submitForm = async (values, setSubmitting) => {
    if (errors) {
      return;
    }
    if (!errors) {
      setShowLoader(true);
      try { 
        const datosLead = await datosPrestamo({
          intereses,
          monto,
          cuota,
          montoCuota,
          documento: identidad.dni
        });
        setLead(datosLead);
        setDiaVencimiento(values.clienteDiaVencimiento);
        setShowLoader(false);
        history.push("/onboarding/password");
        setCurrentStep(STEPS.STEP_5_CLAVE);
      } catch (error) {
        history.push("/onboarding/error");
        setCurrentStep(STEPS.STEP_99_ERROR);
        console.error(error);
      }
      setShowLoader(false);
    }
  };

  const validateForm = (values) => {
    var errorsAUx = {};
      if (!values.clienteDiaVencimiento) {
        errorsAUx = {
          ...errorsAUx,
          clienteDiaVencimiento: formErrors.VENCIMIENTO_CUOTA,
        };
      } else {
        errorsAUx = false;
      }
    setErrors(errorsAUx);
    return errorsAUx;
  };

  useEffect(() => {
    const cantCuotas = parseInt((intereses?.maximo_cantidad_cuotas || 12) / 2);
    const valorCuota = calcularCuota(
      intereses?.prestamo_preaprobado,
      intereses?.interes,
      cantCuotas
    );
    setMonto(intereses?.prestamo_preaprobado);
    setCuota(cantCuotas);
    setMontoCuota(valorCuota);
  }, [intereses]);

  const handleChangeMonto = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setMonto(value);
    }
  };
  const handleChangeCuota = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setCuota(value);
    }
  };

  const caculateMontoCuota = useCallback(
    (cuotas, total) => {
      if (cuotas === 0 || total === 0) {
        setMontoCuota(0);
        return;
      }

      const valorCuota = calcularCuota(
        total,
        intereses?.interes,
        cuotas
      ).toFixed(2);
      setMontoCuota(valorCuota);
    },
    [intereses, setMontoCuota]
  );

  useEffect(() => {
    caculateMontoCuota(cuota, monto);
  }, [monto, cuota, caculateMontoCuota]);

  return {
    intereses,
    monto,
    handleChangeMonto,
    handleChangeCuota,
    cuota,
    montoCuota,
    validateForm,
    submitForm, 
    errors,
    opcionesDias,
    
  };
};
