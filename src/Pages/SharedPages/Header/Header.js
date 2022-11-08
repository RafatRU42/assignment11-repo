import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-info">
                <div className="flex-1">
                    <h1 className='fw-bold text-5xl text-slate-50 mx-7'>ICT Tutor Home</h1>
                </div>
                <div className="flex-none m-5">
                <button className="btn btn-outline btn-warning mx-2 bold">
                <Link to='/home'>Home</Link>
                </button>
                <button className="btn btn-outline btn-warning mx-2">
                <Link to='/service'>Service</Link>

                </button>
                <button className="btn btn-outline btn-warning mx-2">
                <Link to='/blog'>Blog</Link>

                </button>
                <button className="btn btn-outline btn-warning mx-2">
                <Link to='/login'>Login</Link>

                </button>

                 
                   
                </div>
            </div>
        </div>
    );
};

export default Header;