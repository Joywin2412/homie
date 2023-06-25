import  React from "react";
import { useNavigate } from "react-router-dom";
export const ServiceTicket = ({ serviceTicketData ,show}) => {
  // Only 3 will be visible
  const navigate = useNavigate();
  return <div>{typeof serviceTicketData != "NULL" ?serviceTicketData.map((curr_val, curr_idx, arr) => {
    return <h1 onClick={()=>navigate(`/serviceTicket/${curr_val._id}/${curr_val.ServiceProducer}`)}key = {curr_idx}> {curr_val.Problem} {show?curr_val.Response:""} {curr_val.Status}</h1>;
  }):""}</div>;
};
