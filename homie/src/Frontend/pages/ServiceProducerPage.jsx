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
  if (loading) return <h1> Loading </h1>;
  else {
    return (
      <div>
        <Navbar />
        <ServiceProducer serviceProducerData={serviceProducerData} />
        <Feedback feedbackData = {feedbackData} feedbackHander = {feedbackHandler} setFeedback={setFeedback}/>
      </div>
    );
  }
};
