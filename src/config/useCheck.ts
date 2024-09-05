import axios from "axios"
import { useEffect, useState } from "react"
import { commonUrl } from "./commonUrl"

interface fetchData{
    msg:boolean
}

const useCheck = () => {
    const[data,setData]=useState<boolean>()
    console.log("reder():",data)
    useEffect(()=>{
        axios
          .get<fetchData>(`${commonUrl}/me`, {
            headers: {
              token: localStorage.getItem("token"),
            },
          })
          .then((res) => (console.log("hey",res.data.msg),setData(res.data.msg)));
    },[])
    return data

}

export default useCheck