import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import { postRegis } from "../Redux/actions/authAction";

const Register = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch
    const {authReducer} = useSelector(state => state)

    const handleEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log(email,password);
        const payload ={
            email,
            password
        }
        dispatch(postRegis(payload))
    }
    console.log("auth", authReducer);

    return (
        <div>
            <Link to={'/'}>
             <button>Home</button>
            </Link>
            <h1>Register</h1>
            <input onChange={(e)=>handleEmail(e)} type="text" placeholder="email"/>
            <input onChange={(e)=>handlePassword(e)} type="text" placeholder="password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Register