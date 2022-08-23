import Button from "components/commons/Button";
import EncabezadoVerde from "components/commons/EncabezadoVerde";
import Footer from "components/commons/Footer";
import { Link } from "react-router-dom";

export default function DetallePrestamo() {
  return (
    <>
      <EncabezadoVerde />
      <div className="container w-100 h-100 text-left">
        <p className="col-7 container text-center">
          Medios de pagos habilitados para la cancelacion de su deuda
        </p>

        <div className="col mt-3">
          <h6> RAPIPAGO</h6>

          <p>Presentarse en cualquier local y :</p>
          <ul>1-Mencionar que realizara un pago</ul>
          <ul>2-Dicho pago sera a favor de ""</ul>
          <ul>3-Informe su codigo numerico:</ul>
          <ul>4-Indique ($) importe a pagar</ul>

          <h6> PAGO FACIL</h6>
          <p> En caso de incoveniente con la lectura del codigo
           de barras digitar el siguiente numero 
          </p>
          <h6> MERCADO PAGO</h6>
          <p> A través de la opción "Pago de Servicios", Empresa, Codigo </p>
          <Footer>

            <Link to="/informe-pago">
            <Button className="btn btn-primary cont mt-4">
              INFORMAR UN PAGO
            </Button>
            </Link>
            <Button className="btn btn-primary cont mt-4">VOLVER</Button>
          </Footer>
        </div>
      </div>
    </>
  );
}
