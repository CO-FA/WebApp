import React from "react";
import "../../../assets/css/main.css";

export function Mobbex({urlMobbex}) {
    return(
        <div className="mobbex-cont">
            {/* falta funcion que vuelva. settimeout? */}
            <iframe style={{paddingRight:"-15px", paddingLeft:"-15px"}} src={urlMobbex}></iframe>
        </div>
    );
}