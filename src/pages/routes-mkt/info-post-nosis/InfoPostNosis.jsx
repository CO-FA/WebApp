import React from "react";
import Button from "components/commons/Button";
import { Formik, Form } from "formik";
import { useCbuAtom, useDiaVencimientoAtom, useEmailAtom, usePrestamoAtom } from "../../atoms/Atoms";
import { useFindBanco } from "../registro-cbu/hooks/useFindBanco";
import Encabezado from "components/commons/Encabezado";
import Footer from "components/commons/Footer";
import { useInfoPostNosis } from "./hooks/useInfoPostNosis";
import "../../../assets/css/main.css";

export function InfoPostNosis() {
  const { monto, cuota, montoCuota } = usePrestamoAtom();
  const { clienteCbu } = useCbuAtom();
  const { banco } = useFindBanco({ cbu: clienteCbu });
  const { submitForm } = useInfoPostNosis();
  const { diaVencimiento } = useDiaVencimientoAtom();
  const { email } = useEmailAtom();

  return (
    <>
      <Encabezado />
      <Formik
        initialValues={{}} 
        onSubmit={submitForm}
      >
        {() => (
          <Form>
            <section>
              <h2>¡Tu prestamo está aprobado!</h2>
              <br></br>
              <h3>Revisá y confirmá</h3>
              <div className="row profile-container">
                <div className="form-group col-12">
                  <p>Estás pidiendo un préstamo de ${monto}</p>
                  <p>
                    A devolver en {cuota} cuotas de ${montoCuota} <br />
                    <b> con vencimiento primera cuota el {diaVencimiento} </b>
                  </p>
                  <p>
                    Te lo estaremos depositando en tu CBU/CVU <br />{" "}
                    {clienteCbu} <br />
                    {banco?.ds_banco}
                  </p>
                </div>
              </div>
            </section>
            <Footer>
              <div className="col-12">
                <Button
                  className="btn btn-primary cont"
                  type="submit"
                >
                  CONTINUAR
                </Button>
                <p style={{ fontSize: '12px', marginTop: "10px" }}>
                  <b>
                    Al confirmar declaro aceptar la solicitud de crédito y sus
                    términos y condiciones
                  </b>
                </p>
                <p style={{color: "red"}}>*Al continuar se enviará un mail a {email} desde cofa@cofa.com.ar para que revises tu contrato*</p>
              </div>
            </Footer>
          </Form>
        )}
      </Formik>
    </>
  );
}

