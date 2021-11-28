import { useForm } from 'react-hook-form'

const SignUpFormComponent = () =>{
    const { 
        register, 
        formState: { errors },
        handleSubmit 
    } = useForm({
        mode : 'onChange'
    })

    const onSubmit = data =>{
        console.log(data)
    }
    return (
        <form className="formLoginContainer" onSubmit={handleSubmit(onSubmit)}>
            <div className="formInput">
                <label>First Name</label>
                <input 
                    type="text"
                    {...register("firstName", { 
                        required: "Required field", 
                        minLength: {
                            value: 5,
                            message : "Min length is 5"
                        }
                    })}
                />
                {errors.firstName && <span className="errorMessage">{errors.firstName.message}</span>}
            </div>
            <div className="formInput">
                <label>Last Name</label>
                <input 
                    type="text"
                    {...register("lastName", { 
                        required: "Required field", 
                        minLength: {
                            value: 5,
                            message : "Min length is 5"
                        }
                    })}
                />
                {errors.lastName && <span className="errorMessage">{errors.lastName.message}</span>}
            </div>
            <div className="formInput">
                <label>Email</label>
                <input 
                    type="email"
                    {...register("email", { 
                        required: "Required field", 
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid email address"
                        }
                    })}
                />
                {errors.email && <span className="errorMessage">{errors.email.message}</span>}
            </div>
            <div className="formInput">
                <label>Password</label>
                <input 
                    type="password"
                    {...register("password", { 
                        required: "Required field", 
                        minLength: {
                            value: 5,
                            message : "Min length is 5"
                        }
                    })}
                />
                {errors.password && <span className="errorMessage">{errors.password.message}</span>}
            </div>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUpFormComponent