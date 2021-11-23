import React from "react";
import ReactDOM from "react-dom";
import "./loader.css"
import { LoaderContext } from "./LoaderContext";
const Loader = () => {
  const { showLoader,msj } = React.useContext(LoaderContext);
  return showLoader && ReactDOM.createPortal(
    <div
      className="loader"
      
    >
      Loader!!! Aca va el GIF {msj}
    </div>,
    document.querySelector("#loader-root")
  );
};

export default Loader;