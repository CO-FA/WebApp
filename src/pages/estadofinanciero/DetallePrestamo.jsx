import Button from "components/commons/Button";
import EncabezadoVerde from "components/commons/EncabezadoVerde";
import Footer from "components/commons/Footer";
import React from "react";

export default function Prestamo2545() {
  return (
    <>
      <EncabezadoVerde />
      <div className="row profile-container">
        <div className="container mt-3">
          <p className="text-black">Capital: $999.999,99</p>
          <p className="text-black"> Fecha de Otorgamiento: 99/99/9999 </p>
          <p className="text-black"> Plan de Cuotas: 12 </p>
          <svg
            width="328"
            height="1"
            viewBox="0 0 328 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4.37114e-08"
              y1="0.5"
              x2="328"
              y2="0.500029"
              stroke="#BDBDBD"
            />
          </svg>

          <div className="row align-self-center">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.51077 12.8203L9.51074 5.72702L10.5611 5.72702L10.5611 12.8203L9.51077 12.8203Z"
                fill="#353A40"
              />
              <path
                d="M14.5141 9.48308L13.7706 10.2266L10.0295 6.47369L6.28841 10.2266L5.54492 9.48308L10.0295 4.99848L14.5141 9.48308Z"
                fill="#353A40"
              />
              <path
                d="M19.5299 9.49994C19.5299 14.7398 15.2695 19 10.0298 19C4.79016 19 0.529785 14.7396 0.529785 9.49994C0.529785 4.26027 4.79016 -0.00011272 10.0298 -0.000112949C15.2695 -0.000113178 19.5299 4.26027 19.5299 9.49994ZM1.56778 9.49994C1.56778 14.1615 5.3561 17.9615 10.0293 17.9615C14.7025 17.9615 18.4908 14.1731 18.4908 9.49994C18.4908 4.82674 14.7025 1.03843 10.0293 1.03843C5.3561 1.03843 1.56778 4.83856 1.56778 9.49994Z"
                fill="#353A40"
              />
            </svg>

            <p>
              <a href="/" className="text-underline">
                Detalle ( Buscar wording)
              </a>
            </p>
          </div>

          <svg
            width="328"
            height="1"
            viewBox="0 0 328 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4.37114e-08"
              y1="0.5"
              x2="328"
              y2="0.500029"
              stroke="#BDBDBD"
            />
          </svg>
          <p className="text-black">Cuota #1| $999.999,99 | $999.999,99</p>
          <p className="text-red">Cuota #2| $999.999,99 | $999.999,99</p>
          <p className="text-red">Cuota #3| $999.999,99 | $999.999,99</p>
          <p className="text-black">Cuota #4| $999.999,99 | $999.999,99</p>
          <p className="text-black">Cuota #5| $999.999,99 | $999.999,99</p>
          <p className="text-black">Cuota #6| $999.999,99 | $999.999,99</p>
          <Footer>
            <Button className="btn btn-primary cont mt-2">PAGAR CUOTA</Button>
            <Button className="btn btn-primary cont mt-4">
              CANCELAR PRESTAMO
            </Button>
            <Button className="btn btn-primary cont mt-4">
              REFINANCIAR PRESTAMO
            </Button>
          </Footer>
        </div>
      </div>
    </>
  );
}
