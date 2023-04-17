import React from "react";
import "../../../assets/css/main.css";

export function Mobbex({urlMobbex}) {
    return(
        <>
            <iframe style={{paddingRight:"-15px", paddingLeft:"-15px"}} src={urlMobbex}></iframe>
        </>
        
    );
}


