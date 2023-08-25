import React from "react";
import { useError } from "./hooks/useError";
import Button from "components/commons/Button";
import Footer from "components/commons/Footer";
import "../../../assets/css/main.css"

export function Error() {
  const { volver } = useError();

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center"
      style={{
        background: "#FFD233",
        width: "100vw !important",
        height: "100vh",
        padding: "40px",
        marginLeft: "-15px",
        marginRight: "-15px",
      }}
      >
        <h3 className="text-center" style={{marginTop:"30vh" }}>En estos momentos no tenemos un préstamo para ofrecerte. </h3>
        <div style={{ flex: 1 }}></div>
        <Footer>
          <Button onClick={volver} className="btn btn-light cont shadow">
            VOLVER
          </Button>
        </Footer>
      </div>
    </>
  );
}
