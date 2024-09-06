import axios from "axios";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { commonUrl } from "../config/commonUrl";
import toast from "react-hot-toast";

const Mepoint = () => {
    const navigate=useNavigate()
    const [searchParams]=useSearchParams();
    const firstName=searchParams.get("name")
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-2xl text-red-400 italic text-center p-2  max-w-[400px] border mt-2 space-y-4 rounded-md">
        <div className="underline">Account Deactivate Section</div>
        <div className="underline">{firstName?.toUpperCase()}</div>
        <button onClick={async()=>{
            await axios.delete(`${commonUrl}/user/deleteAccount`, {
              headers: {
                token: localStorage.getItem("token"),
              },
            }).then(()=>{
                localStorage.removeItem("token")
                toast("Account Deactivate Successfully!!")
                navigate('/')
            }).catch(err=>{
                console.log(err.response.data)
            })
        }} className="bg-red-950 text-white rounded-md p-2 w-full">
          Deactivate Now
        </button>
      </div>
    </div>
  );
}

export default Mepoint