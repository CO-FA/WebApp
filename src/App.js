import {
  HashRouter as Router,
} from "react-router-dom";
import './assets/css/main.css'
import Navigation from "./pages/Navigation";
import {
  LoaderProvider
} from "./components/loader/LoaderContext"

function App() {
  return <LoaderProvider>
    <Router>
      <Navigation />
    </Router> </LoaderProvider>
}

export default App;