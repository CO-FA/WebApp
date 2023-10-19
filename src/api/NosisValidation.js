export const validacionNosis = async ({ nroDocumento,idPreaprobado, CallbackURL}) => {
    let url = "/back/validar-identidad-nosis";
  
    const body = {
        nroDocumento: nroDocumento,
        idPreaprobado: idPreaprobado,
        CallbackURL: CallbackURL
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