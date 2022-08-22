import Button from "components/commons/Button";
import EncabezadoVerde from "components/commons/EncabezadoVerde";
import Footer from "components/commons/Footer";
import React from "react";

import { useState } from "react";
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

const ItemCuota = ({ cuota, onChange }) => {
  const style = getStyleCuota(cuota);

  return (
    <div className={"form-group form-check " + style}>
      <input
        onChange={(event) => {
          onChange(cuota, event.currentTarget.checked);
        }}
        type="checkbox"
        className="form-check-input"
        id={cuota.Cuota}
        name={"cuota"}
        value={cuota.Cuota}
      />
      <label className="form-check-label" for={cuota.Cuota}>
        Cuota #{cuota.Cuota} | ${cuota.Importe} | {cuota.Vto}
      </label>
    </div>
  );
};

export default function PagarCuota() {
  const [cuotasSeleccionadas, setCuotasSeleccionas] = useState([]);
  const [valorCuota, setValorCuotas] = useState(0.0);
  const [edit, setEdit] = useState(false);
  const handleOnChange = (item, isSelected) => {
    let auxCuotas = [...cuotasSeleccionadas];
    if (isSelected) {
      auxCuotas.push(item);
    } else {
      auxCuotas = auxCuotas.filter((obj) => {
        return obj.Cuota != item.Cuota;
      });
    }

    sumCuotas(auxCuotas);
    setCuotasSeleccionas(auxCuotas);
  };
  const sumCuotas = (cuotas) => {
    let suma = 0.0;

    cuotas.forEach((cuota) => {
      suma = suma + parseFloat(cuota.Importe);
    });

    setValorCuotas(suma);
  };

  return (
    <>
      <EncabezadoVerde />
      <div className="row">
        <div className="col mt-3">
          <h4 className="d-flex justify-content-center"> Prestamo 2345</h4>
          <p className="w-100 border-top border-bottom d-flex justify-content-center p-3">
            Selecciona la/s cuota/s que quieras pagar o hacé un pago parcial
            editando el monto
          </p>

          <div className="border-bottom my-3 h-25 overflow-auto">
            {cuotario.map((cuota) => (
              <ItemCuota onChange={handleOnChange} cuota={cuota} />
            ))}
          </div>
          <p>
            Monto a pagar: {!edit && valorCuota} 
            {edit && <input type= "number" value={valorCuota} onChange = {(event) => {
              setValorCuotas (event.currentTarget.value)  
            }} />  
            }
            </p>
            <Button onClick= {()=>{
              setEdit(!edit)
            }}className="btn btn-primary cont mt-2">
              Editar 
            </Button>
          
          <Footer>
            <Link to= "/prestamo-pagarcuotas-mediodepago">
            <Button className="btn btn-primary cont mt-2">
              GENERAR LINK DE PAGO
            </Button>
            </Link>
            <Button className="btn cont mt-4">VOLVER</Button>
          </Footer>
        </div>
      </div>
    </>
  );
}
