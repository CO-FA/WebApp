import Button from "components/commons/Button";
import React from "react";
import "./sinPrestamo.css";
import { ReactComponent as Martillo } from "assets/images/martillo.svg";

export default function SinPrestamo() {
  return (
    <div className="container bg-green w-100 h-100 sinPrestamo-background text-center">
        <Martillo />
        
      <p className="text-white mt-5">
        Estimado Cliente: 
      </p>
      <p className="text-white">
        Usted no puede acceder a los datos de su préstamo por
        encontrarse en una instancia jucicial
      </p>
    </div>
  );
}
