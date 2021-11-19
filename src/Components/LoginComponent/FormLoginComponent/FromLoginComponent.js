import React from "react"
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
            <button type="submit">Login</button>
        </form>
    )
}

export default FormLoginComponent