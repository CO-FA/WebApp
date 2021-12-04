import {useState} from "react"
import Button from "../components/commons/Button"
import {Link} from "react-router-dom"

import Encabezado from "../components/commons/Encabezado";


export default function RegistroStep1(){
    const [acepto,setAcepto] = useState(false)

    

    return (
      <>
        <Encabezado />
        <section>
          <div className="row text-center h-100">
            <div className="col-12 centered-info">
              <h1>¿Empezamos?</h1>
              <p>Creá tu cuenta en pocos pasos</p>
            </div>
          </div>
        </section>
        <footer>
          <div className="row text-center">
            <div className="col-12 mt-5">
              <form className="form-signin">
                <div className="custom-control custom-checkbox px-0">
                  <input
                    id="acepto"
                    type="checkbox"
                    className="custom-control-input"
                    onChange={() => {
                      setAcepto(!acepto);
                    }}
                  />
                  <label className="custom-control-label" htmlFor="acepto">
                    <span className="text-secondary d-inline-block">
                      Acepto los términos y condiciones
                    </span>
                  </label>
                  <small className="ml-2 d-block">
                    Al aceptar declaro ser mayo de 18 años
                  </small>
                </div>
                <Link to="/terminos">
                  <Button
                    className="btn btn-primary mt-3"
                    disabled={!acepto}
                    id="registrarme"
                  >
                    REGISTRARME
                  </Button>
                </Link>
              </form>
            </div>
          </div>
        </footer>
      </>
    );
}