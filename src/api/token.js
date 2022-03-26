

export const getToken = async ()=>{
    try {
        console.log("getToken asaaaa")
        const req = {
            "Username":"apiUser",
            "Password":"*ApiUser2021*"
        };
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(req),
            redirect: 'follow'
          };
          const resp = await fetch("API/v1/login/authenticate", requestOptions)  
          console.log("getToken",resp)
          return resp.json()
    } catch (error) {
        console.log(error)    
    }
      

     return Promise.reject("Error al obtener los datos")
        
}