import { getToken } from "./token.mjs";
import { URL } from "./url.mjs";
import fetch, { Headers } from "node-fetch";

export const altaCliente = async ({password,
  tipoDocumento,
  nroDocumento,
  sexo,
  fecNacimiento,
  tipoPersona,
  apellido,
  nombre,
  calle,
  entreCalles,
  numero,
  piso,
  depto,
  localidad,
  CP,
  provincia,
  telefono,
  Email,
  limite,
  CBU,
  codActividad,
  gruCobro,
  situacionBCRA,
  formaPagoPreferida2,
  titularTarjeta,
  nroTarjeta,
  vtoTarjeta,
  cvvTarjeta,
  celular,
  empleador,
  puesto,
  antiguedadLaboral ,
  telLaboral,
  contacto,
  telContacto,
  relacionContacto,
  contacto2,
  telContacto2,
  relacionContacto2,
  contacto3,
  telContacto3,
  relacionContacto3,
  horarioContacto,
  bloquearDebitoAutomatico,
  proveedor,
  responsabilidadIVA,
  observaciones,
  cobrador,
  estadoCivil,
  nacionalidad,
  nroBeneficioLegajo,
  sueldoBruto,
  sueldoNeto}) => {
  try {
    const token = await getToken();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token?.token);
    myHeaders.append("Content-type", "application/json");

    const body = {
        password: password,
        tipoDocumento : tipoDocumento,
        nroDocumento : nroDocumento,
        sexo : sexo,
        fecNacimiento : fecNacimiento,
        tipoPersona : tipoPersona,
        apellido : apellido,
        nombre : nombre,
        calle : calle,
        entreCalles : entreCalles,
        numero : numero,
        piso : piso,
        depto : depto,
        localidad : localidad,
        CP : CP,
        provincia : provincia,
        telefono : telefono,
        Email : Email,
        limite : limite,
        CBU : CBU,
        codActividad : codActividad,
        gruCobro : gruCobro,
        situacionBCRA : situacionBCRA,
        formaPagoPreferida : formaPagoPreferida2,
        titularTarjeta : titularTarjeta,
        nroTarjeta : nroTarjeta,
        vtoTarjeta : vtoTarjeta,
        cvvTarjeta : cvvTarjeta,
        celular : celular,
        empleador : empleador,
        puesto : puesto,
        antiguedadLaboral : antiguedadLaboral ,
        telLaboral : telLaboral,
        contacto : contacto,
        telContacto : telContacto,
        relacionContacto : relacionContacto,
        contacto2 : contacto2,
        telContacto2 : telContacto2,
        relacionContacto2 : relacionContacto2,
        contacto3 : contacto3,
        telContacto3 : telContacto3,
        relacionContacto3 : relacionContacto3,
        horarioContacto : horarioContacto,
        bloquearDebitoAutomatico : bloquearDebitoAutomatico,
        proveedor : proveedor,
        responsabilidadIVA : responsabilidadIVA,
        observaciones : observaciones,
        cobrador : cobrador,
        estadoCivil : estadoCivil,
        nacionalidad : nacionalidad,
        nroBeneficioLegajo : nroBeneficioLegajo,
        sueldoBruto : sueldoBruto,
        sueldoNeto : sueldoNeto
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    const resp = await fetch(URL + "/API/v1/lending/register", requestOptions);
    const data = await resp.json();
    
    console.log("altaCliente", data)

    return data
    
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
};