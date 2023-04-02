import Button from "components/commons/Button";
import "./modal.css";
import { ReactComponent as CloseIcon } from "assets/images/close.svg";
import { useState } from "react";
import { useEffect } from "react";

export const Dialog = ({ open, children, title, handleClose }) => {
  const [show, setShow] = useState(open);

  useEffect(() => {
    setShow(open);
  }, [open]);

  if (!show) {
    return null;
  }

  return (
    <>
      <div className="dialog-background">
        <div className="dialog">
          <div className="title">
            <span>{title}</span>
            <Button
              onClick={() => {
                if (handleClose) handleClose();
              }}
            >
              <CloseIcon style={{ fill: "#333", zoom: 0.8 }} />
            </Button>
          </div>
          <div className="dialog-body">{children}</div>
        </div>
      </div>
    </>
  );
};
