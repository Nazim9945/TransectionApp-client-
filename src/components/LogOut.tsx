

interface Props{
    onPress:()=>void
}
const LogOut = ({onPress}:Props) => {
  return <button onClick={()=>onPress()} className="bg-black p-2 rounded-md text-white">Logout</button>;
}

export default LogOut