import { Field } from "formik";

export const SelectSituacionLaboral = ({ opciones, errors }) => {
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