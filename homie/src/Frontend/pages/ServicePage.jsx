import  React, {useState,useEffect} from "react";
import { Navbar } from "../components/Navbar";
import { ServiceTicket } from "../components/ServiceTicket";
import axios from "axios";
import { Feedback } from "../components/Feedback";
import { ServiceProducer } from "../components/ServiceProducer";
import { ServiceProducerPage } from "./ServiceProducerPage";

import "./servicepage.module.css";

import Loading from "../components/loading";

export const ServicePage = () => {
  const [loading, setLoading] = useState(1);
  const [serviceTicketData, setServiceTicketData] = useState([]);
  const [serviceProducerData,setServiceProducerData] = useState([]);
  
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
    let link = [`/api/users/getServiceTickets/${email}`,"/api/users/getServiceProducer"];
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

      
        <body className="bodymain">
      <div className="bodyServicePage">
        <Navbar className="nameServicePage" name = {name}/>

      <div>
        <Navbar name = {name}/>
        <h1> Service Tickets: </h1>

        <ServiceTicket serviceTicketData = {serviceTicketData} />
        <h1> Service Producers:</h1>
        <ServiceProducer serviceProducerData={serviceProducerData} />

        <form className="formServicePage">
          <label className="labelServicePage"><h1>What is your problem?</h1> </label>
          <input type = "text" className="textboxServicePage" onChange = {(e) =>setProblem(e.target.value)} />
          <input type = "submit"className="submitServicePage" onClick = {serviceTicketHandler} />
        </form>

      </div>
      </body>
      
    );
  }
};
