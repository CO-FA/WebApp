import React from "react";
import Encabezado from "../components/commons/Encabezado";
import { menuOptions } from "../utils/menuOptionsList";
import NavigationHeader from "../components/commons/NavigationHeader";
import UserProfile from "../components/commons/UserProfile";

export default function PersonalInformation() {
  const optionsToShow = [
    "cambiarMiCelular",
    "cambiarMiEmail",
    "cambiarMiContrasenia",
    "cambiarMiDomicilio",
    "cargarMiCBU",
    "cargarMiTarjeta",
  ];

  return (
    <>
      <Encabezado
        withoutBackButton
        title={
          <NavigationHeader
            title="Modificar mis datos"
            extraContent={<UserProfile />}
          />
        }
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
