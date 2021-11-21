import React from "react";
import Input from "../components/commons/Input";
import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";
import { Link } from "react-router-dom";

export default function OlvidePasswordStep1() {
	return (
		<>
			<Header />
			<section>
				<form class="pt-3">
					<h3>Recuperar mi contraseña</h3>
					<div class="row">
						<div class="form-group col-12">
							<Input
								label="Ingresá tu Email"
								type="email"
								className="form-control"
								name="clienteEmail"
								error="Email Incorrecto"
							/>
						</div>
						<div class="col-12">
							<p class="mt-3 text-center">
								Te vamos a enviar un email con un código de activación de 4
								dígitos
							</p>
						</div>
					</div>
				</form>
			</section>

			<Footer>
				<div class="col-12">
					<Link to="/emailCode">
						<button class="btn btn-primary cont" type="submit" disabled="">
							Continuar
						</button>
					</Link>
				</div>
			</Footer>
		</>
	);
}
