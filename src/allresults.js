import React from 'react';
import Result from './result';

const Allresults =({robots})=>{
   
    return(
        <div>
          {robots.map((user,i)=>{
        return <Result 
        key={i}
        name={robots[i].name}
        username={robots[i].username}
        email={robots[i].email}
           />
    })
    }
        </div>
    )
}
export default Allresults;