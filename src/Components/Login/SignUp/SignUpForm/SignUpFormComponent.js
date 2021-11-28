const SignUpFormComponent = () =>{
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        console.log('form sign up')
    }
    return (
        <form className="formLoginContainer" onSubmit={handleSubmit}>
            <div className="formInput">
                <label>First Name</label>
                <input type="name" name="first_name" required></input>
            </div>
            <div className="formInput">
                <label>Last Name</label>
                <input type="name" name="last_name" required></input>
            </div>
            <div className="formInput">
                <label>Email</label>
                <input type="email" name="email" required></input>
            </div>
            <div className="formInput">
                <label>Password</label>
                <input type="password" name="password" required></input>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUpFormComponent