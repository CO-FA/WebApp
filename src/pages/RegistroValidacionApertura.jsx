import React, { useState } from "react";
import EncabezadoVerdeDos from "../components/commons/EncabezadoVerdeDos";
import { Slider } from "@mui/material";
import Button from "components/commons/Button";
import { Link } from "react-router-dom";

export default function Perfil() {
  const [monto, setMonto] = useState(15);
  const [cuota, setCuota] = useState(0);

  return (
    <>
      <EncabezadoVerdeDos />
      <div className="mb-3 mt-4">
        <div className="form-group align-items-center">
          <input
            label="Nro DNI"
            type="number"
            className="form-control mb-4 text-center"
            placeholder="$"
            name="clienteDocNumero"
            value={monto}
          />
        </div>

        <Slider
          aria-label="Volume"
          value={monto}
          onChange={(e) => {
            setMonto(e.target.value);
          }}
        />
      </div>

      <div className="mb-3 mt-4">
        <div className="form-group align-items-center">
          <input
            label="Nro DNI"
            type="number"
            className="form-control mb-4 text-center"
            placeholder="$"
            name="clienteDocNumero"
            value={cuota}
          />
        </div>

        <Slider
          aria-label="Volume"
          value={cuota}
          onChange={(e) => {
            setCuota(e.target.value);
          }}
        />
      </div>
      <Link to="/registro-fecha">
        <Button className="btn btn-primary cont" disabled={false} type="submit">
          Continuar
        </Button>
      </Link>
    </>
  );
}
