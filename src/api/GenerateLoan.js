
export const validateLoan = async ({ipCliente }) => {
    let url = "/back/generate-loan";

    const body = {
        IP: ipCliente
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