interface Props{
    label:string,
    onsubmit:()=>void
}
const Button = ({label,onsubmit}:Props) => {
  return (
   
        <button onClick={()=>onsubmit()} className="bg-black text-white p-2 font-semibold rounded-md">
            {label}
        </button>
    
  )
}

export default Button