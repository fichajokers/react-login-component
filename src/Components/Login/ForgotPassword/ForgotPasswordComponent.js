import './ForgotPasswordStyle.css'

const ForgotPasswordComponent = () =>{
    
    const forgotPassword = () =>{
        console.log("forgot password")
    }

    return(
        <div className="forgotPassword" onClick={() => forgotPassword()}>Forgot password</div>
    )
}

export default ForgotPasswordComponent