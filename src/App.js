import { HashRouter as Router } from "react-router-dom";
import "./assets/css/main.css";
//import Navigation from "./pages/Navigation";

import { LoaderProvider } from "./components/loader/LoaderContext";
import { ModalProvider } from "components/modal/ModalContext";
import { RoutesMkt } from "./pages/routes-mkt/RoutesMkt";

function App() {
  return (
    <LoaderProvider>
      <ModalProvider>
        <Router>
          <RoutesMkt />
        </Router>
      </ModalProvider>
    </LoaderProvider>
  );
}

export default App;
