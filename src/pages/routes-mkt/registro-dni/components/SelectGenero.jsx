import { Field } from "formik";

export const SelectGenero = ({ errors }) => {
    return (
      <>
        <label htmlFor="genero">Genero</label>
        <Field
          className="form-control"
          name="clienteGenero"
          id="genero"
          as="select"
        >
          <option value={""} disabled selected>
            Seleccione Genero...
          </option>
          <option value={"M"}>Masculino</option>
          <option value={"F"}>Femenino</option>
        </Field>
        {errors.clienteGenero && (
          <span id="clientePass-errorMsg" className="form-text text-danger small">
            {`* ${errors.clienteGenero}`}
          </span>
        )}
      </>
    );
  };
  