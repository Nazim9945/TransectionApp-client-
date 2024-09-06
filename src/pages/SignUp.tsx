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
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-[400px] border-2 border-black justify-center gap-16 p-3 bg-slate-200 rounded-md">
        <div className="font-bold text-3xl text-center">SignUp</div>
        <div className="w-full space-y-2">
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
        </div>
        <Button
          onsubmit={() =>
            axios.post(`${commonUrl}/user/signup`, formdata).then((res) => {
              localStorage.setItem("token", "Bearer " + res.data.token);
              navigate(`/dashboard`);
            })
          }
          label="Signup"
        />
        <BottomWarning label="Signin" />
      </div>
    </div>
  );
}

export default SignUp