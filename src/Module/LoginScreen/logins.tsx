import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { LoginMiddleWare } from "./store/loginMiddleWare";
import { useNavigate } from "react-router-dom";
import "./logins.scss"
// import { Formik } from 'formik';

const Logins:React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch:AppDispatch=useDispatch()
const navigate=useNavigate()
    const handleSubmit=()=>{
         const newData={email,password}
        dispatch(LoginMiddleWare(newData));
    }
   
    useEffect(() => {
        if (email === "ayesha@gmail.com" && password === "1235") {
          navigate('/preRegister');
        }
      }, [navigate]);
       
   
    return (
        <div >
           <div className="loginHead">
           <div>
                <InputText
                className="inputss"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <InputText
                className="inputss"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <Button
                   className="butn"
                    label="Submit"
                    onClick={handleSubmit}>
                </Button>
            </div>
           </div>
        </div>
    )
}
export default Logins