import Button from "components/commons/Button";
import Encabezado from "components/commons/Encabezado";
import { Link } from "react-router-dom";

export default function Perfil() {
  return (
    <>
      <Encabezado />
      <h2 className="text-center font-weight-bold mt-4 mb-4">
        Elegi la fecha en la que queres pagar la cuota
      </h2>
      <div className="form-check mt-5 mb-3 ml-3">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          checked
        />
        <label className="form-check-label" for="exampleRadios1">
          Ultimo dia del mes
        </label>
      </div>
      <div className="form-check mb-3 ml-3">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option2"
          checked
        />
        <label className="form-check-label" for="exampleRadios2">
          1er. dia habil del mes
        </label>
      </div>
      <div className="form-check mb-3 ml-3">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option2"
          checked
        />
        <label className="form-check-label" for="exampleRadios3">
          2do. dia habil del mes
        </label>
      </div>
      <div className="form-check mb-3 ml-3">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios3"
          value="option3"
          checked
        />
        <label className="form-check-label" for="exampleRadios4">
          3ero. dia habil del mes
        </label>
      </div>
      <div className="form-check mb-3 ml-3">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios4"
          value="option4"
          checked
        />
        <label className="form-check-label" for="exampleRadios5">
          4to. dia habil del mes
        </label>
      </div>
      <div className="form-check mb-3 ml-3">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios5"
          value="option5"
          checked
        />
        <label className="form-check-label" for="exampleRadios2">
          5to. dia habil del mes
        </label>
      </div>
      <small className="text-center ml-2 d-block">
        La misma se debitará de la Tarjeta de Debito que ingresaste
      </small>
      <Link to="/cargarmiCbu">
        <Button
          className="btn btn-primary cont mt-3"
          disabled={false}
          type="submit"
        >
          Continuar
        </Button>
      </Link>
    </>
  );
}
