
export const suscripcionMobbex = async ({nroDocumento, idPreaprobado, returnURL }) => {
    let url = "/back/mobbex";

    const body = {
        nroDocumento: nroDocumento,
        idPreaprobado,
        returnURL: returnURL
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