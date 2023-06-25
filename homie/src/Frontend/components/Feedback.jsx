import  React, {useState,useEffect} from "react";
import { Navbar } from "../components/Navbar";
import { ServiceTicket } from "../components/ServiceTicket";
import axios from "axios";


export const Feedback = ({feedbackData,setFeedback,feedbackHandler,serviceTicketId}) => {
    // need to be configured for separate services for now it will show all comments
    const [loading,setLoading] = useState(1);
    
    const addLikes = async() =>{

    };
    const downLikes = async() =>{

    };
    
  return (
    <div>
        {typeof feedbackData != "NULL" ?feedbackData.map((curr_val, curr_idx, arr) => {
            return <h1 key = {curr_idx}> {curr_val.Comment} {curr_val.Likes}
            <button onClick={()=>addLikes}> + </button>
            <button onClick={()=>downLikes}> - </button>
            </h1>;
        }):""}
        <form>
            <label> Add your precious feedback </label>
            <input type = "text" onChange = {(e) =>setFeedback(e.target.value)} />
            <input type = "submit" onClick = {(e)=>{feedbackHandler(e)}} />
        </form>
    </div>);
};
