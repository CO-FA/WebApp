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
      
      <Link to="/cargarmiCbu">
        <Button
          className="btn btn-primary cont mt-3"
          disabled={false}
          type="submit"
        >
          CONTINUAR
        </Button>
      </Link>
    </>
  );
}
