/*
#TEST
SP_API_URL=https://cofatest.sbfintech.net/API/v1/
#https://cofatest.sbfintech.net/API/v1/lending/bureau
SP_API_USER=Coder
SP_API_PASS=Programador
*/
export const getToken = async () => {
  try {
    console.log("getToken asaaaa");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const req = {
      Username: "Coder",
      Password: "Programador",
    };
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(req),
      redirect: "follow",
    };
    const resp = await fetch("/API/v1/login/authenticate", requestOptions);
    console.log("getToken", resp);
    return resp.json();
  } catch (error) {
    console.log(error);
  }

  return Promise.reject("Error al obtener los datos");
};
