import { altaCliente } from "./altaCliente.js";
import { createClient } from "@supabase/supabase-js";
import { buscarCliente } from "./buscarClienteSB.js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

export const getIdCliente = async ({lead}) => {
    const { data: leadsExistente, error} = await supabase
    .from("leads")
    .select("*")
    .eq("cuit", lead.cuit);

    if (leadsExistente.length > 0) {
        const clienteExistente = await buscarCliente({cuit: lead.cuit})
        const numIdCliente = clienteExistente[0].idCliente;
        console.log("cliente existente id", numIdCliente)
        return numIdCliente
    } else {
        //doy alta cliente
        const nuevoCliente = await altaCliente(
            {
            "password": lead.password,
            "tipoDocumento" : 11,
            "nroDocumento" : lead.cuit,
            "sexo" : lead.genero,
            "fecNacimiento" : "1980-01-01",
            "tipoPersona" : "F",
            "apellido" : lead.nombre,
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
            "CBU" : lead.cbu,
            "codActividad" : "", //TO DO: traer de lead.variables...
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
        }) 
        const idCliente = nuevoCliente.idCliente;
        console.log("nuevo cliente id", idCliente)
        return idCliente
    }
};