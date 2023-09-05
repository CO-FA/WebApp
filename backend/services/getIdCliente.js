import { altaCliente } from "./altaCliente.js";
import { buscarCliente } from "./buscarClienteSB.js";

export const getIdCliente = async ({leadRecuperado}) => {
    const {cuit,password, genero, nombre, email, cbu, telefono, variables_buro } = leadRecuperado

    if (leadRecuperado.length > 0) {
        const clienteExistente = await buscarCliente({cuit: cuit})
        //const numIdCliente = clienteExistente[0].idCliente;
        return clienteExistente
    } else {
        const nuevoCliente = await altaCliente
        (
            {
            "password": password,
            "tipoDocumento" : 11, //variables_buro.datos.identidad.tipo_documento
            "nroDocumento" : cuit,
            "sexo" : genero,
            "fecNacimiento" : variables_buro.datos.identidad.fecha_nacimiento,
            "tipoPersona" : variables_buro.datos.identidad.tipo_entidad,
            "apellido" : nombre,
            "nombre" : nombre,
            "calle" : variables_buro.datos.domicilios.1.calle, //1 es el domicilio fiscal
            "entreCalles" : "",
            "numero" : variables_buro.datos.domicilios.1.altura,
            "piso" : "",
            "depto" : "",
            "localidad" : variables_buro.datos.domicilios.1.localidad,
            "CP" : variables_buro.datos.domicilios.1.cp,
            "provincia" : 1, //variables_buro.datos.domicilios.1.provincia
            "telefono" : "",
            "Email" : email,
            "limite" : 99999999,
            "CBU" : cbu,
            "codActividad" : variables_buro.datos.identidad.codigo_actividad,
            "gruCobro" : 1,
            "situacionBCRA" : 1,
            "formaPagoPreferida" : 2,
            "titularTarjeta" : "",
            "nroTarjeta" : "",
            "vtoTarjeta" : "",
            "cvvTarjeta" : "",
            "celular" : telefono,
            "empleador" : datos.empleador.razon_social,
            "puesto" : "SOPORTE TECNICO",
            "antiguedadLaboral" : "5",
            "telLaboral" : variables_buro.datos.empleador.telefono.0.telefono,
            "contacto" : variables_buro.datos.personasRelacionadas.0.nombre_completo,
            "telContacto" : "1155443322", // no esta
            "relacionContacto" : "Hermano", // no esta
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
        return nuevoCliente
    }
};