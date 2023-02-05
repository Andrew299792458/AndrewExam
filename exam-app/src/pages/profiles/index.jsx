import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../context";
import { GetUsers } from "../../platform/API";
import { useCallback } from "react";
import "./style.css"

export const Profiles = () => {
    const { newProfile, setNewProfile, id, setId } = useGlobalContext();

    const GetProfiles = useCallback(async () => {
        const result = await GetUsers();
        if (result) {
            setNewProfile([...result.data]);
        }
    }, [setNewProfile]);

    useEffect(() => {
        let x = localStorage.getItem("id");
        if (x) {
            setId(x);
        }
        if (id) {
            GetProfiles();
        }
    }, [GetProfiles, setId, id]);



    return <div className="profiles">

        {newProfile ? newProfile.map((element, index) => {
            return <div key={index}>
                <div className="profile">
                    <div className="picture"><img className="img" src={element.file ? element.file : "picture"} alt="ProfilePicture"></img></div>
                    <div className="name"><h2>{element.Name}</h2> </div>
                    <div className="email">{element.email}</div>

                </div>
            </div>
        }) : <div>No Profiles</div>}
    </div>
}