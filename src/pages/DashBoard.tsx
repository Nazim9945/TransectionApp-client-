import { ChangeEvent, useEffect, useState } from "react";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Inputfield from "../components/Inputfield"
import NavBar from "../components/NavBar";
import {   useNavigate} from "react-router-dom";
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
  balance:string,
  firstName:string
}
const DashBoard = () => {
  const navigate = useNavigate();
  const[value,setValue]=useState("")
  const[useraccount,setuseraccount]=useState<userbalance>({} as userbalance)
  const[users,setuser]=useState<dataobj[]>()
 
 let timeid:number;
  useEffect(()=>{
    axios.get<userbalance>(`${commonUrl}/account/balance`,{
      headers:{
        token:localStorage.getItem("token")
      }
    }).then(res=>(
      console.log(res.data),

      setuseraccount(res.data)
    ))
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
      <NavBar firstName={useraccount.firstName}/>
      <div className="p-4 text-xl">
        <div>Your Balance:{`$${useraccount.balance}`}</div>
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
          {value && users?.map((user) => (
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