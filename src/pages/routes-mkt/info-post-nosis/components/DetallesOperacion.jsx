import React from "react";
import Button from "components/commons/Button";
import { useModal } from "components/modal/ModalContext";
import { ReactComponent as CloseIcon } from "assets/images/close.svg";

export default function DetallesOperacion(){
    const { showModal } = useModal();
    return(
        <div className="container bg-green w-100 h-100 cbu-background text-left">
            <div className="d-flex justify-content-end mb-3 mt-3">
                <Button
                    className={"text-white"}
                    onClick={() => {
                        showModal(false);
                    }}
                    >
                    <CloseIcon />
                </Button>
                <>detalles de la operacion!!</>
            </div>
        </div>
    );
}