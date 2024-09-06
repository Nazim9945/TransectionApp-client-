import { Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex justify-between items-center p-4 border-b-2 border-sky-300">
        <p className="text-2xl font-semibold">Payments</p>
        <div className="flex justify-between items-center p-2 gap-2">
          <button className="bg-black p-2 rounded-md text-white">
            <Link to={"/signin"}>Login</Link>
          </button>
          <button className="bg-black p-2 rounded-md text-white">
            <Link to={"/signup"}>Register</Link>
          </button>
        </div>
      </div>
      <div className="text-4xl m-auto">Make Your Transection Easy</div>
    </div>
  );
}

export default Home