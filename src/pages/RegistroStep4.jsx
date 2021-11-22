
import {useState} from "react"
import Header from "../components/commons/Header";
import Input from "../components/commons/Input";
import Footer from "../components/commons/Footer";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import Button from "../components/commons/Button";
import { formErrors } from "../utils/constantsErrors";

import RegistroSetps from "../components/registro/RegistroSteps";
import {STEPS} from "../components/registro/constantsSteps"

export default function RegistroStep4(){
    const [errors, setErrors] = useState(false);
	const history = useHistory();

	const submitForm = (values, setSubmitting) => {
		if (!errors) {
			history.push("/validatePhone");
		}
	};
	const validateForm = values => {
		
	};
    return<>
        <Header title={<RegistroSetps current={STEPS.STEP_2_CELULAR} />} />
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
                <h3>Vamos a validar el celular</h3>
                <div className="row">        
                    <div className="form-group col-3">
                    <Input
											label="Cód"
											type="number"
											className="form-control"
											name="clienteCelCodigo"
											errors={errors}
											values={values}
										/>
                    </div>
                    <div className="form-group col-9">
                    <Input
											label="Celular"
											type="number"
											className="form-control"
											name="clienteCelNumero"
											errors={errors}
											values={values}
										/>
                   
                   
                    </div>
                    <div className="col-12">          
                    <span id="clienteCelCodigo-errorMsg" className="form-text text-danger small"></span>
                    <span id="clienteCelNumero-errorMsg" className="form-text text-danger small"></span>
                    </div>
                </div>
                </section>

                <Footer>
                    <div className="col-12">
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
}