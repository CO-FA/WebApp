
import React,{useState} from "react"
import Header from "../components/commons/Header";
import Input from "../components/commons/Input";
import Footer from "../components/commons/Footer";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import Button from "../components/commons/Button";
import { formErrors } from "../utils/constantsErrors";

import RegistroSetps from "../components/registro/RegistroSteps";
import {STEPS} from "../components/registro/constantsSteps"
import {LoaderContext} from "../components/loader/LoaderContext"

export default function RegistroStep4(){
	let { setShowLoader } = React.useContext(LoaderContext);
    const [errors, setErrors] = useState(false);
	const history = useHistory();

	const submitForm = (values, setSubmitting) => {
		setShowLoader(true)
		setTimeout(()=>{
			if (!errors) {
				setShowLoader(false)
				history.push("/validatePhonePIN");
			}
			
		},2000)
		
	};
	const validateForm = values => {
        var errorsAUx={}
		if (!values.clienteCelCodigo) {
		    errorsAUx= {
                	...errorsAUx, clienteCelCodigo: formErrors.CODE_EMPTY
            }
		} else if (String(values.clienteCelCodigo).length < 2) {
			errorsAUx= {
                ...errorsAUx,clienteCelCodigo: formErrors.CODE_PHONE_ERROR,
			}
		} else {
			errorsAUx=false;
		}
        if (!values.clienteCelNumero) {
			errorsAUx={
                ...errorsAUx,
				clienteCelNumero: formErrors.PHONE_EMPTY,
			};
		} else if (String(values.clienteCelNumero).length < 6) {
			errorsAUx={
                ...errorsAUx,
				clienteCelNumero: formErrors.PHONE_ERROR,
			};
		} else {
			errorsAUx = errorsAUx || false ;
		}
        setErrors(errorsAUx)
	};
    return<>
        <Header title={<RegistroSetps current={STEPS.STEP_2_CELULAR} />} />
        <Formik
				initialValues={{ clienteCelCodigo: "", clienteCelNumero: "" }}
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
                                            placeholder="011"
											className="form-control"
											name="clienteCelCodigo"
											errors={[]}
											values={values}
										/>
                    </div>
                    <div className="form-group col-9">
                    <Input
											label="Celular"
                                            placeholder="38913312"
											type="number"
											className="form-control"
											name="clienteCelNumero"
											errors={[]}
											values={values}
										/>
                   
                   
                    </div>
                    <div className="col-12">          
                    {errors['clienteCelCodigo'] && <span id="clienteCelCodigo-errorMsg" className="form-text text-danger small">*{errors['clienteCelCodigo']}</span>}
                    {errors['clienteCelNumero'] && <span id="clienteCelCodigo-errorMsg" className="form-text text-danger small">*{errors['clienteCelNumero']}</span>}
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