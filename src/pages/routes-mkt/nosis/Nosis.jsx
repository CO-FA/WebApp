import React from "react";
import "../../../assets/css/main.css";
import { useUrlNosisAtom } from "../atoms/Atoms";

export default function Nosis() {
    const {urlNosis} = useUrlNosisAtom();
    console.log("URL nosis",urlNosis)
    
    return(
        <div className="iframe-container">
            <iframe style={{paddingRight:"-15px", paddingLeft:"-15px"}} 
            src={urlNosis} title="URL validacion identidad Nosis" allowFullScreen></iframe>
        </div>
    );
};