import { getNombreBanco } from "api/NombreBanco";
import { useEffect } from "react";
import { useState } from "react";

export const useFindBanco = ({ cbu }) => {
  const [banco, setBanco] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (cbu?.length > 5) {
      setLoading(true);
      getNombreBanco({ cbu }).then((response) => {
        setBanco(response.data);
        setLoading(false);
      });
    }
  }, [cbu]);

  return { banco, loading };
};

