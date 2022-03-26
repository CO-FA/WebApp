import { URL } from "api/API";

export const getToken = async ()=>{
    try {
        const req = {
            "Username":"apiUser",
            "Password":"*ApiUser2021*"
        };
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(req),
            redirect: 'follow'
          };
          const resp = await fetch(URL +"login/authenticate", requestOptions)  
          return resp.json()
    } catch (error) {
        console.log(error)    
    }
      

     return Promise.reject("Error al obtener los datos")
        
}