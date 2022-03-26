import useSWR from "swr"
import { getIpAddress } from "../ip"

export const useIpAddress = ()=>{
    const {data} = useSWR('ipAddress',getIpAddress)
    return {
        ip:data
    }
}