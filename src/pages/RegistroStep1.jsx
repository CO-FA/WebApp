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
            <div className="col-12 d-flex aligns-items-center justify-content-center flex-column ">
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
                    
                <Link to="/terminos" className="text-secondary d-inline-block">
                    <span >
                      Acepto los términos y condiciones
                    </span>
                </Link>

                  </label>
                  <small className="ml-2 d-block">
                    Al aceptar declaro ser mayo de 18 años
                  </small>
                </div>
                <Link to="/documento">
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