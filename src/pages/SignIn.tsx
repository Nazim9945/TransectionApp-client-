import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Inputfield from "../components/Inputfield";



const SignIn = () => {
  return (
    <>
      <div>SignIn</div>
      <Inputfield label="userName" type="text" placeholder="abc@gmail.com" />
      <Inputfield label="password" type="password"/>
      <BottomWarning label="Signup"/>
      <Button label="Signin"/>

    </>
  );
}

export default SignIn