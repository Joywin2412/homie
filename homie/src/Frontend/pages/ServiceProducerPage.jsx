import  React, {useState,useEffect} from "react";
import { Navbar } from "../components/Navbar";
import { ServiceTicket } from "../components/ServiceTicket";
import axios from "axios";
import { Feedback } from "../components/Feedback";
import { ServiceProducer } from "../components/ServiceProducer";
import Loading from "../components/loading";
import { useParams } from "react-router-dom";

export const ServiceProducerPage = ({serviceProducerData}) => {
  let userName = useParams();
  userName = userName.id;
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
  const serviceTicketHandler = async(e) =>{
    // Creates a service ticket in the database
    setLoading(1);
    e.preventDefault();
    let backendLink = process.env.REACT_APP_BACKEND,accessToken = "123",cnt = 0;
    let link = ["/api/users/addServiceTickets",`/api/users/getProdServiceTickets/${email}/${userName}`];
    let requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      await axios.post(backendLink + link[cnt++],JSON.stringify({problem,userName,email}),requestOptions);
      const serviceTicketDataNow = await axios.get(backendLink + link[cnt++],requestOptions);
      setServiceTicketData(serviceTicketDataNow.data);
      setLoading(0);
    } catch(err) {
      setLoading(0);
    }
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
    let link = [`/api/users/getProdServiceTickets/${email}/${userName}`];
    let requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const serviceTicketDataNow = await axios.get(backendLink + link[cnt++],requestOptions);
      setServiceTicketData(serviceTicketDataNow.data);
      setLoading(0);
    } catch(err) {
      setLoading(0);
    }
  };
  const feedbackUtil = async () => {
    // Gets the feedback of all user
        let backendLink = process.env.REACT_APP_BACKEND,accessToken = "123",cnt = 0;4
        const loggendinUser = localStorage.getItem("user");
        if(loggendinUser)
        {
          const foundUser = JSON.parse(loggendinUser);
          accessToken = foundUser.token;
        }
        let link = [`/api/users/getFeedback/${userName}`];
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
    
  useEffect(()=>{
    feedbackUtil();
    serviceTicketUtil();
  },[]);
  if (loading) return <Loading/>;
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

      <div>
        <Navbar name = {name}/>
        <ServiceTicket serviceTicketData = {serviceTicketData} show = {false}/>
        <form>
          <label> What is your problem? </label>
          <input type = "text" onChange = {(e) =>setProblem(e.target.value)} />
          <input type = "submit" onClick = {serviceTicketHandler} />
        </form>

        <Feedback feedbackData = {feedbackData} feedbackHandler = {feedbackHandler} setFeedback={setFeedback}/>


      </div>
    );
    
  }
};
