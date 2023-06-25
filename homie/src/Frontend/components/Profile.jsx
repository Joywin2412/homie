import React, { useState } from "react";

export const Profile = ({profileData}) => {

    return (
        <div>
            {profileData ?
            <div>
                <h1> Name : {profileData.name}</h1>
                <h1> Email : {profileData.email} </h1> 
             
             </div>
            :""}
        </div>
    );
}

