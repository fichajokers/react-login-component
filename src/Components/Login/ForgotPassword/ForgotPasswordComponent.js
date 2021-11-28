import './ForgotPasswordStyle.css'

const ForgotPassword = () =>{
    
    const forgotPassword = () =>{
        console.log("forgot password")
    }

    return(
        <div className="forgotPassword" onClick={() => forgotPassword()}>Forgot password</div>
    )
}

export default ForgotPassword