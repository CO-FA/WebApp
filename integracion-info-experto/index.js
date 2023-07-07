/* import { dataInfoExperto } from "./infoExperto.js";
const datos = dataInfoExperto.datos;
const result = Object.entries(datos).map((entry, index) => {
  const [key, value] = entry;

  return {
    Variable: key,
    Valor: value,
  };
});
console.log("Result", result); */

/* const URL_INFO_EXPERTO = "https://servicio.infoexperto.com.ar/app/api/v1/informe/apikey";
const API_KEY = "907f2535-d4a4-4f69-8824-3486fc9392eb";

const llamarPorGetAInfoExperto = (cuit) => {
  const result = fetch(URL_INFO_EXPERTO + "/" + API_KEY + "/cuit/" + cuit + "?formato=teclab").then(
    (response) => response.json()
  );
  return result;
};

function mapVariables(key, value) {
  if (typeof value === 'object' && value !== null) {
    return Object.entries(value).map(([nestedKey, nestedValue]) => ({
      Variable: `${key}.${nestedKey}`,
      Valor: mapVariables(nestedKey, nestedValue)
    }));
  } else {
    return value;
  }
}

async function main() {
  console.log("start mapping");
  const dataInfoExperto = await llamarPorGetAInfoExperto("20357534411")
  const resultMap = mapVariables('datos', dataInfoExperto.datos);
  //TODO: exponer todo en un endpoint que reciba el numero de cuit

}
main(); */


const express = require('express');
const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

const URL_INFO_EXPERTO = "https://servicio.infoexperto.com.ar/app/api/v1/informe/apikey";
const API_KEY = "907f2535-d4a4-4f69-8824-3486fc9392eb";

const llamarPorGetAInfoExperto = (cuit) => {
  const result = fetch(URL_INFO_EXPERTO + "/" + API_KEY + "/cuit/" + cuit + "?formato=teclab").then(
    (response) => response.json()
  );
  return result;
};

// mapear los resultados recursivamente si es un objeto
function mapVariables(key, value) {
  if (typeof value === 'object' && value !== null) {
    return Object.entries(value).map(([nestedKey, nestedValue]) => ({
      Variable: `${key}.${nestedKey}`,
      Valor: mapVariables(nestedKey, nestedValue)
    }));
  } else {
    return value;
  }
}

// Endpoint GET para obtener los datos mapeados
app.get('/api/datos/:cuit', async (req, res) => {
  const { cuit } = req.params;
  
  try {
    const dataInfoExperto = await llamarPorGetAInfoExperto(cuit);
    const resultMap = mapVariables('datos', dataInfoExperto.datos);
    
    res.json(resultMap);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los datos mapeados.' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
