import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../UseTitle';
import './Details.css'

const Details = () => {
  UseTitle('Details')
  const servicing = useLoaderData();
  console.log('ser',servicing)
    return (
        <div className='details'>
            <div className="card w-96 bg-base-100 shadow-xl m-5">
  <figure><img src={servicing.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{servicing.name}</h2>
    <p>{servicing.description}</p>
    <div className="card-actions justify-end">
      <p className='text-2xl font-bold'>Price: ${servicing.Price}</p>
    </div>
  </div>
</div> 
<div>
  <h1 className='text-3xl font-bold'><u> Add Your Review For This Service </u> </h1>
</div>

<div>
  <h2 className='text-3xl font-bold'><u>Others Review For This Service</u></h2>
</div>

        </div>
    );
};

export default Details;