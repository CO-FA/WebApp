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
					<h3>¡Último paso!</h3>
					<div class="row">
						<div class="form-group col-12">
							<Input
								label="Ingresá tu contraseña alfanumérica"
								name="clientePass"
								id="clientePass"
								className="form-control border-right-0"
								type="password"
								pattern="/^[a-z]{4}\d{4}$/i"
								maxlength="8"
								showPasswordButton
							/>
						</div>
						<div class="form-group col-12">
							<Input
								label="Repetí tu contraseña alfanumérica"
								name="clientePassConfirm"
								className="form-control border-right-0"
								type="password"
								required=""
								maxlength="8"
								showPasswordButton
							/>
						</div>
						<div class="col-12">
							<ul>
								<li class="mt-3">
									Tu contraseña debe tener 8 caracteres que contengan 4 letras y
									4 números.{" "}
								</li>
								<li class="mt-3">Ejemplo: mica2010</li>
							</ul>
						</div>
					</div>
				</form>
			</section>

			<Footer>
				<div class="col-12">
					<Link to="/login">
						<button class="btn btn-primary cont" type="submit" disabled="">
							Continuar
						</button>
					</Link>
				</div>
			</Footer>
		</>
	);
}
