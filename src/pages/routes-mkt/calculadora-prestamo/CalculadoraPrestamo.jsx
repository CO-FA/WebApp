import React, { useState } from "react";
import { EncabezadoVerde } from "components/commons/EncabezadoVerdeDos";
import { Slider } from "@mui/material";
import Button from "components/commons/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

//TODO: sacar del stateGlobal
const nombreUsuario = "Leandro Canteruccio";
const maxPrestamo = 80000;

export default function CalculadoraPrestamo() {
  const [monto, setMonto] = useState(maxPrestamo);
  const [montoCuota, setMontoCuota] = useState(maxPrestamo / 12);
  const [cuota, setCuota] = useState(12);

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
  //TODO: calcular monto y cuotas según formula excel
  //Interes compuesto
  const caculateMontoCuota = (cuotas, total) => {
    if (cuotas === 0 || monto === 0) {
      setMontoCuota(0);
    }
    const valorCuota = (parseInt(total) / parseInt(cuotas)).toFixed(2);
    setMontoCuota(valorCuota);
  };

  useEffect(() => {
    caculateMontoCuota(cuota, monto);
  }, [monto, cuota]);

  return (
    <>
      <EncabezadoVerde>
        <h2 className="text-white flex-grow-1 text-center align-self-end">
          {nombreUsuario}
        </h2>
        <h1 className="text-white flex-grow-1 text-center align-self-end">
          Tenes un préstamo aprobado por
        </h1>
        <h2 className="text-white flex-grow-1 text-center align-self-end">
          ${maxPrestamo}
        </h2>
      </EncabezadoVerde>
      <div className="mb-3 mt-4">
        <div className="d-flex form-group align-items-center justify-content-center decorator">
          <span class="decorator-input">$</span>
          <input
            type="number"
            className="form-control mb-4 text-center input-slider"
            placeholder="Monto"
            name="monto"
            value={monto}
            onChange={handleChangeMonto}
          />
        </div>

        <Slider
          value={monto}
          onChange={(e) => {
            setMonto(e.target.value);
          }}
          max={maxPrestamo}
        />
      </div>

      <div className="mb-3 mt-4">
        <div className="d-flex form-group align-items-center decorator justify-content-center">
          <input
            type="number"
            className="form-control mb-4 text-center input-slider"
            placeholder="Cuotas"
            name="cuota"
            value={cuota}
            onChange={handleChangeCuota}
          />
        </div>

        <Slider
          value={cuota}
          onChange={(e) => {
            setCuota(e.target.value);
          }}
        />
      </div>
      <div className="mb-4 mt-4">
        <h4 className="text-center">
          {cuota} Cuotas de ${montoCuota}
        </h4>
      </div>
      <Link to="/registro-fecha">
        <Button className="btn btn-primary cont" disabled={true} type="submit">
          Continuar
        </Button>
      </Link>
    </>
  );
}
