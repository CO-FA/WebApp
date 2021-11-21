import React from "react";
import Button from "../components/commons/Button";
import Input from "../components/commons/Input";
import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";

import { Link } from "react-router-dom";

export default function Login() {
	return (
		<>
			<Header />
			<section>
				<form class="js-check-form pt-3" id="dni-form" novalidate>
					<h3>Ingresar</h3>
					<div class="row">
						<div class="form-group col-12">
							<Input
								label="Ingresá tu usuario (email o nro. de DNI)"
								id="clienteUsuario"
								type="text"
								className="form-control"
								name="clienteUsuario"
								error="El usuario es incorrecto"
							/>
						</div>

						<div class="form-group col-12">
							<Input
								label="Ingresá tu contraseña"
								name="clientePass"
								id="clientePass"
								className="form-control border-right-0"
								type="password"
								pattern="/^[a-z]{4}\d{4}$/i"
								showPasswordButton
								error="La contraseña es incorrecta"
								maxLength={8}
							/>
						</div>
						<div class="col-12">
							<p class="text-center mt-4">
								<Link to="/forgotPassword">
									<a href="#">Olvidé mi contraseña</a>
								</Link>
							</p>
						</div>
					</div>
				</form>
			</section>
			<Footer>
				<form className="form-signin">
					<Link to="/forgotPassword">
						<Button className="btn btn-primary mt-3" id="registrarme">
							Continuar
						</Button>
					</Link>
				</form>
			</Footer>
		</>
	);
}
