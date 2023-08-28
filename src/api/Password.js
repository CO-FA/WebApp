
export const crearPassword = async ({nroDocumento, password}) => {
    let url = "/back/crear-password";

    const body = {
        nroDocumento,
        password
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