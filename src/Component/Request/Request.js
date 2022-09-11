import axios from "axios";
import React, { useState } from "react";





export default function Request() {
  const [request, setRequest] = useState({
    name :"",
    Id_no: "",
    email: "",
    message: "",
    status: "request"
  });
  const handleRequest = (e) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value
    });
  }
  const handleRequestSubmit = async(e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/request', request)
    .then(res=>{
      console.log(res);
      if(res.status === 200){
        alert('Request Send');
      }
    })
  }
  return (
      
             <section className="contact-area">
        <div className="contact-container">
            <div className="section-title">
                <h2>Contact Us</h2>
            </div>
            <div className="contact">
                <div className="contact-form1">
                    <form onSubmit={handleRequestSubmit}>
                       <input className="form-control px-2" type="text" name="name" placeholder="Your name" onChange={handleRequest}/>
                       <input className="form-control px-2" type="email" name="email" placeholder="Your email" onChange={handleRequest}/>
                       <input className="form-control px-2" type="text" name="Id_no" placeholder="Student ID number" onChange={handleRequest}/>
                       <textarea className="form-control" name="message" id="" placeholder="Message" onChange={handleRequest}/>
                       
                       <input type="submit" value="send"/>

                    </form>
                </div>
            </div>
        </div>
    </section>
       
  )
}
