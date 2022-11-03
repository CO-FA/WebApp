export const getAuth = async () => {
  const item = window.localStorage.getItem("token");
  const tokenObj = item ? JSON.parse(item) : null;
  console.log("getAuth token ", tokenObj?.token);
  return tokenObj?.token || "";
};

const HttpApi = async function (url, request) {
  const auth = await getAuth();

  request.headers = {
    ...request?.headers,
    Authorization: "Bearer " + auth,
  };

  console.log("Request => ", url, request);
  return fetch(url, request);
};

export const post = async (url, body) => {
  try {
    const response = await HttpApi(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
/**
 *
 * @param {*} url URL string del api
 * @param {*} params Objeto Json con parametros a enviar al back
 * @returns Objeto JSON
 */
export const get = async (url, params) => {
  try {
    let searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, value);
    });

    const urlParams = url + "?" + searchParams.toString();
    const response = await HttpApi(urlParams, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
