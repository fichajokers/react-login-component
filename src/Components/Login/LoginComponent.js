import FormLoginComponent from "./FormLogin/FromLoginComponent"
import './LoginStyle.css'

const LoginComponent = () =>{
    return(
        <div className="container">
            <div className="loginContainer">
                <div className="componentCenter">
                    <FormLoginComponent/>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent