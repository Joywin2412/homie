import  React from "react";
import { useNavigate } from "react-router-dom";
export const ServiceTicket = ({ serviceTicketData ,show}) => {
  // Only 3 will be visible
  const navigate = useNavigate();
  return <div>{typeof serviceTicketData != "NULL" ?serviceTicketData.map((curr_val, curr_idx, arr) => {
    return <div>
      <h1 onClick={()=>navigate(`/serviceTicket/${curr_val._id}/${curr_val.ServiceProducer}`)}key = {curr_idx}> {curr_val.Problem} {curr_val.Status}</h1>
     {show?<h1> Your service : {curr_val.Response}</h1>:""}
     </div>
  }):""}</div>;
};
