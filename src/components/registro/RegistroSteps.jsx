import React from "react";
import { STEPS } from "./STEPS-MKT";

export default function RegistroSetps({ current = 1 }) {
  return (
    <div className="row">
      <div className="col-12">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-between">
            <li
              className={
                "breadcrumb-item " +
                ((current === STEPS.STEP_1_DNI ||
                  current === STEPS.STEP_2_IDENTIDAD) &&
                  "active")
              }
            >
              DNI
            </li>
            <li
              className={
                "breadcrumb-item " +
                (current === STEPS.STEP_3_CELULAR && "active")
              }
            >
              <p>Validar Celular</p>
            </li>
            <li
              className={
                "breadcrumb-item " +
                (current === STEPS.STEP_4_PRESTAMO && "active")
              }
            >
              <p>Solicitar Préstamo</p>
            </li>
            <li
              className={
                "breadcrumb-item " +
                (current === STEPS.STEP_5_CLAVE && "active")
              }
              aria-current="page"
            >
              <p>Contraseña</p>
            </li>
            <li
              className={
                "breadcrumb-item " +
                (current === STEPS.STEP_8_VALIDAR_EMAIL && "active")
              }
              aria-current="page"
            >
              <p>Validar Mail</p>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
