import React from "react";
import "../../../assets/css/main.css";
import { useSubscriptionURLAtom } from "../../atoms/Atoms";

export function Mobbex() {
    const {subscriptionURL} = useSubscriptionURLAtom();
    
    return(
        <div className="iframe-container">
            <iframe src={subscriptionURL} title="URL suscripcion Mobbex"></iframe>
        </div>
    );
};




