import  React, {useState,useEffect} from "react";
import { Navbar } from "../components/Navbar";
import { ServiceTicket } from "../components/ServiceTicket";
import axios from "axios";


export const Feedback = () => {
    // need to be configured for separate services for now it will show all comments
    const[feedback,setFeedback] = useState("");
    const[feedbackData,setFeedbackData] = useState([]);
    const [loading,setLoading] = useState(1);
    const feedbackUtil = async () => {
        // Gets the service tickets of the user
        let backendLink = process.env.REACT_APP_BACKEND,accessToken = "123",cnt = 0;
        let link = ["/api/users/getFeedback"];
        let requestOptions = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        };
        try {
          const feedbackDataNow = await axios.get(backendLink + link[cnt++],requestOptions);
          setFeedbackData(feedbackDataNow.data);
          setLoading(0);
        } catch(err) {
          setLoading(0);
        }
      };
    const feedbackHandler = async(e) =>{
        // Creates a service ticket in the database
        e.preventDefault();
        let backendLink = process.env.REACT_APP_BACKEND,accessToken = "123",cnt = 0;
        let link = ["/api/users/addFeedback","/api/users/getFeedback"];
        let requestOptions = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        };
        try {
        await axios.post(backendLink + link[cnt++],JSON.stringify({feedback}),requestOptions);
        const feedbackDataNow = await axios.get(backendLink + link[cnt++],requestOptions);
        setFeedbackData(feedbackDataNow.data);
        setLoading(0);
        } catch(err) {
        setLoading(0);
        }
    }
    useEffect(()=>{
        feedbackUtil();
    },[]);
  return (
    <div>
        {typeof feedbackData != "NULL" ?feedbackData.map((curr_val, curr_idx, arr) => {
            return <h1 key = {curr_idx}> {curr_val.Comment} {curr_val.Likes}</h1>;
        }):""}
        <form>
            <label> Add your precious feedback </label>
            <input type = "text" onChange = {(e) =>setFeedback(e.target.value)} />
            <input type = "submit" onClick = {feedbackHandler} />
        </form>
    </div>);
};
