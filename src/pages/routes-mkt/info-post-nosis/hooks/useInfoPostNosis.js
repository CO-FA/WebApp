import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { aceptacionDeTerminos, firmaElectronica } from "api/TerminosYCondiciones";
import { getIpAddress } from "api/ip";
import { LoaderContext } from "components/loader/LoaderContext";
import { STEPS } from "components/registro/STEPS-MKT";
import { useCbuAtom, useIdentidadAtom, useLeadAtom, useStepAtom } from "pages/routes-mkt/atoms/Atoms";
import { useCalculadoraPrestamo } from "pages/routes-mkt/calculadora-prestamo/hooks/useCalculadoraPrestamo";
import { generarAltaPrestamo } from "api/AltaPrestamo";
import { altaNuevoCliente } from "api/AltaCliente";

export const useInfoPostNosis = () => {
  let { setShowLoader } = React.useContext(LoaderContext);
  const [errors] = useState(false);
  const history = useHistory();
  const { setCurrentStep } = useStepAtom();
  const { identidad } = useIdentidadAtom();
  const { lead } = useLeadAtom();
  const {
      monto,
      cuota,
      montoCuota,
  } = useCalculadoraPrestamo();
  const {clienteCbu} = useCbuAtom();

  const submitForm = async () => {
      if (errors) {
        return;
      }
      if (!errors) {
        setShowLoader(true);
        try {
          const ipCliente = await getIpAddress()
          //primero acepto terminos y condiciones
          const confirmacionSolicitud = await aceptacionDeTerminos(
          { 
            idPreaprobado: lead.id_preaprobado,
            nroDocumento:identidad.cuit,
            IP: ipCliente 
          })
          //segundo genero el cliente porqe ya acepto tener el prestamo. 
          //TO DO: todos los datos que faltan los tomamos de infoexperto
          const nuevoCliente = await altaNuevoCliente(
            {
            "password": lead.password,
            "tipoDocumento" : 11,
            "nroDocumento" : identidad.documento,
            "sexo" : lead.genero,
            "fecNacimiento" : "1980-01-01",
            "tipoPersona" : "F",
            "apellido" : "",
            "nombre" : lead.nombre,
            "calle" : "AV ALICIA M. DE JUSTO",
            "entreCalles" : "",
            "numero" : "1150",
            "piso" : "3",
            "depto" : "A306",
            "localidad" : "CABA",
            "CP" : "1107",
            "provincia" : 1,
            "telefono" : "",
            "Email" : lead.email,
            "limite" : 99999999,
            "CBU" : clienteCbu,
            "codActividad" : identidad.codActividad,
            "gruCobro" : 1,
            "situacionBCRA" : 1,
            "formaPagoPreferida" : 2,
            "titularTarjeta" : "",
            "nroTarjeta" : "",
            "vtoTarjeta" : "",
            "cvvTarjeta" : "",
            "celular" : lead.telefono,
            "empleador" : "SB SOFTWARE",
            "puesto" : "SOPORTE TECNICO",
            "antiguedadLaboral" : "5",
            "telLaboral" : "55554444",
            "contacto" : "Arturo Perez",
            "telContacto" : "1155443322",
            "relacionContacto" : "Hermano",
            "contacto2" : "",
            "telContacto2" : "",
            "relacionContacto2" : "",
            "contacto3" : "",
            "telContacto3" : "",
            "relacionContacto3" : "",
            "horarioContacto" : "9 a 18hs",
            "bloquearDebitoAutomatico" : false,
            "proveedor" : false,
            "responsabilidadIVA" : 1,
            "observaciones" : "Prueba de alta",
            "cobrador" : 0,
            "estadoCivil" : 1,
            "nacionalidad" : "ARGENTINA",
            "nroBeneficioLegajo" : "123456",
            "sueldoBruto" : 60000.00,
            "sueldoNeto" : 50000.00
          }
          )
          const idCliente = nuevoCliente.idCliente
          console.log("id cliente", idCliente)

          if(confirmacionSolicitud.status === "OK"){
            //tercero genero el alta del prestamo para obtener el idPrestamo
            const altaPrestamo = await generarAltaPrestamo({
              idCliente: idCliente,
              fechaAlta: new Date(),
              comercializadora_Sucursal: 1,
              monto: monto,
              cuotas: cuota,
              lineaCredito: 1,
              destinoFondos: 1,
              importeCuota: montoCuota,
              primerVto: null,
              formaPago: 2,
              estado: 9,
              referencia: "Préstamo de prueba"
            })
            console.log("alta prestamo", altaPrestamo)
            const idPrestamo = altaPrestamo.idPrestamo
            //TO DO: guardar idPrestamo cliente en SupaBase
            console.log("idPrestamo", idPrestamo)
            
            //cuarto paso idPrestamo para generar la firma electronica de ese prestamo
            const infoFirmaElectronica = await firmaElectronica({
              idPrestamo: idPrestamo,
              accion: 1, 
            })
            console.log("Electronica", infoFirmaElectronica)
          }
          history.push("/onboarding/firma-electronica");
          setCurrentStep(STEPS.STEP_12_FIRMA_ELECTRONICA);
          
        } catch (error) {
          history.push("/onboarding/error");
          setCurrentStep(STEPS.STEP_99_ERROR);
          console.error(error);
        }
        setShowLoader(false);
      }
    };
    return{submitForm}

};
