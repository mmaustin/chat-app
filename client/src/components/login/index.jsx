import { usePostLoginMutation, usePostRegisterMutation } from "@/state/api";
import { useState, useEffect } from "react";

const Login = () => {

    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [triggerLogin, resultLogin] = usePostLoginMutation();
    const [triggerRegister] = usePostRegisterMutation();

    const handleLogin = () => {
        triggerLogin({username, password});
    }

    const handleRegister = () => {
        triggerRegister({username, password});
    }

  return (
    <div>Login</div>
  )
}
export default Login