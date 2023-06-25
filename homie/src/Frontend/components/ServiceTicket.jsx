import  React from "react";

export const ServiceTicket = ({ serviceTicketData }) => {
  // Only 3 will be visible

  return <div>{typeof serviceTicketData != "NULL" ?serviceTicketData.map((curr_val, curr_idx, arr) => {
    return <h1 key = {curr_idx}> {curr_val.Problem} {curr_val.Status}</h1>;
  }):""}</div>;
};
