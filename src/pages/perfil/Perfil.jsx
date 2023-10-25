import React from "react";
import EncabezadoPerfil from "../../components/commons/EncabezadoPerfil";
import Encabezado from "../../components/commons/Encabezado";
import AvisoPerfil from "../../components/commons/AvisoPerfil";
import Menu from "../../components/commons/Acordeon";

export default function Perfil() {
  return (
    <>
      <Encabezado withoutBackButton title={<EncabezadoPerfil />} />

      <div className="row profile-container">
        <div className="col-12 mt-3">
          {/* <OfertaPrestamoPerfil
            textHeader="Tenés un Préstamo "
            text="Aprobado de"
            importe="100.000"
            buttonText="QUIERO MI PRÉSTAMO"
            buttonLink="#"
          /> */}
        </div>
        <div className="col-12 mt-3">
          <Menu />
        </div>
        <div className="col-12 mt-3">
          <AvisoPerfil text="Tu cuenta está incompleta" />
        </div>
      </div>
    </>
  );
}
