export const getIpAddress= async () =>{
   
    try {
       const response = await fetch("https://ipinfo.io/json?token=24cd5a65c71590",{ headers: {
        'Content-Type': 'application/json'
        
      },});
       const ip = await response.json()
       console.log(ip);
    } catch (error) {
        console.log(error)
    }
    return Promise.reject("No se pudo obtener la ip del dispositivo")
         
}