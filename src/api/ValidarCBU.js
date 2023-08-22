export const validarCBU =  async ({nroDocumento, idPreaprobado, CBU, guardarCBU}) => {
    let url = "/back/validar-cbu";

    const body = {
        nroDocumento: nroDocumento,
        idPreaprobado: idPreaprobado,
        CBU: CBU,
        guardarCBU: guardarCBU,
    };
    console.log("Validar CBU", body);

    const obj = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    
    return obj.json() || {};

}