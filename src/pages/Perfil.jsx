import React from "react";
import EncabezadoPerfil from "../components/commons/EncabezadoPerfil";
import Encabezado from "../components/commons/Encabezado";
import AvisoPerfil from "../components/commons/AvisoPerfil";
import SolicitarPrestamo from "../components/commons/SolicitarPrestamo";
import Button from "../components/commons/Button";
import { Link } from "react-router-dom";
import OfertaPrestamoPerfil from "../components/commons/OfertaPrestamoPerfil";
import { menuOptions } from "../utils/menuOptionsList";
import Acordeon from  "../components/commons/Acordeon"

export default function Perfil() {
  const optionsToShow = [
    "estadoCuenta",
    "modificarDatos",
    "promociones",
    "pagoRecarga",
    "soporte",  
  ];

  return (
    <>
    <div className="col-12 mt-3 border-radius-2.75px" >
      <Encabezado withoutBackButton title={<EncabezadoPerfil />} />
      </div>

      <div className="row profile-container">
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
          
       <Acordeon/>

        </div>
        <div className="col-12 mt-3 w-100 mb-4">
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
