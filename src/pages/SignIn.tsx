import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Inputfield from "../components/Inputfield";
import { commonUrl } from "../config/commonUrl";
import { useNavigate } from "react-router-dom";
import ButtonWaiting from "../components/ButtonWaiting";
import toast from "react-hot-toast";



const SignIn = () => {
  const[loading,setLoading]=useState(false)
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
    setLoading(true)
    const res=await fetch(`${commonUrl}/user/signin`,options)
    const data=await res.json()
    localStorage.setItem("token","Bearer " + data.token)
    setLoading(false)
    toast("Logged in successfully")
    navigate(`/dashboard`);

  }
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-[400px] border-2 border-black  gap-16 p-3  bg-slate-200 rounded-md">
        <div className="font-bold text-3xl text-center">Sign In</div>
        <div className="w-full space-y-2">
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
        </div>
        <div className="min-w-full">
          {loading ? (
            <ButtonWaiting />
          ) : (
            <Button onsubmit={() => signinfunction()} label="Signin" />
          )}
        </div>
        <BottomWarning label="Signup" />
      </div>
    </div>
  );
}

export default SignIn