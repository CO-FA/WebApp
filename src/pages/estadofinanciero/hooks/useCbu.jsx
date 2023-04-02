import { useModal } from "components/modal/ModalContext";
import { useEffect, useState } from "react";

const CbuService = async () => {
  const cbus = [
    {
      cbu: "12342134112341123",
      banco: "Banco Galicia",
    },
    {
      cbu: "12342134112341123",
      banco: "Banco Santander",
    },
    {
      cbu: "12342134112341123",
      banco: "Superville",
    },
  ];
  return cbus;
};

export const useCbu = () => {
  const [cbuList, setCbuList] = useState();

  const deleteCbu = async (cbu, callbackSuccess) => {};

  useEffect(() => {
    CbuService().then((cbus) => setCbuList(cbus));
  }, []);

  return { cbuList, deleteCbu };
};
