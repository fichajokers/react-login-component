import React from "react"
import BtnLoginComponent from '../BtnLogin/BtnLoginComponent'
import ForgotPassword from "../ForgotPassword/ForgotPasswordComponent"
import SignUpTextComponent from "../SignUp/SignUpText/SignUpTextComponent"
import { useForm } from 'react-hook-form'
import './FromLoginStyle.css'

const FormLoginComponent = () =>{
    const { 
        register, 
        formState: { errors },
        handleSubmit 
    } = useForm({
        mode : 'onChange'
    })

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <form className="formLoginContainer" onSubmit={ handleSubmit(onSubmit) }>
            <div className="formInput">
                <label>User</label>
                <input 
                    type="text"
                    {...register("user", { 
                        required: "Required field", 
                        minLength: {
                            value: 10,
                            message : "Min length is 10"
                        }
                    })}
                />
                {errors.user && <span className="errorMessage">{errors.user.message}</span>}
            </div>
            <div className="formInput">
                <label>Password</label>
                <input 
                    type="password"
                    {...register("password", { 
                        required: "Required field", 
                        minLength: {
                            value: 10,
                            message: "Min length is 10"
                        } 
                    })}
                />
                {errors.password && <span className="errorMessage">{errors.password.message}</span>}
            </div>
            <BtnLoginComponent></BtnLoginComponent>
            <ForgotPassword></ForgotPassword>
            <SignUpTextComponent></SignUpTextComponent>
        </form>
    )
}

export default FormLoginComponent