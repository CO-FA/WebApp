import { usePrestamoAtom } from "pages/routes-mkt/atoms/Atoms";
import { useEffect, useState } from "react";
import { useCallback } from "react";

const maxPrestamo = 100000;

export const calcularCuota = (capital, interes, plazo) => {
  const interest = (capital * (interes * 0.01)) / plazo;
  let payment = capital / plazo + interest;
  return payment || 0.0;
};

export const useCalculadoraPrestamo = () => {
  const [monto, setMonto] = useState(maxPrestamo);
  const [montoCuota, setMontoCuota] = useState(maxPrestamo / 12);
  const [cuota, setCuota] = useState(12);

  const { intereses } = usePrestamoAtom();

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
  };
};
