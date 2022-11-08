import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../SharedPages/AuthContext/AuthContext';

const Login = () => {
    const { loginUser,googleLogin } = useContext(authContext)


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                console.log(result)
                form.reset()
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(()=>{})
        .catch(() =>{})
    }

    return (
        <div>



            <div className="hero min-h-screen bg-base-200">
            
                <div className=" ">
                 
                <button onClick={handleGoogleLogin} className="btn btn-primary font-bold text-3xl my-4">Login With Google</button>

                  

                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <p>Don't Have an Account? Please <Link className='bg-success p-1 rounded' to='/register'>Register</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;