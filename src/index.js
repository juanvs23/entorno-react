import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";

const HelloWorld = () => {
    return <h1> Hola de nuevo </h1>
} 

ReactDOM.render(
    <HelloWorld />,
    document.getElementById("root")
);