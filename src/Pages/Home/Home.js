import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import igm from '../../profile.jpg'
import HomeService from '../HomeService/HomeService';
import UseTitle from '../UseTitle';
import './Home.css'

const Home = () => {
  UseTitle('Home')
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl m-6">
                <figure><img className='imag' src={igm} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl text-center font-bold">Welcome to Our Servicing Home!</h2>
                    <p className='text-2xl'>You Can Service Your damaged Smartphone at low Cost. I Will Service Your Phone with utmost importance. I am a Profetional <br /> mobile Servicer. No Tention about your phone. <br /> Any Kind of damaged of a phone we will solve. Customer Setisfection is our main target.  </p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <p className='font-bold text-2xl m-4 bg-red-300'>I Will Service Your Phone at a Low Cost !!</p>
            <div className='homeService'>
                {
                    service.map(srv => <HomeService service={srv}></HomeService>)
                }


            </div>
            <button className='butto btn btn-secondary m-5 font-bold text-2xl'><Link to='/services'>See All</Link></button>

            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/5yPScpJ8/images-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
     
    </div>
  </div> 

 
</div>

<div className="collapse my-4">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    About Me
  </div>
  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>I Can Service any kind of damaged phone. If you have any damaged phone please come to me with Your phone. I will try to solve your problem. Nothing to Tention.</p>
  </div>
</div>

        </div>

    );
};

export default Home;