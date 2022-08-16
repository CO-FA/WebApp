import Button from "components/commons/Button";
import EncabezadoVerde from "components/commons/EncabezadoVerde";
import Footer from "components/commons/Footer";
import React from "react";
import { ReactComponent as FlechaIcon } from "assets/images/flecha-arriba.svg";
import { Link } from "react-router-dom";

const convertToDate = (dateString) => {
  //  Convert a "dd/MM/yyyy" string into a Date object
  let d = dateString.split("/");
  let dat = new Date(d[2] + "/" + d[1] + "/" + d[0]);
  return dat;
};

const cuotario = [
  {
    Cuota: 1,
    Vto: "13/01/2022",
    Importe: 847.91,
    Estado: "Paga",
  },
  {
    Cuota: 2,
    Vto: "13/02/2022",
    Importe: 847.91,
    Estado: "Paga",
  },
  {
    Cuota: 3,
    Vto: "13/03/2022",
    Importe: 847.91,
    Estado: "Paga",
  },
  {
    Cuota: 4,
    Vto: "13/04/2022",
    Importe: 847.91,
    Estado: "nada",
  },
];

const getStyleCuota = (cuota) => {
  if (cuota.Estado === "Paga") {
    return "text-black";
  }
  //Convertir vencimiento a Date
  console.log(convertToDate(cuota.Vto));
  if (convertToDate(cuota.Vto) < new Date()) {
    return "text-red";
  }

  return "text-yellow";
};

const ItemCuota = ({ cuota }) => {
  const style = getStyleCuota(cuota);

  return (
    <p className={style}>
      Cuota #{cuota.Cuota} | ${cuota.Importe} | {cuota.Vto}
    </p>
  );
};

export default function DetallePrestamo() {
  return (
    <>
      <EncabezadoVerde />
      <div className="row">
        <div className="col mt-3">
          <p className="text-black">Capital: $999.999,99</p>
          <p className="text-black"> Fecha de Otorgamiento: 99/99/9999 </p>
          <p className="text-black"> Plan de Cuotas: 12 </p>

          <Button
            className={
              "w-100 border-top border-bottom d-flex justify-content-center p-3"
            }
          >
            <FlechaIcon />
            <span className="ml-3 text-underline">
              Detalle ( Buscar wording)
            </span>
          </Button>

          <div className="my-3 h-25 overflow-auto">
            {cuotario.map((cuota) => (
              <ItemCuota cuota={cuota} />
            ))}
          </div>

          <Footer>
            <Link to= "/prestamo-pagarcuotas">
              <Button className="btn btn-primary cont mt-2">PAGAR CUOTA</Button>
            </Link>
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
