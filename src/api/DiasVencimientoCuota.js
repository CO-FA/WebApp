export const getDiasVencimiento = async () => {
  let url = "/back/dia-vencimiento";
  
  const obj = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await obj.json();
    
};
  