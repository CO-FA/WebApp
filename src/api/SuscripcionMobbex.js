
export const suscripcionMobbex = async ({nroDocumento, returnURL }) => {
    let url = "/back/mobbex";

    const body = {
        nroDocumento: nroDocumento,
        returnURL: returnURL
    };
    console.log("mobbex front", body);

    const obj = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    return obj.json() || {};
};