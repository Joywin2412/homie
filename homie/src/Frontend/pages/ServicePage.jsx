import  React, {useState,useEffect} from "react";
import { Navbar } from "../components/Navbar";
import { ServiceTicket } from "../components/ServiceTicket";
import axios from "axios";
import { Feedback } from "../components/Feedback";
import { ServiceProducer } from "../components/ServiceProducer";
import { ServiceProducerPage } from "./ServiceProducerPage";
export const ServicePage = () => {
  const [loading, setLoading] = useState(1);
  const [serviceTicketData, setServiceTicketData] = useState([]);
  const [serviceProducerData,setServiceProducerData] = useState([]);
  const [problem,setProblem] = useState("")
  const [feedbackData,setFeedbackData] = useState([]);
  const serviceTicketUtil = async () => {
    // Gets the service tickets of the user
    let backendLink = process.env.REACT_APP_BACKEND,cnt = 0,accessToken;
    const loggendinUser = localStorage.getItem("user");
    if(loggendinUser)
    {
      const foundUser = JSON.parse(loggendinUser);
      accessToken = foundUser.token;
    }
    let link = ["/api/users/getServiceTickets","/api/users/getServiceProducer"];
    let requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const serviceTicketDataNow = await axios.get(backendLink + link[cnt++],requestOptions);
      setServiceTicketData(serviceTicketDataNow.data);
      const serviceProducerData = await axios.get(backendLink + link[cnt++],requestOptions);
      setServiceProducerData(serviceProducerData.data);
      setLoading(0);
    } catch(err) {
      setLoading(0);
    }
  };
  const serviceTicketHandler = async(e) =>{
    // Creates a service ticket in the database
    setLoading(1);
    e.preventDefault();
    let backendLink = process.env.REACT_APP_BACKEND,accessToken = "123",cnt = 0;
    let link = ["/api/users/addServiceTickets","/api/users/getServiceTickets"];
    let requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      await axios.post(backendLink + link[cnt++],JSON.stringify({problem}),requestOptions);
      const serviceTicketDataNow = await axios.get(backendLink + link[cnt++],requestOptions);
      setServiceTicketData(serviceTicketDataNow.data);
      setLoading(0);
    } catch(err) {
      setLoading(0);
    }
  }
  useEffect(()=>{
    serviceTicketUtil();
  },[]);
  if (loading) return <h1> Loading </h1>;
  else {
    return (
      <div>
        <Navbar />
        <ServiceTicket serviceTicketData = {serviceTicketData} />
        <ServiceProducer serviceProducerData={serviceProducerData} />
        <form>
          <label> What is your problem? </label>
          <input type = "text" onChange = {(e) =>setProblem(e.target.value)} />
          <input type = "submit" onClick = {serviceTicketHandler} />
        </form>
      </div>
    );
  }
};
