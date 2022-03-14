import React from "react";
import Encabezado from "../components/commons/Encabezado";

import { menuOptions } from "../utils/menuOptionsList";
import NavigationHeader from "../components/commons/NavigationHeader";

export default function EstadoCuenta() {
  const optionsToShow = ["estadoPrestamo", "estadoSeguro"];

  return (
    <>
      <Encabezado
        withoutBackButton
        title={<NavigationHeader title="Estado de mi cuenta" />}
      />
      <div className="row profile-container">
        <div className="col-12 mt-3">
          {optionsToShow.map((option) => {
            return menuOptions[option];
          })}
        </div>
      </div>
    </>
  );
}
