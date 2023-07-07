import { dataInfoExperto } from "./infoExperto.js";
// mapear los resultados recursivamente si es un objeto
function mapVariables(value) {
  if (typeof value === "object" && value !== null) {
    return Object.entries(value).map(([nestedKey, nestedValue]) => ({
      Variable: `${nestedKey}`,
      Valor: nestedValue,
    }));
  } else {
    return value;
  }
}

//console.log(resultMap);
function obtenerClavesAnidadasConValores(
  objeto,
  clavePadre = "",
  clavesAnidadas = {}
) {
  for (let clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      const claveActual = clavePadre ? `${clavePadre}.${clave}` : clave;

      if (typeof objeto[clave] === "object" && objeto[clave] !== null) {
        obtenerClavesAnidadasConValores(
          objeto[clave],
          claveActual,
          clavesAnidadas
        );
      } else {
        clavesAnidadas[claveActual] = objeto[clave];
      }
    }
  }

  return clavesAnidadas;
}

const clavesConValores = obtenerClavesAnidadasConValores(dataInfoExperto);

const resultMap = mapVariables(clavesConValores);

console.log(resultMap);
