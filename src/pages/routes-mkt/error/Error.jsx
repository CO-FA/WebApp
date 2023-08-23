import React from "react";
import { useError } from "./hooks/useError";
import Button from "components/commons/Button";
import Footer from "components/commons/Footer";

export function Error() {
  const { volver } = useError();

  return (
    <>
      <div className="text-center" style={{
        background: "#FFD233",
        width: "100vw !important",
        height: "100vh",
        padding: "40px",
        marginLeft: "-15px",
        marginRight: "-15px",
      }}
      >
        <h3>En estos momentos no tenemos un préstamo para ofrecerte. </h3>
        <Footer>
          <Button onClick={volver} className="btn btn-light cont">
            VOLVER
          </Button>
        </Footer>
      </div>
    </>
  );
}
