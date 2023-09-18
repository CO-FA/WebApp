import { STEPS } from "components/registro/STEPS-MKT";
import {  useLeadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { statusFirmaSupabase } from "api/StatusFirmaElectronica";
import { useLoaderContext } from "components/loader/LoaderContext";

export const useFirmaElectronica = () => {
    const { setShowLoader } = useLoaderContext();
    const { setCurrentStep } = useStepAtom();
    const history = useHistory();
    const { lead } = useLeadAtom();

    useEffect(() => {
      const fetchData = async () => {
        setShowLoader(true);
        try {
          await statusFirmaSupabase({ lead: lead.cuit });
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
      
      const timer = setInterval(function() 
      {
        fetchData();
      }, 1000*30)

      return function() {
        clearInterval(timer);
      };
    }, []);
};