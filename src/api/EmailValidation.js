export const validacionEmail = async ({ nroDocumento,idPreaprobado, email, enviarCodigo}) => {
    let url = "/back/validar-email";
  
    const body = {
        nroDocumento: nroDocumento,
        idPreaprobado: idPreaprobado,
        email: email,
        enviarCodigo: enviarCodigo,
    };
    console.log("datos validacion email", body);
  
    const obj = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  
    return obj.json() || {};
  };