import React from 'react';
import UseTitle from '../UseTitle';

const Blog = () => {
    UseTitle('Blog')
    return (
        <div>
            <p className='text-3xl'>1. What is SQL Database ? </p>
            <p className='text-3xl'>Answer: SQL Database are relational while NoSQL Database are non relational. SQL Database are Structured and noSQL data is not structured.  </p>
            <p className='text-3xl'>2.What is JWT?  </p>
            <p className='text-3xl'>Answer: JWT means JSON Web Token. It is an open standard use to share security information between two parties such as: a client and a server. </p>

            <p className='text-3xl'>3.What is Different between javascript and node.js?  </p>
            <p className='text-3xl'>Answer: JavaScript is a high level programming language which make our website dynamic on the otherhand node.js is runtime environment.  </p>
            <p className='text-3xl'>4.How does nodejs handle multiple service at the same time?  </p>
            {/* <p className='text-3xl'>2.What is JWT?  </p> */}
        </div>
    );
};

export default Blog;