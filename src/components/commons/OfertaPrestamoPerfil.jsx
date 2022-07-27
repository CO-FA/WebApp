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
    <div class="align-items-center justify-content-between py-3 w-100 d-flex border borderRadius-1 greenBackground text-center">
      <div class="row">
        <div class="col-12">
          <h4 class="text-white bold">{textHeader}</h4>
        </div>
        <div class="col-12">
          <h4 class="text-white bold">{text}</h4>
        </div>
        <div class="col-12 mt-3">
          <h2 class="text-white bold">[[ $ {importe} ]]</h2>
        </div>
        <div class="col-12 mt-3">
          <Link to={buttonLink}>
            <Button
              className="btn btn-light button-rounded p-3 shadow"
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
