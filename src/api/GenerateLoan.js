
export const validateLoan = async ({IP, nroDocumento }) => {
    let url = "/back/generate-loan";

    const body = {
        IP: IP,
        nroDocumento: nroDocumento
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