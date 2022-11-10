import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const HomeService = ({service}) => {
    console.log(service)
    return (
<div className="card w-96 bg-base-100 shadow-xl m-5">
  <figure>

  <PhotoProvider>
      <PhotoView src="/1.jpg">
      <img src={service.image} alt="Shoes" />

      </PhotoView>
    </PhotoProvider>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{service.name}</h2>
    <p>{service.description.substring(0,100)+'...'}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link to ={`/services/${service._id}`}>Details</Link></button>
    </div>
  </div>
</div>    );
};

export default HomeService;