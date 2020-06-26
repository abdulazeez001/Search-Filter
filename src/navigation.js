import React from 'react';
import './index.css';


class Navigation extends React.Component {
    render(){
    return (
        <div className='container'>
        <div  className ='navbar navbar-fixed-top navbar-default custom-navbar navigation'>
            <div className='navbar-header'>
                <h2 className='text-primary'>SearchBooth</h2>
            </div>
        </div>
        </div>
    );
}}
export default Navigation;