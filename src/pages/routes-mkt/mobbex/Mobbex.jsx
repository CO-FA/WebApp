import React from "react";
import "../../../assets/css/main.css";

export function Mobbex({urlMobbex}) {

    //urlMobbex seria la url que me devuelve la llamada
    return(
        <>
            <h1>MOBBEX</h1>
            <iframe style={{paddingRight:"-15px", paddingLeft:"-15px"}} src={urlMobbex} title="URL suscripcion Mobbex"></iframe>
        </>
    );
};




