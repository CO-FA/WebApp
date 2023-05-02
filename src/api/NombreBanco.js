export const getNombreBanco = async ({ cbu }) => {
  let url = "/back/find-cbu";

  const obj = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cbu }),
  });

  console.log("getNombreBanco", obj);
  return await obj.json();
};
