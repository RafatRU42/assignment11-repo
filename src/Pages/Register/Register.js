import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import { authContext } from '../SharedPages/AuthContext/AuthContext';

const Register = () => {

    const {RegisterTheUser} = useContext(authContext)


    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(name, email,password)

        RegisterTheUser(email,password)
        .then(result => {
            console.log(result)
            form.reset()
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    </div>
    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Register Now!</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="Your Name" name='name' className="input input-bordered" />
        </div>
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
            <p>Already Have an Account? Please <Link className='bg-success p-1 rounded' to={'/login'}>Login</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default Register;