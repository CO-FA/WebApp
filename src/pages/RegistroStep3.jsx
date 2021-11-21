import React, { useState } from "react";
import Input from "../components/commons/Input";
import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import Button from "../components/commons/Button";
import { formErrors } from "../utils/constantsErrors";
import RegistroSetps from "../components/registro/RegistroSteps";
import SelectorGenero from "../components/registro/SelectorGenero";

export default function RegistroStep3() {
	const [errors, setErrors] = useState(false);
	const history = useHistory();

	const submitForm = (values, setSubmitting) => {
		if (!errors) {
			history.push("/login");
		}
	};
	const validateForm = values => {
		debugger;
		if (!values.clienteDocNumero) {
			setErrors({
				clienteDocNumero: formErrors.DOCUMENT_EMPTY,
			});
		} else if (String(values.clienteDocNumero).length !== 8) {
			setErrors({
				clienteDocNumero: formErrors.DOCUMENT_LENGTH,
			});
		} else if (!values.clienteGender) {
			setErrors({
				clienteGender: formErrors.GENDER_EMPTY,
			});
		} else {
			setErrors(false);
		}
	};

	return (
		<>
			<Header title={<RegistroSetps />} />
			<Formik
				initialValues={{ clienteDocNumero: "", clienteGender: "" }}
				onSubmit={(values, { setSubmitting }) =>
					submitForm(values, setSubmitting)
				}
				validate={values => validateForm(values)}
			>
				{({
					values,
					handleSubmit,
					/* and other goodies */
				}) => (
					<>
						<section>
							<form class="pt-3">
								<div class="row">
									<div class="form-group col-12">
										<Input
											label="Nro DNI"
											type="number"
											className="form-control"
											name="clienteDocNumero"
											errors={errors}
											values={values}
										/>
									</div>
								</div>
								<div class="btn-group-toggle" data-toggle="buttons">
									<SelectorGenero values={values} errors={errors} />
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
