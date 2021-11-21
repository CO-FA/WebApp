import React from "react";
import Input from "../components/commons/Input";
import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";
import { Link } from "react-router-dom";

export default function OlvidePasswordStep2() {
	return (
		<>
			<Header />
			<section>
				<form class="pt-3">
					<h3>Ingresá el código</h3>
					<div class="row">
						<div class="form-group col-12">
							<Input
								label="PIN"
								type="number"
								className="form-control"
								name="clientePin"
								maxlength="8"
								error="PIN incorrecto"
							/>
						</div>
						<div class="col-12">
							<p class="mt-3 text-center">
								Si no te llegó el correo fijate en SPAM ó correos no deseados.
								<a class="mt-3 d-block text-underline" href="#">
									Reenviarme Email
								</a>
							</p>
						</div>
					</div>
				</form>
			</section>

			<Footer>
				<div class="col-12">
					<Link to="/newPassword">
						<button class="btn btn-primary cont" type="submit" disabled="">
							Continuar
						</button>
					</Link>
				</div>
			</Footer>
		</>
	);
}
