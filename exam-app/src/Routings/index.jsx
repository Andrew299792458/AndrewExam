import React from "react";
import { Link } from "react-router-dom"
import "./style.css"
export const Routing = () => {
    return <div>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/profiles">Profiles</Link></li>
        </ul>
    </div>
}