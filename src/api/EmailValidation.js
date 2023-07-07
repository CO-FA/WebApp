export const validacionEmail = async ({ nroDocumento, email}) => {
    let url = "/back/validar-email";
  
    const body = {
        "nroDocumento": nroDocumento,
        "email": email,
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