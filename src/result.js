import React from 'react';


const Result =({name,username,email})=> {
    return (
        <div className='text-center'>      
           <h1 className='text-info'>{name}</h1>
           <h3>{username}</h3>
           <p>{email}</p>
        </div> 
    );
}
export default Result;