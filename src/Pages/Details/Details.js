import React from 'react';

const Details = ({servicing}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-5">
  <figure><img src={servicing.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{servicing.name}</h2>
    <p>{servicing.description.substring(0,100)+'...'}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Details;