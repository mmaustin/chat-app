import { usePostLoginMutation, usePostRegisterMutation } from "@/state/api";
import { useState, useEffect } from "react";

const Login = ({setUser, setSecret}) => {

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

    useEffect(() => {
      if(resultLogin?.data){
        setUser(username);
        setSecret(password);
      }
    }, [resultLogin.data]) //eslint-disable-line
    

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="title">CHATGPT APP</h2>
        <p className="register-change" onClick={()=> setIsRegister(!isRegister)}>
          {isRegister ? "Already a User?" : "Are you a new User?"}
        </p>
        <div>
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <div className="login-actions">
          {isRegister ? (
            <button type="button" onClick={handleRegister}>Register</button>
          ) : (
            <button type="button" onClick={handleLogin}>Login</button>
          )}
        </div>
      </div>
    </div>
  )
}
export default Login