import React from "react";
import { Slider } from "@mui/material";
import { Formik } from "formik";
import { useCalculadoraPrestamo } from "./hooks/useCalculadoraPrestamo";
import { useIdentidadAtom } from "../atoms/Atoms";
import { EncabezadoVerde } from "components/commons/EncabezadoVerdeDos";
import Button from "components/commons/Button";
import { TextoHeaderSecundario } from "./components/TextoHeaderSecundario";
import { TextoHeaderPrimario } from "./components/TextoHeaderPrimario";
import { InputWithDecorator } from "./components/InputWithDecorator";
import { Message } from "./components/Message";
import { Box } from "./components/Box";
import Footer from "components/commons/Footer";
import { DiaVencimiento } from "./components/DiaVencimiento";

export default function CalculadoraPrestamo() {
  const { identidad } = useIdentidadAtom();
  const {
    intereses,
    monto,
    handleChangeMonto,
    handleChangeCuota,
    cuota,
    montoCuota,
    submitForm,
    errors,
    opcionesDias
  } = useCalculadoraPrestamo();
  
  return (
    <>
      <EncabezadoVerde>
        <TextoHeaderSecundario text={identidad?.nombreCompleto} />
        <TextoHeaderPrimario text={"Tenes un préstamo aprobado por"} />
        <TextoHeaderSecundario text={"$" + intereses?.prestamo_preaprobado} />
      </EncabezadoVerde>
      <Formik
         initialValues={{
          clienteDiaVencimiento: "",
        }}
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
      >
         {({ handleSubmit }) => (
          <>
            <Box>
              <InputWithDecorator
                decorator="$"
                placeholder="Monto"
                name="monto"
                value={monto || 2000}
                onChange={handleChangeMonto}
              />
              <Slider
                value={monto || 2000}
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
                value={cuota || 12}
                onChange={handleChangeCuota}
              />
              <Slider
                value={cuota || 12}
                onChange={handleChangeCuota}
                sx={{
                  color: "#53BA38",
                }}
                min={3}
                max={intereses?.maximo_cantidad_cuotas}
                />
            </Box>
            <Box>
              <DiaVencimiento
                opcionesDias={opcionesDias}
                errors={errors}
              />
            </Box>
            <Message text={`${cuota} Cuotas de $ ${montoCuota}`} />
            <Footer>
              <div className="col-12">
                <Button
                  className="btn btn-primary cont"
                  disabled={false}
                  type="submit"
                  onClick={handleSubmit}
                >
                  CONTINUAR
                </Button>
              </div>
            </Footer>
          </>
        )}
      </Formik> 
    </>
  );
}
