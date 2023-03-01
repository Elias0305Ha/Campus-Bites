import React from 'react';
import './Card.css';



function Card(props){
    return(
        <div className='card'>
            <div className='card-container'>
                <img src={props.image} alt={props.name}/>
                <h2>{props.name}</h2>
                <p>{props.location}</p>
                <button className='menu-button'> View Menu </button>
            </div>
            
        </div>
    );  
}

export default Card;