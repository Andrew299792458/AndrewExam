import React from "react"
import myImage from "../../assets/images/profile.jpeg"
import "./style.css"
export const Home = () => {

    return <div className="home">
        <img className="myImage" src={myImage} alt="pic"></img>
        <h1>Gor Gasparyan</h1>
        <p>Live in Yerevan</p>
        <p>Born 1993.12.18</p>
    </div>
}