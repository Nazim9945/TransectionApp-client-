import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Inputfield from "../components/Inputfield";
import { commonUrl } from "../config/commonUrl";
import { useNavigate } from "react-router-dom";



const SignIn = () => {
  const navigate=useNavigate()
  const[formdata,setFormData]=useState({
    email:"", password:""
  })
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdata),
  };
  const signinfunction=async()=>{
    const res=await fetch(`${commonUrl}/user/signin`,options)
    const data=await res.json()
    localStorage.setItem("token","Bearer " + data.token)
    navigate(`/dashboard?Hi=${data.firstName}`);
  }
  return (
    <>
      <div>SignIn</div>
      <Inputfield
        onhandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formdata, [e.target.name]: e.target.value })
        }
        label="Email"
        type="text"
        placeholder="abc@gmail.com"
        name="email"
        
      />
      <Inputfield
        onhandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formdata, [e.target.name]: e.target.value })
        }
        label="password"
        type="password"
        name="password"
        
      />
      <BottomWarning label="Signup" />
      <Button onsubmit={()=>(
      signinfunction()
      )} label="Signin" />
    </>
  );
}

export default SignIn