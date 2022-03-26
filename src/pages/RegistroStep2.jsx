
import Button from "../components/commons/Button"
import {Link} from "react-router-dom"
import Encabezado from "../components/commons/Encabezado";
import Terminos from "../components/registro/Terminos";
//import { useToken } from "api/hooks/useToken";
import { useIpAddress } from "api/hooks/useIpAddress";

export default function RegistroStep2(){
    //const {token} = useToken(); 
    const {ip} = useIpAddress()
    console.log(ip)
    //console.log("TOKEN",token,ip);

    return (
      <>
        <Encabezado title="Términos y condiciones" />
        <section className="overflow-auto mh-75 d-inline-block">
          <Terminos />
        </section>
        <footer>
          <div className="row text-center">
            <div className="col-12">
              <form className="form-signin mt-2">
                <Link to="/documento">
                  <Button className="btn btn-primary">Acepto</Button>
                </Link>
              </form>
            </div>
          </div>
        </footer>
      </>
    );
}