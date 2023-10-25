import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function OfertaPrestamoPerfil({
  text,
  importe,
  buttonText,
  buttonLink,
  textHeader,
}) {
  return (
    <div className="align-items-center justify-content-between py-3 w-100 d-flex border borderRadius-1 greenBackground text-center">
      <div className="row">
        <div className="col-12">
          <h4 className="text-white bold">{textHeader}</h4>
        </div>
        <div className="col-12">
          <h4 className="text-white bold">{text}</h4>
        </div>
        <div className="col-12 mt-3">
          <h2 className="text-white bold">[[ $ {importe} ]]</h2>
        </div>
        <div className="col-12 mt-3">
          <Link to={buttonLink}>
            <Button
              classNameName="btn btn-light button-rounded p-3 shadow"
              disabled={false}
              type="button"
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
