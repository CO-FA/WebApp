import {useState} from "react"
import Button from "../components/commons/Button"
import {Link} from "react-router-dom"

export default function RegistroStep1(){
    const [acepto,setAcepto] = useState(false)

    

    return <>
    <header>
    <Button  className="btn btn-link px-0" onClick={()=>{
        window.history.back();
    }}><svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.75 6.25H4.257l4.127-4.11A1.253 1.253 0 0 0 7.497 0c-.333 0-.653.132-.888.367L.356 6.612a1.249 1.249 0 0 0-.262.412 1.248 1.248 0 0 0 0 .95c.06.153.149.293.262.412L6.61 14.63a1.251 1.251 0 0 0 1.776 0 1.25 1.25 0 0 0 0-1.774l-4.127-4.11h9.492A1.251 1.251 0 0 0 15 7.5a1.248 1.248 0 0 0-1.25-1.249z" fill="#353535"/></svg></Button>    
  </header>
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
            <input id="acepto" type="checkbox" className="custom-control-input" onChange={()=>{
                setAcepto(!acepto)
            }}/>
            <label className="custom-control-label" htmlFor="acepto"><span className="text-secondary d-inline-block">Acepto los términos y condiciones</span></label>
            <small className="ml-2 d-block">Al aceptar declaro ser mayo de 18 años</small>
          </div>
          <Link to="/terminos">
          <Button className="btn btn-primary mt-3" 
            disabled={!acepto}
            id="registrarme">REGISTRARME</Button>
        </Link>
        </form>
      </div>
    </div>
  </footer>
  </>
}