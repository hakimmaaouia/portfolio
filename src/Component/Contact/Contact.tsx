import React, { useState } from "react";
import Bottom from "../Bottom/Bottom";
import Avatar from "../Avatar/Avatar"
import "./Contact.css";
const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const sendEmail = () => {
    fetch(
      `http://127.0.0.1:4000/send-email?sender=${Email}&name=${Name}&message=${Message}`
    ) //query string url
      .catch((err) => console.error(err));
  };

  return (
    <div className="contactContainer">
      <h1 className="titleContainer">
        Thanks for taking the time to reach out. How can I help you today?
      </h1>

      <Avatar/>
      <div className="form">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            onChange={(evet) => setName(evet.target.value)}
          ></input>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="Email"
            onChange={(evet) => setEmail(evet.target.value)}
          ></input>
        </div>
        <div className="inputtest">
          <label>Message:</label>
          <textarea
            name="Message"
            onChange={(evet) => setMessage(evet.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="fontsize">
      <Bottom onClick={() => sendEmail()}>Send Email</Bottom>
      </div>
    </div>
  );
};
export default Contact;
