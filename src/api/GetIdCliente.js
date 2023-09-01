
export const idCliente = async ({ lead}) => {
    let url = "/back/get-id-cliente";

    const body = {
        lead: lead,
    };

    const obj = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    console.log(obj);

    return obj.json() || {};
};