import Button from "components/commons/Button";
import EncabezadoVerde from "components/commons/EncabezadoVerde";

import { useEffect, useState } from "react";
import { useCbu } from "./hooks/useCbu";

import { ItemCbuList } from "./ItemCbuList";

const Dialog = () => {};

export default function CbuList() {
  const { cbuList, deleteCbu } = useCbu();
  const [open, setOpen] = useState();
  const [cbuABorrar, setCbuABorrar] = useState();

  return (
    <>
      <EncabezadoVerde />
      <ul className="list-group list-group-flush">
        {(cbuList || []).map((cbu) => {
          return (
            <ItemCbuList
              cbu={cbu}
              key={cbu}
              borrarItem={(cbu) => {
                setCbuABorrar(cbu);
                setOpen(true);
              }}
            />
          );
        })}
      </ul>
      {/* <Dialog open>
        <Dialog.body>{"Desea borrar el cbu " + cbuABorrar}</Dialog.body>
        <Button
          onClick={() => {
            deleteCbu(cbuABorrar).then(() => {
              setOpen(false);
            });
          }}
        >
          Si, borrar
        </Button>
      </Dialog> */}
    </>
  );
}
