import  React, {useState,useEffect} from "react";
import { Navbar } from "../components/Navbar";
import { ServiceTicket } from "../components/ServiceTicket";
import axios from "axios";
import {Profile} from "../components/Profile";
export const ProfilePage = () => {
  const [loading, setLoading] = useState(1);
  const [serviceTicketData, setServiceTicketData] = useState([]);
  const [serviceProducerData,setServiceProducerData] = useState([]);
  const [profileData,setProfileData] = useState("")
  let name;
  const loggendinUser = localStorage.getItem("user");
  if(loggendinUser)
  {
    const foundUser = JSON.parse(loggendinUser);
    name = foundUser.name;
  }
  const profileUtil = async () => {
    // Gets the service tickets of the user
    let backendLink = process.env.REACT_APP_BACKEND,cnt = 0,accessToken,email;
    const loggendinUser = localStorage.getItem("user");
    if(loggendinUser)
    {
      const foundUser = JSON.parse(loggendinUser);
      accessToken = foundUser.token;
      email = foundUser.email;
    }
    let link = ["/api/users/getServiceTickets",`/api/users/profile/${email}`];
    let requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const serviceTicketDataNow = await axios.get(backendLink + link[cnt++],requestOptions);
      setServiceTicketData(serviceTicketDataNow.data);
      let profileDataNow = await axios.get(backendLink + link[cnt++],requestOptions);
      setProfileData(profileDataNow.data);
      setLoading(0);
    } catch(err) {
      setLoading(0);
    }
  };

  useEffect(()=>{
    profileUtil();
  },[]);
  if (loading) return <h1> Loading </h1>;
  else {
    return (
      <div>
        <Navbar name = {name}/>
        <ServiceTicket serviceTicketData = {serviceTicketData} />
        <Profile profileData = {profileData} />
      </div>
    );
  }
};
