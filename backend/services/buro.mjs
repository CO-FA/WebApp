import fetch from "node-fetch";

export const getVariablesBuro = async ({cuit}) => {
  try {
    const api_key = "i29filtn2knejvij5io9nddhfi30sp01672pwuhw6vsvokv2hg"

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const resp = await fetch(`https://infoexperto-production.up.railway.app/api/${api_key}/datos/${cuit}`, requestOptions);

    const respText = await resp.text();
    return JSON.parse(respText);
  } catch (error) {
    console.log(error);
  }
  return null;
};