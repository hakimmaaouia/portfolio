import React,{useState} from "react"
import "./Contact.css"
const Contact=()=>{
const [Name, setName] = useState("");
const [Email, setEmail] = useState("");
const [Message,setMessage] = useState("");


const sendEmail=()=> {
    fetch(`http://127.0.0.1:4000/send-email?sender=${Email}&name=${Name}&message=${Message}`) //query string url
      .catch(err => console.error(err))
  }

    return(
<div>
<input type="text" name="Name"  onChange={(evet)=>setName(evet.target.value)}></input>
<input type="text" name="Email"  onChange={(evet)=>setEmail(evet.target.value)}></input>
<input type="text" name="Message" onChange={(evet)=>setMessage(evet.target.value)}></input>
<button onClick={()=>sendEmail()}> Send Email </button>
    </div>
    )
}
export default Contact