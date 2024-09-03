import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Inputfield from "../components/Inputfield"

const SignUp = () => {
  return (
    <div className="w-[300px] border-black border-2">
      <div>SignUp</div>
      <Inputfield label="FirstName" type="text" placeholder="Jhon" />
      <Inputfield label="LastName" type="text" placeholder="Doe" />
      <Inputfield label="UserName" type="text" placeholder="Jhon@gmail.com" />
      <Inputfield label="Password" type="password" />
      <BottomWarning label="Signin"/>
      <Button label="Signup"/>
    </div>
  );
}

export default SignUp