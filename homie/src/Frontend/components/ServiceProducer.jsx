import React, { useState } from "react";

const data = [
    {
        id:1,
        name:'joywin',
        desc: 'designer',
        speciality: 'kitchen cabinets',
        avgCost: 50000
    },
    {
        id:2,
        name:'joywin2',
        desc: 'designer',
        speciality: 'outdoor spaces',
        avgCost: 60000
    },
    {
        id:3,
        name:'joywin3',
        desc: 'designer',
        speciality: 'flooring',
        avgCost: 30000
    },
    {
        id:4,
        name:'joywin4',
        desc: 'designer',
        speciality: 'total interior',
        avgCost: 100000
    }
]
export const ServiceProducer = () => {
    const [isDesigner, setIsDesigner] = useState([]);
    const serviceHandler = (e) => {
        console.log(isDesigner);
        setIsDesigner(isDesigner);
    }
    return(
        <div>
            {data.map(worker => (
                <div key={worker.id}>
                    <h1>{worker.name}</h1>
                    <h2>{worker.speciality}</h2>
                    <h3>{worker.avgCost}</h3>
                    <button onClick={(e) => serviceHandler(e)}> Accept service</button>
                </div>
            ))}
            {isDesigner}
        </div>
    )
}