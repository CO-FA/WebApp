import { useState, createContext, useContext } from "react";

let DialogContext;
let { Provider } = (DialogContext = createContext());

let DialogProvider = ({ children }) => {
  const [show, showDialog] = useState(false);
  const [element, setElement] = useState(false);

  return (
    <Provider value={{ showDialog, setElement, show }}>
      {children}
      {show && <div className="Dialog-app">{element}</div>}
    </Provider>
  );
};

export { DialogProvider };

export const useDialog = () => {
  return useContext(DialogContext);
};
