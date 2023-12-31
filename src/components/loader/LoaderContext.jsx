import React from "react";
import useLoader from "./useLoader";
import Loader from "./Loader";

let LoaderContext;
let { Provider } = (LoaderContext = React.createContext());

export const useLoaderContext = () => {
  return React.useContext(LoaderContext);
};

let LoaderProvider = ({ children }) => {
  let { showLoader, toggle, setShowLoader, msj, setMsj } = useLoader();
  return (
    <Provider value={{ showLoader, toggle, setShowLoader, msj, setMsj }}>
      <Loader />
      {children}
    </Provider>
  );
};

export { LoaderContext, LoaderProvider };
