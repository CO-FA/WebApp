import { useEffect } from "react";
import useSWR from "swr";
import { useSessionStorage } from "utils/hooks/useSessionStorage";
import { getToken } from "../token";

export const useToken = () => {
  const [token, setToken] = useSessionStorage("token");
  const shouldFetch = !token;
  const { data, error } = useSWR(shouldFetch ? "tokens" : null, getToken, {
    refreshInterval: 30000,
  });

  useEffect(() => {
    //TODO: Verify expires_in and error
    if (data?.token) {
      let tokenData = {
        ...data,
        expires: new Date(Date.now() + data?.expires_in * 1000),
      };
      setToken(tokenData);
    }
  }, [data]);

  return {
    token: token?.token,
    expires_in: token?.expires_in,
    isLoading: !error && !token,
    isError: error,
  };
};
