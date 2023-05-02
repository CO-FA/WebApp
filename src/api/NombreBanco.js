export const getNombreBanco = async () => {
    let url = "/back/find-cbu";
  
    const obj = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    console.log("getNombreBanco", obj);
    return await obj.json();
  };