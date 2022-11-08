import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthContext/AuthContext';

const Header = () => {
    const { user, logOut } = useContext(authContext)


    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => { })
    }


    return (
        <div>
            <div className="navbar bg-info">
                <div className="flex-1">
                    <h1 className='font-bold text-5xl text-slate-50 mx-7'>ICT Tutor Home</h1>
                </div>
                <div className="flex-none m-5">
                    <button className="btn btn-success mx-2 bold">
                        <Link to='/home'>Home</Link>
                    </button>

                    <button className="btn btn-success mx-2">
                        <Link to='/blog'>Blog</Link>
                    </button>
                    {user?.email ?

                        <>
                            <button className="btn btn-success mx-2">
                                <Link to='/service'>Service</Link>

                            </button>
                            <button className="btn btn-success mx-2">
                                <Link to='/reviews'>Reviews</Link>

                            </button>

                            <button onClick={handleLogout} className="btn btn-success mx-2">
                                <Link to='/login'>Logout</Link>

                            </button>
                        </> :
                        <button className="btn btn-success mx-2">
                            <Link to='/login'>Login</Link>

                        </button>

                    }







                </div>
            </div>
        </div>
    );
};

export default Header;