import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
export const stepAtom = atom(1);
export const useStepAtom = () => {
  const [currentStep, setCurrentStep] = useAtom(stepAtom);
  return { currentStep, setCurrentStep };
};

const documentoAtom = atomWithStorage("");
const identidadAtom = atomWithStorage("");

export const useIdentidadAtom = () => {
  const [documento, setDocumento] = useAtom(documentoAtom);
  const [identidad, setIdentidad] = useAtom(identidadAtom);
  return { documento, setDocumento, identidad, setIdentidad };
};

const codAreaAtom = atomWithStorage("");
const numCelularAtom = atomWithStorage("");
const pinAtom = atomWithStorage("");
export const useCelularAtom = () => {
  const [codArea, setCodArea] = useAtom(codAreaAtom);
  const [numCelular, setNumCelular] = useAtom(numCelularAtom);
  const [pin, setPin] = useAtom(pinAtom);
  return { codArea, setCodArea, numCelular, setNumCelular, pin, setPin };
};
