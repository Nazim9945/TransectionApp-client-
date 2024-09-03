import { useNavigate, useSearchParams } from "react-router-dom";
import Inputfield from "../components/Inputfield";
import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { commonUrl } from "../config/commonUrl";

const Transfer = () => {
     const [searchParams] = useSearchParams()
     const navigate=useNavigate()
     const[amount,setAmount]=useState("")
     const username=searchParams.get("firstName")
       const id = searchParams.get("id");
  return (
    <div className="border-2 border-slate-300">
      <div>Send Money</div>
      <div>
        <div>
          {username}
          <span className="rounded-full bg-black text-white p-2 ml-2">
            {username?.[0].toUpperCase()}
          </span>
        </div>
      </div>
      <Inputfield
        onhandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAmount(e.target.value)
        }
        type="text"
        placeholder="Enter Amt..."
      />
      <Button
        onsubmit={() =>
          axios
            .post(
              `${commonUrl}/account/transfer`,
              {
                to: id,
                amount: amount,
              },
              {
                headers: {
                  token: localStorage.getItem("token"),
                },
              }
            )
            .then((res) =>(
                console.log(res.data),
                navigate('/dashboard')
            ) )
        }
        label="Intiate Transfer"
      />
    </div>
  );
}

export default Transfer