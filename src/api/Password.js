
export const crearPassword = async ({documento, codigo, clave}) => {
    let url = "/back/crear-password";

    const body = {
        nroDocumento: documento,
        codigo: codigo,
        password: clave,
    };
    console.log("crearPassword front", body);

    const obj = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    return obj.json() || {};
};