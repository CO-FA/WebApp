import React, { useState } from "react";
import Input from "components/commons/Input";
import Encabezado from "components/commons/Encabezado";
import Footer from "components/commons/Footer";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";
import Button from "components/commons/Button";
import { formErrors } from "utils/constantsErrors";
import RegistroSetps from "components/registro/RegistroSteps";
import { STEPS } from "components/registro/STEPS-MKT";
import {
  useStepAtom,
  useIdentidadAtom,
  useSituacionLaboralAtom,
  useGeneroAtom,
} from "../atoms/Atoms";
import { useLoaderContext } from "components/loader/LoaderContext";
import { useEffect } from "react";
import { getSituaciones } from "api/SituacionesLaborales";

const SelectSituacionLaboral = ({ opciones, errors }) => {
  return (
    <>
      {" "}
      <label htmlFor="situacionLaboral">Situación Laboral</label>
      <Field
        className="form-control"
        name="clienteSituacionLaboral"
        id="situacionLaboral"
        as="select"
      >
        <option value={""} disabled selected>
          Seleccione Situación Laboral...
        </option>
        {opciones?.map((opt) => {
          return (
            <option value={opt.id} key={opt.id}>
              {opt.descripcion}
            </option>
          );
        })}
      </Field>
      {errors.clienteSituacionLaboral && (
        <span id="clientePass-errorMsg" className="form-text text-danger small">
          {`* ${errors.clienteSituacionLaboral}`}
        </span>
      )}
    </>
  );
};

const SelectGenero = ({ errors }) => {
  return (
    <>
      <label htmlFor="clienteGenero">Genero</label>
      <Field
        className="form-control"
        name="clienteGenero"
        id="clienteGenero"
        as="select"
      >
        <option value={""} disabled selected>
          Seleccione Genero...
        </option>
        <option value={"M"}>Masculino</option>
        <option value={"F"}>Femenino</option>
      </Field>
      {errors.clienteSituacionLaboral && (
        <span id="clientePass-errorMsg" className="form-text text-danger small">
          {`* ${errors.clienteGenero}`}
        </span>
      )}
    </>
  );
};

export function RegistroDni() {
  const [opciones, setOpciones] = useState();

  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const { documento, setDocumento } = useIdentidadAtom();
  const { situacionLaboral, setSituacionLaboral } = useSituacionLaboralAtom();
  const { setShowLoader } = useLoaderContext();
  const { genero, setGenero } = useGeneroAtom();

  useEffect(() => {
    getSituaciones().then((response) => {
      setOpciones(response.data);
    });
  }, []);

  const submitForm = async (values, setSubmitting) => {
    if (!errors) {
      setDocumento(values.clienteDocNumero);
      setSituacionLaboral(values.clienteSituacionLaboral);
      setGenero(values.clienteGenero);
      setShowLoader(true);

      history.push("/onboarding/elegir-identidad");
      setCurrentStep(STEPS.STEP_2_IDENTIDAD);
      console.log("nav /onboarding/elegir-identidad");
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
        clienteGenero: "Seleccione genero",
      }),
    };
    if (Object.keys(errorValidate).length > 0) {
      setErrors(errorValidate);
    } else {
      setErrors(false);
    }
  };

  return (
    <>
      <Encabezado title={<RegistroSetps current={STEPS.STEP_1_DNI} />} />
      <Formik
        initialValues={{
          clienteDocNumero: documento,
          clienteSituacionLaboral: situacionLaboral,
          clienteGenero: genero,
        }}
        onSubmit={(values, { setSubmitting }) =>
          submitForm(values, setSubmitting)
        }
        validate={(values) => validateForm(values)}
      >
        {({ values, handleSubmit }) => (
          <>
            <section>
              <Form>
                <div className="pt-3">
                  <div className="row">
                    <div className="form-group col-12">
                      <Input
                        label="Nro DNI"
                        type="number"
                        placeholder={"Ingrese Nro DNI"}
                        className="form-control"
                        name="clienteDocNumero"
                        errors={errors}
                        values={values}
                      />
                    </div>
                    <div className="form-group col-12">
                      <SelectSituacionLaboral
                        opciones={opciones}
                        errors={errors}
                      />
                    </div>
                    <div className="form-group col-12">
                      <SelectGenero errors={errors} />
                    </div>
                  </div>
                </div>
              </Form>
            </section>
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
