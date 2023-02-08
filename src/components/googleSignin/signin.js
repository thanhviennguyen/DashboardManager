import React, {useState, useEffect} from "react";
import {Form, Buttion, Card} from "react-bootstrap";
import {signInWithPopup} from "firebase/auth";
import { auth, provider } from "./config";
import Dashboard from "../dashboard";

function Signin(){
    const [value, setValue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        }) 
    }
    
    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })
    
    return (
        <>
        <Card>

        </Card>
        <div>
            Do you have a acount?
        </div>
        <div>
            {value?<Dashboard/>:
            <button onClick={handleClick}>Signin With Google</button>
            }
        </div>
        </>
    );
}


export default Signin;