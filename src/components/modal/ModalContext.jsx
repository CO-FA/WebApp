import { useState, createContext, useContext } from "react";

import "./modal.css";

let ModalContext;
let { Provider } = (ModalContext = createContext());

let ModalProvider = ({ children }) => {
  const [show, showModal] = useState(false);
  const [element, setElement] = useState(false);

  return (
    <Provider value={{ showModal, setElement, show }}>
      {children}
      {show && <div className="modal-app">{element}</div>}
    </Provider>
  );
};

export { ModalProvider };

export const useModal = () => {
  return useContext(ModalContext);
};
