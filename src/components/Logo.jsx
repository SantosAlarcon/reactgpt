import React from "react";
import "../styles/Logo.css";

const Logo = () => {
    return <div id="logo">
        <span></span>
        <span></span>
        <span></span>
        ReactGPT ({process.env.USUARIO})
    </div>;
};

export default Logo;
