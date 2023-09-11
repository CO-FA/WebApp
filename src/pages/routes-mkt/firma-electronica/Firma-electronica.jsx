import React from "react";
import "../../../assets/css/main.css";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import {  useLeadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { statusFirmaSupabase } from "api/StatusFirmaElectronica";
import { Formik } from "formik";

export default function FirmaElectronica() {
    /* let { setShowLoader } = React.useContext(LoaderContext);
    const { setCurrentStep } = useStepAtom();
    const [errors, setErrors] = useState(false);
    const history = useHistory();
    const { lead } = useLeadAtom();

    useEffect(() => {
      const fetchData = async () => {
        setShowLoader(true);
        try {
          await statusFirmaSupabase({ lead });
          history.push("/onboarding/prestamo-exitoso");
          setCurrentStep(STEPS.STEP_13_PRESTAMO_EXITOSO);
        } catch (error) {
          history.push("/onboarding/error");
          setCurrentStep(STEPS.STEP_99_ERROR);
          console.error(error);
        } finally {
          setShowLoader(false);
        }
      };
    
      fetchData();
    }, []);
       */

    return(
        <div className="bg-gradient d-flex justify-content-center align-items-center" 
            style={{
                width: "100vw !important",
                height: "100vh",
                padding: "40px",
                marginLeft: "-15px",
                marginRight: "-15px",
            }} >
                <div className="col-12 text-center">
                    <h3>Esperando tu firma electronica...</h3>
                </div>
        </div>
    );
}; 
         