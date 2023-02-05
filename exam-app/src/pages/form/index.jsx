import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { PostUsers } from "../../platform/API";
import "./style.css"

export const Form = () => {

    const nav = useNavigate()

    const [errors, setErrors] = useState({})
    const { newProfile, setNewProfile, changes, setChanges } = useGlobalContext()

    const change = (e) => {
        setChanges({ ...changes, [e.target.name]: e.target.value });
    }

    const Valid = () => {
        let valid = true
        let errors = {
            NameError: "",
            emailError: "",
            passwordError: "",
            confirmPasswordError: ""
        }
        if (!changes.Name) {
            errors.NameError = "Name is Required"
            valid = false
        }
        if (!changes.email || !/\S+@\S+\.\S+/.test(changes.email)) {
            errors.emailError = "Invalid Email"
            valid = false
        }
        if (!changes.password || changes.password.length < 9) {
            errors.passwordError = "Low Password"
            valid = false
        }
        if (!changes.confirmPassword) {
            errors.confirmPasswordError = "Confirm Password"
            valid = false
        } else if (changes.confirmPassword !== changes.password) { errors.confirmPasswordError = "Password not The Same" }

        setErrors(errors)
        return valid
    }

    const SavePicture = (e) => {
        const fr = new FileReader()
        fr.readAsDataURL(e.target.files[0])
        fr.onload = function (event) {
            setChanges({ ...changes, file: event.target.result })
        }
    }
    const SaveChanges = async () => {

        if (Valid()) {
            const result = await PostUsers(changes)
            if (result) {
                setNewProfile([...newProfile, result.data])
                localStorage.setItem("id", result.data._id)
            }
            nav("/profiles")
        }

    }

    return <div className="Form">
        <div className="form">
            <div className="fieldset">
                <div><p className={errors.NameError ? "red" : null}>  {errors.NameError ? errors.NameError : "Name"}</p><input onChange={change} name="Name" placeholder="Name" /></div>
                <div><p className={errors.emailError ? "red" : null}>{errors.emailError ? errors.emailError : "Email"}</p><input onChange={change} name="email" type={"email"} placeholder="Email" /></div>
                <div><p className={errors.passwordError ? "red" : null}>{errors.passwordError ? errors.passwordError : "Password"}</p><input type={"password"} onChange={change} name="password" placeholder="*********" /></div>
                <div><p className={errors.confirmPasswordError ? "red" : null}>{errors.confirmPasswordError ? errors.confirmPasswordError : "Confirm Password"}</p><input type={"password"} onChange={change} name="confirmPassword" placeholder="*********" /></div>
                <div><p>Profile Image</p><input className="sub" onChange={SavePicture} name="image" type={"file"} /></div>
                <div><button onClick={SaveChanges} className="button" >Save Changes</button></div>
            </div>
        </div>
    </div>


}
