import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import LogOut from "./LogOut";
import toast from "react-hot-toast";


const NavBar = ({firstName}:{firstName:string}) => {
  const first=firstName?.[0] || 'u'
  const navigate=useNavigate()
  return (
    <div className="flex justify-between p-5 items-center bg-slate-100 border-b-2 text-xl">
      <div className="font-semibold hover:underline">
        <Link to={"/"}>Payments App</Link>
      </div>
      <div>
        <div>
          Hello,{" "}
          <span className="font-semibold">
            {first.toUpperCase()}
            <span>{firstName?.slice(1)}</span>
          </span>
          <Link to={`/mepoint?name=${firstName}`}>
            <Avatar latter={firstName?.[0].toUpperCase()} />
          </Link>
          <LogOut
            onPress={() => {
              localStorage.removeItem("token");
              navigate("/");
              toast("You've logged out!");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar