import  React, {useState,useEffect} from "react";
import { Navbar } from "../components/Navbar";
import { ServiceTicket } from "../components/ServiceTicket";
import axios from "axios";
import { Feedback } from "../components/Feedback";
import { ServiceProducer } from "../components/ServiceProducer";
export const ServiceProducerPage = ({serviceProducerData}) => {
  const [loading,setLoading] = useState(0);
  const [feedbackData,setFeedbackData] = useState([]);
  const [feedback,setFeedback] = useState("");
  let name;
  const loggendinUser = localStorage.getItem("user");
  if(loggendinUser)
  {
    const foundUser = JSON.parse(loggendinUser);
    name = foundUser.name;
  }
  const feedbackUtil = async () => {
    // Gets the feedback of all user
        let backendLink = process.env.REACT_APP_BACKEND,accessToken = "123",cnt = 0;4
        const loggendinUser = localStorage.getItem("user");
        if(loggendinUser)
        {
          const foundUser = JSON.parse(loggendinUser);
          accessToken = foundUser.token;
        }
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
        // Creates a feedback in the database
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
  if (loading) return <h1> Loading </h1>;
  else {
    return (
      <div className="container-serviceproducer">
        <Navbar name={name} />
        <ServiceProducer serviceProducerData={serviceProducerData} />
        <Feedback
          feedbackData={feedbackData}
          feedbackHandler={feedbackHandler}
          setFeedback={setFeedback}
        />
      </div>
    );
    
  }
};
