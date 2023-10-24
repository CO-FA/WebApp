import Button from "components/commons/Button";
import EncabezadoVerde from "components/commons/EncabezadoVerde";
import { Dialog } from "components/dialog/Dialog";

import { useState } from "react";
import { useCbu } from "./hooks/useCbu";

import { ItemCbuList } from "./ItemCbuList";

export default function CbuList() {
  const { cbuList, deleteCbu } = useCbu();
  const [open, setOpen] = useState();
  const [cbuABorrar, setCbuABorrar] = useState();

  return (
    <>
      <EncabezadoVerde /> {/* TO DO: titulo Mis CBU/CVU */}
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

      {
        <Dialog
          open={open}
          title={"Eliminar CBU"}
          handleClose={() => {
            setOpen(false);
          }}
        >
          <div className="mb-2">
            <b>{"Estás por borrar el"}</b>
          </div>
          <div className="mb-2">{"CBU: " + cbuABorrar?.cbu}</div>
          <div className="mb-2">{cbuABorrar?.banco}</div>
          <div className="mb-4">{"¿Estás seguro?"}</div>
          <Button
            className={"btn-primary"}
            onClick={() => {
              deleteCbu(cbuABorrar).then(() => {
                setOpen(false);
              });
            }}
          >
            Si, borrar
          </Button>
        </Dialog>
      }
    </>
  );
}
