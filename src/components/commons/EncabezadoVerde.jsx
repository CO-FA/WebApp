import React from 'react';
import Button from "./Button";

export default function EncabezadoVerde() {
  return (
    <div className="row">
      <div className="bg-gradient d-flex justify-content-end flex-grow-1 py-2 w-100">
        <Button
          className="btn btn-link px-3"
          onClick={() => {
            window.history.back();
          }}
        >
          <svg
          className="text-white"
            width="15"
            height="15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.75 6.25H4.257l4.127-4.11A1.253 1.253 0 0 0 7.497 0c-.333 0-.653.132-.888.367L.356 6.612a1.249 1.249 0 0 0-.262.412 1.248 1.248 0 0 0 0 .95c.06.153.149.293.262.412L6.61 14.63a1.251 1.251 0 0 0 1.776 0 1.25 1.25 0 0 0 0-1.774l-4.127-4.11h9.492A1.251 1.251 0 0 0 15 7.5a1.248 1.248 0 0 0-1.25-1.249z"
              fill="#FFF"
            />
          </svg>
        </Button>
        <h5 className="text-white flex-grow-1 text-center align-self-end">Modificar mis Datos</h5>
        <div className="p-1 text-center">
          <a
            className="btn btn-link px-0 position-relative d-block notif"
            href="http://www.wa.me/54911xxxxxx"
          >
          </a>
        </div>
      </div>
    </div>  
  );
}

