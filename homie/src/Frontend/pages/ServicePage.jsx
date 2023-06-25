import  React, {useState,useEffect} from "react";
import { Navbar } from "../components/Navbar";
import { ServiceTicket } from "../components/ServiceTicket";
import axios from "axios";
import { Feedback } from "../components/Feedback";
import { ServiceProducer } from "../components/ServiceProducer";
import { ServiceProducerPage } from "./ServiceProducerPage";
import Loading from "../components/loading";
export const ServicePage = () => {
  const [loading, setLoading] = useState(1);
  const [serviceTicketData, setServiceTicketData] = useState([]);
  const [serviceProducerData,setServiceProducerData] = useState([]);
  
  let name;
  const loggendinUser = localStorage.getItem("user");
  if(loggendinUser)
  {
    const foundUser = JSON.parse(loggendinUser);
    name = foundUser.name;
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
  
  useEffect(()=>{
    serviceTicketUtil();
  },[]);
  if (loading) return <Loading n={name}/>;
  else {
    return (
      <div>
        <Navbar name = {name}/>
        <h1> Service Tickets: </h1>
        <ServiceTicket serviceTicketData = {serviceTicketData} />
        <h1> Service Producers:</h1>
        <ServiceProducer serviceProducerData={serviceProducerData} />
      </div>
    );
  }
};
