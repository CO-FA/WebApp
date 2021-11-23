import React from "react";

const useLoader=() => {
  let [showLoader, setShowLoader] = React.useState(false);
  let [msj, setMsj] = React.useState(false);

  let toggle = () => {
    setShowLoader(!showLoader);
  };

  return { showLoader, toggle, setShowLoader,msj, setMsj };
};
export default useLoader