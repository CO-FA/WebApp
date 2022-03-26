import useSWR from "swr"
import { getIpAddress } from "../ip"

export const useIpAddress = ()=>{
    const {data} = useSWR('ipAddress',getIpAddress,{refreshInterval: 60000,})
    return {
        ip:data
    }
}