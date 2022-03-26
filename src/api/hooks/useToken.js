import useSWR from "swr"
import { getToken } from "../token"

export const useToken = ()=>{
    console.log("useToken")
    const {data,error} = useSWR('tokens',getToken)
    return {
        token: data?.token,
        expires_in:data?.expires_in,
        isLoading: !error && !data,
        isError: error
      }
}