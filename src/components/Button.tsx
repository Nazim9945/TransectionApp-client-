interface Props{
    label:string
}
const Button = ({label}:Props) => {
  return (
   
        <button className="bg-black text-white p-2 font-semibold rounded-md">
            {label}
        </button>
    
  )
}

export default Button