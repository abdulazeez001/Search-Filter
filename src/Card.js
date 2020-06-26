import React from 'react';
import Search from './search';
import Navigation from './navigation';
import {robots} from './robots';
import Allresults from './allresults';
class Card extends React.Component {
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
    }
    render(){
        const filteredrobots=this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return (
        <div className ='container'>
            <Navigation/>
            <Search searchChange={this.onSearchChange}/>
            <Allresults robots={filteredrobots}/>
        </div>
    );
}}
export default Card;