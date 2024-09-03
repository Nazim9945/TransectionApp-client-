import { ChangeEvent, useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Inputfield from "../components/Inputfield"
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { commonUrl } from "../config/commonUrl";

const SignUp = () => {
  const navigate=useNavigate()
  const[formdata,setFormdata]=useState({
    firstName:"",lastName:"",email:"",password:""
  })
  return (
    <div className="">
      <div>SignUp</div>
      <Inputfield
        onhandler={(e: ChangeEvent<HTMLInputElement>) =>
          setFormdata({ ...formdata, [e.target.name]: e.target.value })
        }
        label="FirstName"
        name="firstName"
        type="text"
        placeholder="Jhon"
        
      />
      <Inputfield
        onhandler={(e: ChangeEvent<HTMLInputElement>) =>
          setFormdata({ ...formdata, [e.target.name]: e.target.value })
        }
        label="LastName"
        name="lastName"
        type="text"
        placeholder="Doe"
        
      />
      <Inputfield
        onhandler={(e: ChangeEvent<HTMLInputElement>) =>
          setFormdata({ ...formdata, [e.target.name]: e.target.value })
        }
        label="Email"
        name="email"
        type="text"
        placeholder="Jhon@gmail.com"
        
      />
      <Inputfield
        onhandler={(e: ChangeEvent<HTMLInputElement>) =>
          setFormdata({ ...formdata, [e.target.name]: e.target.value })
        }
        label="Password"
        name="password"
        type="password"
        
      />
      <BottomWarning label="Signin" />
      <Button onsubmit={()=>(
      axios.post(`${commonUrl}/user/signup`,formdata).then(()=>{
        navigate('/dashboard');
      })
       
        
      )} label="Signup" />
    </div>
  );
}

export default SignUp