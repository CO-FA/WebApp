import { Field } from "formik";

export const DiaVencimiento = ({ opcionesDias, errors }) => {
    return (
      <>
        {" "}
        <label htmlFor="diaVencimiento"></label>
        <Field
          className="form-control"
          name="clienteDiaVencimiento"
          id="diaVencimiento"
          as="select"
        >
          <option value={""} disabled selected>
            Seleccione dia vencimiento cuota...
          </option>
          {opcionesDias?.map((opt) => {
            return (
              <option value={opt.id} key={opt.id}>
                {opt.descripcion}
              </option>
            );
          })} 
        </Field>
        {errors.clienteDiaVencimiento && (
          <span id="clientePass-errorMsg" className="form-text text-danger small">
            {`* ${errors.clienteDiaVencimiento}`}
          </span>
        )}
      </>
    );
  };