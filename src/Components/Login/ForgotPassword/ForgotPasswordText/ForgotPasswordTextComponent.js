import './ForgotPasswordTextStyle.css'
import { Link } from 'react-router-dom'

const ForgotPasswordText = () => {

    const forgotPasswordText = () => {
        console.log( 'Forgot password' )
    }

    return (
        <Link to="/forgotPassword">
            <div className="forgotPasswordText" to="/forgotPassword">Forgot Password</div>
        </Link>
    )

}

export default ForgotPasswordText