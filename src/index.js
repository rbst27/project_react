import ReactDOM from "react-dom"
import React from "react";
import List from "./List";
import "./list.css";

const rootComponent=document.getElementById("root")
ReactDOM.render(
    <React.StrictMode>
        <div className="container">
            <ul className="usuarios">
                <List />
            </ul>
        </div>
    </React.StrictMode>, rootComponent)