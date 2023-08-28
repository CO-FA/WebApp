export const getSituaciones = async () => {
  let url = "/back/situaciones";

  const obj = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await obj.json();
};
