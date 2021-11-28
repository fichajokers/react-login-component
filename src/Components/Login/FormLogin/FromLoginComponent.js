import React from "react"
import BtnLoginComponent from '../BtnLogin/BtnLoginComponent'
import ForgotPassword from "../ForgotPassword/ForgotPasswordComponent"
import SignUpTextComponent from "../SignUp/SignUpText/SignUpTextComponent"
import './FromLoginStyle.css'

const FormLoginComponent = () =>{

    const handleSubmit = event => {
        event.preventDefault()
        
        let formData = {
            'user'      : event.target.user.value,
            'password'  : event.target.password.value
        }
        console.log(formData)
    }

    return (
        <form className="formLoginContainer" onSubmit={handleSubmit}>
            <div className="formInput">
                <label>User</label>
                <input type="text" name="user" required></input>
            </div>
            <div className="formInput">
                <label>Password</label>
                <input type="password" name="password" required></input>
            </div>
            <BtnLoginComponent></BtnLoginComponent>
            <ForgotPassword></ForgotPassword>
            <SignUpTextComponent></SignUpTextComponent>
        </form>
    )
}

export default FormLoginComponent