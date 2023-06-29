import { dataInfoExperto } from "./infoExperto.js";

const URL_INFO_EXPERTO = "";
const API_KEY = "aaaaa";
const llamarPorGetAInfoExperto = (cuit) => {
  const result = fetch(URL_INFO_EXPERTO + "/" + API_KEY + "/" + cuit).then(
    (response) => response.json()
  );
  return result;
};

//TODO: mapear los resultados recursivamente si es un objeto
function mapVariables(key, value) {
  return value;
}

async function main() {
  console.log("start mapping");
  //TODO: invocar el WS de info experto
  //TODO: mapear el resultado a array de objetos clave valor
  //TODO: exponer todo en un endpoint que reciba el numero de cuit

  //const data = await llamarPorGetAInfoExperto("20357534411")
  const datos = dataInfoExperto.datos;
  const result = Object.entries(datos).map((entry, index) => {
    const [key, value] = entry;

    return {
      Variable: key,
      Valor: value,
    };
  });
  console.log("Result", result);
}

main();
