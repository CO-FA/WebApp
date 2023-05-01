import React from "react";
import { EncabezadoVerde } from "components/commons/EncabezadoVerdeDos";
import { Slider } from "@mui/material";
import Button from "components/commons/Button";
import { Link } from "react-router-dom";
import { useCalculadoraPrestamo } from "./hooks/useCalculadoraPrestamo";
import { useIdentidadAtom } from "../atoms/Atoms";
import { Box } from "./components/Box";
import { InputWithDecorator } from "./hooks/InputWithDecorator";
import { TextoHeaderSecundario } from "./hooks/TextoHeaderSecundario";
import { TextoHeaderPrimario } from "./hooks/TextoHeaderPrimario";
import { Message } from "./hooks/Message";

export default function CalculadoraPrestamo() {
  const { identidad } = useIdentidadAtom();
  const {
    intereses,
    monto,
    handleChangeMonto,
    handleChangeCuota,
    cuota,
    montoCuota,
  } = useCalculadoraPrestamo();
  return (
    <>
      <EncabezadoVerde>
        <TextoHeaderSecundario text={identidad?.nombreCompleto} />
        <TextoHeaderPrimario text={"Tenes un préstamo aprobado por"} />
        <TextoHeaderSecundario text={"$" + intereses?.prestamo_preaprobado} />
      </EncabezadoVerde>
      <Box>
        <InputWithDecorator
          decorator="$"
          placeholder="Monto"
          name="monto"
          value={monto}
          onChange={handleChangeMonto}
        />
        <Slider
          value={monto}
          onChange={handleChangeMonto}
          sx={{
            color: "#53BA38",
          }}
          step={500}
          min={2000}
          max={intereses?.prestamo_preaprobado}
        />
      </Box>
      <Box>
        <InputWithDecorator
          placeholder="Cuotas"
          name="cuota"
          value={cuota}
          onChange={handleChangeCuota}
        />
        <Slider
          value={cuota}
          onChange={handleChangeCuota}
          sx={{
            color: "#53BA38",
          }}
          min={3}
          max={intereses?.maximo_cantidad_cuotas}
        />
      </Box>
      <Message text={`${cuota} Cuotas de ${montoCuota}`} />
      <Link to="/onboarding/password">
        <Button className="btn btn-primary cont" disabled={false} type="submit">
          CONTINUAR
        </Button>
      </Link>
    </>
  );
}
