import React, { useContext } from 'react';
import { authContext } from '../SharedPages/AuthContext/AuthContext';

const AddService = () => {

    const {user} = useContext(authContext)
    console.log(user)

    const handleAddService = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.serviceName.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;
        console.log(name,image)
    }
    return (
        <div>
            <h1 className='text-3xl font-bold m-5'>You can Add Services !!</h1>
            <form onSubmit={handleAddService}>
                <div className='d-block'>
                    
           <input type="text" name='name' placeholder="Service Name" defaultValue={user?.displayName} className="m-3 input input-bordered input-secondary w-full max-w-xs" />
           <input type="email" placeholder="Your Email"  defaultValue={user?.email} className="m-3 input input-bordered input-secondary w-full max-w-xs" /> <br />
           <input type="text" placeholder="Service Name" name='serviceName'  className="m-3 input input-bordered input-secondary w-full max-w-xs" /> 
           <input type="text" placeholder="Service Price" name='price' className="m-3 input input-bordered input-secondary w-full max-w-xs" /> <br />
           <input type="text" placeholder="Service Image" name='image' className="m-3 input input-bordered input-secondary w-full max-w-xs" />
                </div>

           <textarea className="p-50 textarea textarea-primary mb-20" name='description' placeholder="Write Description"></textarea>
           <button>Add Service</button>


            </form>

        </div>
    );
};

export default AddService;