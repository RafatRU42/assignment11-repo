import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ShowServices = ({service}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-5">
            
        <figure>
        <PhotoProvider>
      <PhotoView src={service.image}>
      <img src={service.image} alt="/" />
      </PhotoView>
    </PhotoProvider>
         </figure>
        <div className="card-body">
          <h2 className="card-title">{service.name}</h2>
          <p>{service.description.substring(0,100)+'...'}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> 
    );
};

export default ShowServices;