import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import LogOut from "./LogOut";

const NavBar = ({firstName}:{firstName:string}) => {
  const navigate=useNavigate()
  return (
    <div className="flex justify-between p-5 items-center bg-slate-100 border-b-2 text-2xl">
      <div className=" font-semibold">
        <Link to={'/'}>Payments App</Link>
      </div>
      <div>
        <div>
          Hello, {firstName}
          <Avatar latter={firstName?.[0]} />
          <LogOut
            onPress={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar