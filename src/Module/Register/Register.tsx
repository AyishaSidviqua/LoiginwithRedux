import React from "react";
import PreRegister from "../PreRegister/PreRegister";
import { Card } from "primereact/card"
import { useNavigate } from "react-router-dom";
import "./Register.scss"


const Register = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("preRegister")
    }
    const handleNavigate=()=>{
        navigate("postRegister")
    }
    const handleLogin=()=>{
        navigate("logins")
    }
    return (
        <div>
            <Card className="card1" title="PreRegister" onClick={handleClick}>
              
            </Card>
            <Card title="PostRegister" onClick={handleNavigate}>
              
              </Card>
              <Card title="Login" onClick={handleLogin}>

              </Card>
        </div>
    )
}
export default Register