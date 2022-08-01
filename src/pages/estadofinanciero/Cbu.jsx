import Button from "components/commons/Button";
import { useModal } from "components/modal/ModalContext";
import React from "react";
import "./cbu.css";

import { ReactComponent as CloseIcon } from "assets/images/close.svg";

export default function Cbu() {
  const { showModal } = useModal();
  return (
    <div className="container bg-green w-100 h-100 cbu-background text-left">
      <div className="d-flex justify-content-end mb-3 mt-3">
        <Button
          className={"text-white"}
          onClick={() => {
            showModal(false);
          }}
        >
          <CloseIcon />
        </Button>
      </div>

      <h3 className="text-white">¿Qué es la CBU y de dónde la saco?</h3>
      <p className="text-white">
        El CBU es un dato de tu cuenta bancaria, está compuesto por 22 dígitos
        que representan tu cuenta bancaria, todos los CBU tienen esa cantidad de
        dígitos, si tiene menos es porque no es el CBU.
      </p>
      <h3 className="text-white">La CBU podés obtenerla de 3 maneras:</h3>
      <p className="text-white">
        1.Ir a cualquier cajero automático
        <ul>
          <li> Introducir la tarjeta débito en el cajero.</li>
        </ul>
        Colocar tu clave.
        <ul>
          <li>
            {" "}
            Cuando ingresás dentro de tu cuenta, tenés que elegir la opción
            “Consultas”.
          </li>
          <li>
            {" "}
            Luego debés elegir la opción “Consulta de CBU” (si tenés más de una
            cuenta deberás seleccionar una de ellas).¡Listo! El cajero te va a
            entregar un ticket con el CBU de tu cuenta bancaria.
          </li>
        </ul>
      </p>
      <p className="text-white">
        2. Por internet, ingresás al Home Banking de tu banco, seleccionás la
        opción detalle de CBU, según cada banco puede variar donde está ubicada
        esta opción.
      </p>
      <p className="text-white">
        3. Ir personalmente a la sucursal de tu banco y pedir un comprobante de
        tu CBU
      </p>
    </div>
  );
}
