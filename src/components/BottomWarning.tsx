import { Link } from "react-router-dom";

const BottomWarning = ({label}:{label:string}) => {
  return (
    <div>
      {label !== "Signin" ? "Did'nt have account" : "Already have an account"}?
      <Link to={`/${label}`}>
        <span className="underline">{label}</span>
      </Link>
    </div>
  )
}

export default BottomWarning