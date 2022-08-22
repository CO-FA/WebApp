import Button from "components/commons/Button";
import EncabezadoVerde from "components/commons/EncabezadoVerde";
import Footer from "components/commons/Footer";

export default function DetallePrestamo() {
  return (
    <>
      <EncabezadoVerde />
      <div className="row">
        <div className="col mt-3">
          <p className="text-black">Capital: $999.999,99</p>
          <p className="text-black"> Fecha de Otorgamiento: 99/99/9999 </p>
          <p className="text-black"> Plan de Cuotas: 12 </p>
          <Footer>
            <Button className="btn btn-primary cont mt-4">
              CANCELAR PRESTAMO
            </Button>
            <Button className="btn btn-primary cont mt-4">
              REFINANCIAR PRESTAMO
            </Button>
          </Footer>
        </div>
      </div>
    </>
  );
}
