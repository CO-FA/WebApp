import { atom, useAtom } from "jotai";

export const stepAtom = atom(1);
export const useStepAtom = () => {
  const [currentStep, setCurrentStep] = useAtom(stepAtom);
  return { currentStep, setCurrentStep };
};

const documentoAtom = atom("");
const nombreAtom = atom("");
const cuitAtom = atom("");
export const useIdentidadAtom = () => {
  const [documento, setDocumento] = useAtom(documentoAtom);
  const [nombre, setNombre] = useAtom(nombreAtom);
  const [cuit, setCuit] = useAtom(cuitAtom);
  return { documento, setDocumento, nombre, setNombre, cuit, setCuit };
};

const codAreaAtom = atom("");
const numCelularAtom = atom("");
const pinAtom = atom("");
export const useCelularAtom = () => {
  const [codArea, setCodArea] = useAtom(codAreaAtom);
  const [numCelular, setNumCelular] = useAtom(numCelularAtom);
  const [pin, setPin] = useAtom(pinAtom);
  return { codArea, setCodArea, numCelular, setNumCelular, pin, setPin };
};
