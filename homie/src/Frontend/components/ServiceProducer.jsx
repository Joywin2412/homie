import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const ServiceProducer = ({serviceProducerData}) => {
    
    const navigate = useNavigate();
    const [problem,setProblem] = useState("")
    return (
        <div>
            {typeof serviceProducerData !== "undefined" ?serviceProducerData.map((curr_val, curr_idx, arr) => {
            return <h1 button onClick = {(e)=>navigate(`/serviceProducer/${curr_val.Name}`)} key = {curr_idx}> {curr_val.Name} {curr_val.Rating} {curr_val.Description}</h1>;
            }):""}
        </div>
    );
}

