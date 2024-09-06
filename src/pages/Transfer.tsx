import { useNavigate, useSearchParams } from "react-router-dom";
import Inputfield from "../components/Inputfield";
import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { commonUrl } from "../config/commonUrl";
import Avatar from "../components/Avatar";
import ButtonWaiting from "../components/ButtonWaiting";
import toast from "react-hot-toast";

const Transfer = () => {
  const[isAvailable,setisAvailable]=useState("")
  const[loading,setLoading]=useState(false)
     const [searchParams] = useSearchParams()
     const navigate=useNavigate()
     const[amount,setAmount]=useState("")
     const username=searchParams.get("firstName")
     const firstLatter = username?.[0].toUpperCase() || "";
       const id = searchParams.get("id");
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="rounded-md border-2 border-black w-[300px] gap-8 p-3">
        <div className="text-center font-semibold text-xl  mb-2">
          Send Money
        </div>

        <div>
          <Avatar latter={username?.[0].toUpperCase() || "U"} />

          <span className="text-xl font-semibold">
            {" "}
            {firstLatter + username?.slice(1)}
          </span>
        </div>
        <Inputfield
          onhandler={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(e.target.value)
          }
          type="text"
          placeholder="Enter Amt..."
        />
        {isAvailable.length > 0 && <div className="text-red-800 font-light italic underline">{isAvailable}</div>}

        {loading ? (
          <ButtonWaiting />
        ) : (
          <Button
            onsubmit={() => {
              setLoading(true);
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
                .then(
                  (res) => (
                    toast(
                      `Payment successful of ${amount} to ${username?.toUpperCase()}`
                    ),
                    setLoading(false),
                    console.log(res.data),
                    navigate("/dashboard")
                  )
                )
                .catch((err) => {
                  setLoading(false);
                  console.log(err.response.data);
                  setisAvailable(err.response.data.msg);
                  toast("Payment failed!!");
                });
            }}
            label="Intiate Transfer"
          />
        )}
      </div>
    </div>
  );
}

export default Transfer