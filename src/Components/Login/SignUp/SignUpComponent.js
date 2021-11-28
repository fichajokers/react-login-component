import { Link } from 'react-router-dom'
import SignUpFormComponent from './SignUpForm/SignUpFormComponent'
import './SignUpStyle.css'

const SignUpComponent = () => {
    return(
        <div className="container">
            <div className="loginContainer">
                <div className="componentCenter">
                    <SignUpFormComponent/>
                    <Link to="/">
                        <button>Go back</button>
                    </Link>
                </div>
            </div>
        </div>                
    )
}

export default SignUpComponent