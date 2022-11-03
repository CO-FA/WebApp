import { useEffect } from "react";
import useSWR from "swr";
import { useLocalStorage } from "utils/hooks/useLocalStorage";
import { getToken } from "../token";

export const useToken = () => {
  const [token, setToken] = useLocalStorage("token");
  const shouldFetch = !token;
  const { data, error } = useSWR(shouldFetch ? "tokens" : null, getToken, {
    refreshInterval: 1200000,
  });

  useEffect(() => {
    //TODO: Verify expires_in and error
    if (data?.token) {
      setToken(data);
    }
  }, [data]);
  console.log("useToken", token);
  return {
    token: token?.token,
    expires_in: token?.expires_in,
    isLoading: !error && !token,
    isError: error,
  };
};
