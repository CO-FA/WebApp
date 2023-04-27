export const getSituaciones = async () => {
  let url = "/back/situaciones";

  const obj = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("getSituaciones", obj);
  return await obj.json();
};
