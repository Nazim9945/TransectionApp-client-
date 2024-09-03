interface Props{
    label:string,
    type:string,
    placeholder?:string,

}
const Inputfield = ({label,type,placeholder}:Props) => {
  return (
    <div>
        <label>
            <div>{label}</div>
            <input type={type} placeholder={placeholder} />
        </label>

    </div>
  )
}

export default Inputfield