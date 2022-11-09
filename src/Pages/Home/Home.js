import React from 'react';
import { useLoaderData } from 'react-router-dom';
import igm from '../../profile.jpg'
import './Home.css'

const Home = () => {

    const services = useLoaderData();
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl m-6">
                <figure><img className='imag' src={igm} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl text-center font-bold">Welcome to Our Tutorial Home!</h2>
                    <p className='text-2xl'>Ours is an age of modern Science. Day by day the world updated. So Why we will take ourself to the back side. We should try <br /> to develop Ourself. If we can not develop ourself we will not reach to our goal. <br />Best wishes for you. </p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <p>services: {services.length}</p>
        </div>

    );
};

export default Home;