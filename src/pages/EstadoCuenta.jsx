import React from "react";
import EncabezadoPerfil from "../components/commons/EncabezadoPerfil";
import Encabezado from "../components/commons/Encabezado";
import AvisoPerfil from "../components/commons/AvisoPerfil";
import SolicitarPrestamo from "../components/commons/SolicitarPrestamo";
import Button from "../components/commons/Button";
import { Link } from "react-router-dom";
import OfertaPrestamoPerfil from "../components/commons/OfertaPrestamoPerfil";
import { menuOptions } from "../utils/menuOptionsList";
import NavigationHeader from "../components/commons/NavigationHeader";
import UserProfile from "../components/commons/UserProfile";

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
