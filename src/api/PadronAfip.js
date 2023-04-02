import { post } from "./HttpApi";

export const getPadronAfip = async (nroDocumento) => {
  const obj = await post("/API/v1/customers/identification", {
    nroDocumento: nroDocumento,
  });
  console.log("getPadronAfip", obj);
  return obj?.result || [];
};
