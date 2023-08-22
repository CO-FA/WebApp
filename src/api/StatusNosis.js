export const updateStatusNosis = async ({cuit, nosis_status}) => {
    let url = "/back/update-nosis-status";

    const body = {
        cuit: cuit,
        nosis_status: nosis_status,
    };
    console.log("Datos StatusNosis", body);

    const obj = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    return obj.json() || {};
};