import { Link } from 'react-router-dom'
import './SignUpTextStyle.css'

const SignUpTextComponent = () =>{
    return(
        <Link to="/signup">
            <div className="SignUp" to="/signup">Sign Up</div>
        </Link>
    )
}

export default SignUpTextComponent