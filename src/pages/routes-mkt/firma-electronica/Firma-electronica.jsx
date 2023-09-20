import React from "react";
import "../../../assets/css/main.css";
import { STEPS } from "components/registro/STEPS-MKT";
import {  useLeadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { statusFirmaSupabase } from "api/StatusFirmaElectronica";
import { useLoaderContext } from "components/loader/LoaderContext";

export default function FirmaElectronica() {
    const { setShowLoader } = useLoaderContext();
    const { setCurrentStep } = useStepAtom();
    const history = useHistory();
    const { lead } = useLeadAtom();

    useEffect(() => {
        let isMounted = true; 
      
        const fetchData = async () => {
          setShowLoader(true);
          try {
            const respStatusFirma = await statusFirmaSupabase({ lead: lead.cuit });
            if (respStatusFirma.response === "SUCCESS") { 
              history.push("/onboarding/prestamo-exitoso");
              setCurrentStep(STEPS.STEP_13_PRESTAMO_EXITOSO);
            } else {
              history.push("/onboarding/error");
              setCurrentStep(STEPS.STEP_99_ERROR);
            }
          } catch (error) {
            console.error(error);
          } finally {
            setShowLoader(false);
          }
        };
      
        const timer = setInterval(() => {
          if (isMounted) {
            fetchData();
          }
        }, 1000 * 30);
      
        return () => {
          isMounted = false; 
          clearInterval(timer); 
        };
      }, []);
      

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
         