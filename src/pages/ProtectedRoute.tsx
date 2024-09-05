// import useCheck from "../config/useCheck"

import { Navigate, Outlet } from "react-router-dom";
// import useCheck from "../config/useCheck";
import { useEffect, useState } from "react";
import { commonUrl } from "../config/commonUrl";
import axios from "axios";



const ProtectedRoute = () => {
//   const data=useCheck()
//     console.log("inside protected route",data)
const [data, setData] = useState<boolean>();
console.log("reder():", data);
useEffect(() => {
  axios
    .get(`${commonUrl}/me`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) => (console.log("hey", res.data.msg), setData(res.data.msg)));
}, []);
 if(data===true){
    return <Outlet/>
 }
 else if(data===false) return <Navigate to={'/'}/>
 return <>Loding...</>
}

export default ProtectedRoute