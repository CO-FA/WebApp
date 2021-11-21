import React, { useState } from "react";
import Input from "../components/commons/Input";
import Button from "../components/commons/Button";
import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import {  formErrors  } from "../utils/constantsErrors";

export default function OlvidePasswordStep2() {
	const [errors, setErrors] = useState(false);
	const history = useHistory();

	const submitForm = (values, setSubmitting) => {
		if (!errors) {
			history.push("/newPassword");
		}
	};
	const validateForm = values => {
		if (!values.clientePin) {
			setErrors({ clientePin: formErrors.CODE_EMPTY });
		} else if (String(values.clientePin).length !== 4) {
			setErrors({ clientePin: formErrors.CODE_LENGTH });
		} else {
			setErrors(false);
		}
	};

	return (
		<>
			<Header />
			<Formik
				initialValues={{ clientePin: "" }}
				onSubmit={(values, { setSubmitting }) =>
					submitForm(values, setSubmitting)
				}
				validate={values => validateForm(values)}
			>
				{({
					values,
					handleChange,
					handleSubmit,
					/* and other goodies */
				}) => (
					<>
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
											errors={errors}
											values={values}
											maxLength="1"
										/>
									</div>
									<div class="col-12">
										<p class="mt-3 text-center">
											Si no te llegó el correo fijate en SPAM ó correos no
											deseados.
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
								<Button
									className="btn btn-primary cont"
									disabled={false}
									type="submit"
									onClick={handleSubmit}
								>
									Continuar
								</Button>
							</div>
						</Footer>
					</>
				)}
			</Formik>
		</>
	);
}
