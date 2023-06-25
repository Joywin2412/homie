import  React, {useState,useEffect} from "react";
import { Navbar } from "../components/Navbar";
import { ServiceTicket } from "../components/ServiceTicket";
import axios from "axios";
import { Feedback } from "../components/Feedback";
import { ServiceProducer } from "../components/ServiceProducer";
import Loading from "../components/loading";
import { useParams } from "react-router-dom";

export const ServiceTicketPage = ({serviceProducerData}) => {
  let Id = useParams();
  let serviceTicketId = Id.id;
  let userName = Id.prod;

  const [loading,setLoading] = useState(1);
  const [feedbackData,setFeedbackData] = useState([]);
  const [feedback,setFeedback] = useState("");
  const [problem,setProblem] = useState("");
  const [serviceTicketData, setServiceTicketData] = useState([]);
  let name,email;
  const loggendinUser = localStorage.getItem("user");
  if(loggendinUser)
  {
    const foundUser = JSON.parse(loggendinUser);
    name = foundUser.name;
    email = foundUser.email;
  }
  
  const serviceTicketUtil = async () => {
    // Gets the service tickets of the user
    let backendLink = process.env.REACT_APP_BACKEND,cnt = 0,accessToken;
    const loggendinUser = localStorage.getItem("user");
    if(loggendinUser)
    {
      const foundUser = JSON.parse(loggendinUser);
      accessToken = foundUser.token;
    }
    let link = [`/api/users/getIdServiceTickets/${email}/${serviceTicketId}`,`/api/users/getFeedback/${userName}`];
    let requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const serviceTicketDataNow = await axios.get(backendLink + link[cnt++],requestOptions);
      setServiceTicketData(serviceTicketDataNow.data);
      const feedbackDataNow = await axios.get(backendLink + link[cnt++],requestOptions);
      setFeedbackData(feedbackDataNow.data);
      setLoading(0);
    } catch(err) {
      setLoading(0);
    }
  };
    const feedbackHandler = async(e) =>{
        // Creates a feedback in the database
        setLoading(1);
        e.preventDefault();
        let backendLink = process.env.REACT_APP_BACKEND,accessToken = "123",cnt = 0;
        let link = ["/api/users/addFeedback",`/api/users/getFeedback/${userName}`];
        let requestOptions = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        };
        try {
        await axios.post(backendLink + link[cnt++],JSON.stringify({feedback,userName,name}),requestOptions);
        const feedbackDataNow = await axios.get(backendLink + link[cnt++],requestOptions);
        setFeedbackData(feedbackDataNow.data);
        setLoading(0);
        } catch(err) {
        setLoading(0);
        }
    }
  useEffect(()=>{
    serviceTicketUtil();
  },[]);
  if (loading) return <Loading/>;
  else {
    return (
      <div>
        <Navbar name = {name}/>
        <ServiceTicket serviceTicketData = {serviceTicketData} show = {true} />
        <Feedback feedbackData = {feedbackData} feedbackHandler = {feedbackHandler} setFeedback={setFeedback}
        serviceTicketId = {serviceTicketId}/>
      </div>
    );
  }
};
