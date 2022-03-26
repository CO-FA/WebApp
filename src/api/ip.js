export const getIpAddress= async () =>{
   
    try {
       const response = await fetch("https://ipinfo.io");
       const ip = await response.json()
       return ip.ip;
    } catch (error) {
        console.log(error)
    }
    return Promise.reject("No se pudo obtener la ip del dispositivo")
         
}