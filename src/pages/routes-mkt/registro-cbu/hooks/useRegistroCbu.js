import { suscripcionMobbex } from "api/SuscripcionMobbex";
import { validarCBU } from "api/ValidarCBU";
import { LoaderContext } from "components/loader/LoaderContext";
import { useModal } from "components/modal/ModalContext";
import { STEPS } from "components/registro/STEPS-MKT";
import Cbu from "pages/estadofinanciero/Cbu";
import { useCbuAtom, useIdentidadAtom, useLeadAtom, useStepAtom, useSubscriptionURLAtom } from "pages/atoms/Atoms";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { formErrors } from "utils/constantsErrors";

export const useRegistroCbu = () => {
    const [isContinuarButtonEnabled, setIsContinuarButtonEnabled] = useState(false);
    let { setShowLoader } = React.useContext(LoaderContext);
    const history = useHistory();
    const { setElement } = useModal();
    const { setCurrentStep } = useStepAtom();
    const [cbu, setCbu] = useState();
    const { clienteCbu, setClienteCbu} = useCbuAtom();
    const { identidad } = useIdentidadAtom();
    const { setSubscriptionURL } = useSubscriptionURLAtom();
    const { lead } = useLeadAtom();
    const [errors, setErrors] = useState(false);


    useEffect(() => {
        setElement(<Cbu />);
        return () => setElement(null);
        }, []);

        const submitForm = async (values) => {
        if (errors) {
            return;
        }
        if (!errors) {
            setShowLoader(true);
            setClienteCbu(values.nroCbu)
            try {
            const datosMobbex = await suscripcionMobbex({
                nroDocumento: identidad.cuit,
                idPreaprobado: lead.id_preaprobado,
                returnURL: "http://localhost:8888/#/onboarding/finalizar-suscripcion?nroDocumento=" + identidad.cuit ,
            })
            const subscriptionURLmobbex = Object.values(datosMobbex).join('');
            setSubscriptionURL(subscriptionURLmobbex)
            history.push("/onboarding/mobbex");
            setCurrentStep(STEPS.STEP_7_MOBBEX);
            } catch (error) {
            history.push("/onboarding/error");
            setCurrentStep(STEPS.STEP_99_ERROR);
            console.error(error);
            }
            setShowLoader(false);
        }
    };

    const validateForm = (values) => {
        setCbu(values.nroCbu);
        var errorsAUx = {};
        if (!values.nroCbu) {
          errorsAUx = {
            ...errorsAUx,
            nroCbu: formErrors.CBU_EMPTY,
          };
        } else if (String(values.nroCbu).length < 22) {
          errorsAUx = {
            ...errorsAUx,
            nroCbu: formErrors.CBU_ERROR,
          };
        } else {
          errorsAUx = false;
        }
        setErrors(errorsAUx);
        return errorsAUx;
        
    };

    const validateCBU = async (values) => {
        const validacionCBU = await validarCBU({
          nroDocumento: identidad.cuit,
          idPreaprobado: lead.id_preaprobado,
          CBU: clienteCbu,
          guardarCBU: true,
        });
        if (validacionCBU.status === 'OK') {
            setIsContinuarButtonEnabled(true);
        }else {
          setIsContinuarButtonEnabled(false);
        }
        setCbu(values.nroCbu);

    };

    return {submitForm, validateForm, validateCBU, cbu, isContinuarButtonEnabled, errors}
};