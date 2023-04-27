import React from "react";
import { EncabezadoVerde } from "components/commons/EncabezadoVerdeDos";
import { Slider } from "@mui/material";
import Button from "components/commons/Button";
import { Link } from "react-router-dom";
import { useCalculadoraPrestamo } from "./hooks/useCalculadoraPrestamo";
import { useIdentidadAtom } from "../atoms/Atoms";

const TextoHeaderSecundario = ({ text }) => {
  return (
    <h2 className="text-white flex-grow-1 text-center align-self-end">
      {text}
    </h2>
  );
};
const TextoHeaderPrimario = ({ text }) => {
  return (
    <h1 className="text-white flex-grow-1 text-center align-self-end">
      {text}
    </h1>
  );
};
const InputWithDecorator = ({
  decorator,
  placeholder,
  name,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="d-flex form-group align-items-center justify-content-center decorator">
      {decorator && <span className="decorator-input">{decorator}</span>}
      <input
        type="number"
        className="form-control mb-4 text-center input-slider"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const Message = ({ text }) => {
  return (
    <div className="mb-4 mt-4">
      <h4 className="text-center">{text}</h4>
    </div>
  );
};

const Box = ({ children, className }) => {
  return <div className={"mb-3 mt-4 " + (className || "")}>{children}</div>;
};

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
      <Link to="/registro-nosis">
        <Button className="btn btn-primary cont" disabled={false} type="submit">
          CONTINUAR
        </Button>
      </Link>
    </>
  );
}
