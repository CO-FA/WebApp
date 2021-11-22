
import Button from "../components/commons/Button"
import {Link} from "react-router-dom"
import Header from "../components/commons/Header";
import Terminos from "../components/registro/Terminos";

export default function RegistroStep2(){
    return (
			<>
				<Header title="Términos y condiciones" />
				<section>
					<Terminos/>
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