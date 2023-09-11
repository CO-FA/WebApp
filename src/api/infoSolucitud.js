
export const infoSolicitud = async ({nroDocumento}) => {
    let url = "/back/info-solicitud";

    const body = {
        nroDocumento: nroDocumento,
    };

    const obj = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    return obj.json() || {};
};