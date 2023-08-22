import React from "react";
import "../../../assets/css/main.css";
import { useSubscriptionURLAtom } from "../atoms/Atoms";

export function Mobbex() {
    const {subscriptionURL} = useSubscriptionURLAtom();
    console.log("URL mobbex",subscriptionURL)
    
    return(
        <div className="iframe-container">
            <iframe 
            src={subscriptionURL} title="URL suscripcion Mobbex" allowFullScreen></iframe>
        </div>
    );
};




