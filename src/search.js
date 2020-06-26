import React from 'react';
import './index.css';

const Search=({searchfield,searchChange})=> {
    return (
        <div className="form-group has-info search-bar text-center">      
        <div className ="container">
            <input type="search" className="form-control" placeholder='Search' id="inputSuccess" onChange={searchChange}/>
        </div>
        
        </div>
    );
}
export default Search;