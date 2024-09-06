interface Props{
    label:string,
    onsubmit:()=>void
}
const Button = ({label,onsubmit}:Props) => {
  return (
   
        <button type="submit" onClick={()=>onsubmit()} className="bg-black text-white p-2 font-semibold rounded-md w-full mt-4">
            {label}
        </button>
    
  )
}

export default Button