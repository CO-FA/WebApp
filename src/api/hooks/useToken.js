import useSWR from "swr"
import { getToken } from "../token"

export const useToken = ()=>{
    const {data,error} = useSWR('token',getToken)
    return {
        token: data?.token,
        expires_in:data?.expires_in,
        isLoading: !error && !data,
        isError: error
      }
}