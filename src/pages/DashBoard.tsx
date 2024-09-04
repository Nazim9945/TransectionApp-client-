import { ChangeEvent, useEffect, useState } from "react";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Inputfield from "../components/Inputfield";
import NavBar from "../components/NavBar";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { commonUrl } from "../config/commonUrl";
interface dataobj{
  id:string,
  firstName:string,
  lastName:string
}
interface fetchResponseUser{
  response:dataobj[]
}
interface userbalance{
  balance:string
}
const DashBoard = () => {
  const[value,setValue]=useState("")
  const[balance,setbalance]=useState("")
  const[users,setuser]=useState<dataobj[]>()
  const navigate=useNavigate()
 let timeid:number;
  useEffect(()=>{
    axios.get<userbalance>(`${commonUrl}/account/balance`,{
      headers:{
        token:localStorage.getItem("token")
      }
    }).then(res=>setbalance(res.data.balance))
  },[])
  useEffect(()=>{
    if(value){
      timeid = setTimeout(() => {
        axios
          .get<fetchResponseUser>(
            `${commonUrl}/user/getallusers?filter=${value}`,
            {
              headers: {
                token: localStorage.getItem("token"),
              },
            }
          )
          .then((res) => setuser(res.data.response));
      }, 500);
    }
    return ()=>clearTimeout(timeid)
   
  },[value])
  return (
    <>
      <NavBar />
      <div className="p-4 text-xl">
        <div>Your Balance:{`$${balance}`}</div>
        <div className="font-bold">Users</div>
        <div className="m-2">
          <Inputfield
            onhandler={(e: ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            type="text"
            placeholder="Search user..."
          />
        </div>

        {/* all-user */}
        <div>
          {users?.map((user) => (
            <div
              key={user.id}
              className="flex justify-between p-2 items-center"
            >
              <div className="flex gap-2 items-center">
                <Avatar latter={user?.firstName[0].toUpperCase()} />
                <div>{user?.firstName.toUpperCase()}</div>
                <div>{user?.lastName.toUpperCase()}</div>
              </div>
              <div>
                <Button
                  onsubmit={() =>
                    navigate(
                      `/transfer?id=${user.id}&&firstName=${user.firstName}`
                    )
                  }
                  label="Send Money"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DashBoard