import React from "react"
import { Route, Routes } from "react-router-dom"
import { Form } from "../../pages/form"
import { Home } from "../../pages/home"
import { Profiles } from "../../pages/profiles"
import { Header } from "../header"
import "./style.css"


export const AppComponent = () => {
    return <div className="body">
        <Header />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/profiles" element={<Profiles />} />
        </Routes>
    </div>

}


