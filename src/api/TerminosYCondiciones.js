export const aceptacionDeTerminos = async ({nroDocumento, idPreaprobado, IP }) => {
    let url = "/back/aceptar-terminos-condiciones";

    const body = {
        nroDocumento: nroDocumento,
        idPreaprobado,
        IP
    };;

    const obj = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    
    return obj.json() || {};
};

export const firmaElectronica = async ({idPrestamo, accion }) => {
    let url = "/back/firma-electronica";

    const body = {
        idPrestamo,
        accion
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