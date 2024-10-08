import { Link } from "react-router-dom";

const BottomWarning = ({label}:{label:string}) => {
  return (
    <div className="text-center">
      {label !== "Signin" ? "Don't have an account" : "Already have an account"}?
      <Link to={`/${label}`}>
        <span className="underline">{label}</span>
      </Link>
    </div>
  )
}

export default BottomWarning