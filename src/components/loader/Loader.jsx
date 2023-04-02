import React from "react";
import ReactDOM from "react-dom";
import "./loader.css";
import { LoaderContext } from "./LoaderContext";
import { ReactComponent as IconLoader } from "assets/images/icon-loading.svg";
const Loader = () => {
  const { showLoader, msj } = React.useContext(LoaderContext);
  return (
    showLoader &&
    ReactDOM.createPortal(
      <div className="loader bg-gradient">
        <IconLoader className="anim-loader" />
        <span>{msj}</span>
      </div>,
      document.querySelector("#loader-root")
    )
  );
};

export default Loader;
