import { getToken } from "./token";

export const getAuth = async () => {
  const item = window.sessionStorage.getItem("token");
  const tokenObj = item ? JSON.parse(item) : null;
  return tokenObj?.token || "";
};

const HttpApi = async function (url, request) {
  const auth = await getAuth();

  request.headers = {
    ...request?.headers,
    Authorization: "Bearer " + auth,
    "Content-Type": "application/json",
  };

  return fetch(url, request);
};

export const post = async (url, body) => {
  try {
    let response = await HttpApi(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
    });
    if (response.status === 401) {
      await revalidateToken();
      response = await HttpApi(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    }
    const res = await response.text();
    return JSON.parse(res);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
const revalidateToken = async () => {
  try {
    const data = await getToken();
    let tokenData = {
      ...data,
      expires: new Date(Date.now() + data?.expires_in * 1000),
    };

    sessionStorage.setItem("token", JSON.stringify(tokenData));
  } catch (error) {
    console.error(error);
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
