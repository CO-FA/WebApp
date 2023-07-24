import React, { useState } from "react";
import { EncabezadoVerde } from "components/commons/EncabezadoVerdeDos";
import { Slider } from "@mui/material";
import Button from "components/commons/Button";
import { useCalculadoraPrestamo } from "./hooks/useCalculadoraPrestamo";
import { useIdentidadAtom, useLeadAtom} from "../atoms/Atoms";
import { TextoHeaderSecundario } from "./components/TextoHeaderSecundario";
import { TextoHeaderPrimario } from "./components/TextoHeaderPrimario";
import { InputWithDecorator } from "./components/InputWithDecorator";
import { Message } from "./components/Message";
import { Box } from "./components/Box";
import Footer from "components/commons/Footer";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { LoaderContext } from "components/loader/LoaderContext";
import { useStepAtom } from "../atoms/Atoms";
import { STEPS } from "components/registro/STEPS-MKT";
import { datosPrestamo } from "api/Prestamo";

export default function CalculadoraPrestamo() {
  let { setShowLoader } = React.useContext(LoaderContext);
  const { identidad } = useIdentidadAtom();
  console.log("identidad",identidad)
  const {
    intereses,
    monto,
    handleChangeMonto,
    handleChangeCuota,
    cuota,
    montoCuota,
  } = useCalculadoraPrestamo();
  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const {setLead} = useLeadAtom();

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

  return (
    <>
      <Formik
        initialValues={{
        }}
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
      >
         {({ handleSubmit }) => (
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
