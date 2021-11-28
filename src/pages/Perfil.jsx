import React from "react";
import EncabezadoPerfil from "../components/commons/EncabezadoPerfil";
import Header from "../components/commons/Header";
import AvisoPerfil from "../components/commons/AvisoPerfil";
import SolicitarPrestamo from "../components/commons/SolicitarPrestamo";
import Button from "../components/commons/Button";
import { Link } from "react-router-dom";
import OfertaPrestamoPerfil from "../components/commons/OfertaPrestamoPerfil";
import { menuOptions } from "../utils/menuOptionsList";

export default function Perfil() {
  const optionsToShow = [
    "estadoCuenta",
    "modificarDatos",
    "promociones",
    "soporte",
  ];

  return (
    <>
      <Header withoutBackButton title={<EncabezadoPerfil />} />
      <div className="row">
        <div className="col-12 mt-3">
          <OfertaPrestamoPerfil
            textHeader="Tenés un Préstamo "
            text="Aprobado de"
            importe="100.000"
            buttonText="QUIERO MI PRÉSTAMO"
            buttonLink="#"
          />
        </div>
        <div className="col-12 mt-3">
          <AvisoPerfil text="Tu cuenta está incompleta" />
        </div>
        <div className="col-12 mt-3">
          <SolicitarPrestamo text="Solicitar un préstamo" />
        </div>
        <div className="col-12 mt-3">
          {optionsToShow.map((option) => {
            return menuOptions[option];
          })}
        </div>
        <div className="col-12 mt-3 w-100">
          <Link to="/home">
            <Button
              className="btn btn-light button-rounded p-3 border"
              disabled={false}
              type="button"
            >
              Cerrar Sesión
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
