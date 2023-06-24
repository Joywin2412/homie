import React, { useState } from "react";

// const data = [
//     {
//         id:1,
//         name:'joywin',
//         desc: 'designer',
//         speciality: 'kitchen cabinets',
//         avgCost: 50000
//     },
//     {
//         id:2,
//         name:'joywin2',
//         desc: 'designer',
//         speciality: 'outdoor spaces',
//         avgCost: 60000
//     },
//     {
//         id:3,
//         name:'joywin3',
//         desc: 'designer',
//         speciality: 'flooring',
//         avgCost: 30000
//     },
//     {
//         id:4,
//         name:'joywin4',
//         desc: 'designer',
//         speciality: 'total interior',
//         avgCost: 100000
//     }
// ]
export const ServiceProducer = ({serviceProducerData}) => {
    const [isDesigner, setIsDesigner] = useState("");

    return (
        <div>
            {typeof serviceProducerData !== "undefined" ?serviceProducerData.map((curr_val, curr_idx, arr) => {
            return <h1 key = {curr_idx}> {curr_val.Name} {curr_val.Rating} {curr_val.Description}</h1>;
            }):""}
        </div>
    );
}

 // {data.map(worker => (
            //     <div key={worker.id}>
            //         <h1>{worker.name}</h1>
            //         <h2>{worker.speciality}</h2>
            //         <h3>{worker.avgCost}</h3>
            //         <button onClick={(e) => serviceHandler(e)} onChange={(e)=>setIsDesigner(e.target.value)}> Accept service</button>
            //     </div>
            // ))}
            // {isDesigner}