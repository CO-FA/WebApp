export const getToken = async () => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const req = {
      Username: "desarollo",
      Password: "Admin123**",
    };
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(req),
      redirect: "follow",
    };
    const resp = await fetch("/API/v1/login/authenticate", requestOptions);
    return resp.json();
  } catch (error) {
    console.log(error);
  }

  return Promise.reject("Error al obtener los datos");
};
