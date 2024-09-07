import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Inputfield from "../components/Inputfield";
import { commonUrl } from "../config/commonUrl";
import { useNavigate } from "react-router-dom";
import ButtonWaiting from "../components/ButtonWaiting";
import toast from "react-hot-toast";
import axios from "axios";



const SignIn = () => {
  const[isAvailable,setisAvailable]=useState("")
  const[loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const[formdata,setFormData]=useState({
    email:"", password:""
  })
 
  const signinfunction=async()=>{
    setLoading(true)
    axios.post(`${commonUrl}/user/signin`,formdata).then((res)=>{
      setLoading(false)
      localStorage.setItem("token", "Bearer " + res.data.token);
      toast("Logged in successfully");
      navigate(`/dashboard`);
    }).catch(error=>{
      setLoading(false);
       setisAvailable(error?.response?.data?.msg);
      console.log(error?.response?.data);
    });
 
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
        {isAvailable.length > 0 && (
          <div className="text-red-800 font-light italic underline">
            {isAvailable}
          </div>
        )}
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