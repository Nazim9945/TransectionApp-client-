import Avatar from "./Avatar";

const NavBar = () => {
  return (
    <div className="flex justify-between p-5 items-center bg-slate-100 border-b-2 text-2xl">
      <div className=" font-semibold">Payments App</div>
      <div>
        <div>
          Hello, User
         <Avatar latter={"U"}/>
        </div>
      </div>
    </div>
  );
}

export default NavBar