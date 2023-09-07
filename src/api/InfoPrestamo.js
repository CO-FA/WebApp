
export const infoPrestamo = async ({buttonId }) => {
    let url = "/back/info-prestamo";

    const body = {
        buttonId
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