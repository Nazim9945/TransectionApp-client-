
const BottomWarning = ({label}:{label:string}) => {
  return (
    <div>
     {label!=='Signin' ? "Did'nt have account":"Already have an account"}
     ?<span className="underline">{label}</span>
    </div>
  );
}

export default BottomWarning