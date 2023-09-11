
export const infoDetalles = async ({nroDocumento}) => {
    let url = "/back/info-detalles";

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