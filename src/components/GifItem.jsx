import React from 'react';



const GifItem = ({ url, title }) => {

    return(
        <div className = "card animate__animated animate__bounceIn">

            <img src={ url } alt={ title } className = 'imgs'/>
            <p>{ title }</p>

        </div>
    );
} 

export default GifItem;