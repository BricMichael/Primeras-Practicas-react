import React from 'react';
import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );
   
    return(
        <>
            <h2 className = 'color_h2'>{ category }</h2>
            { loading && <p className="card animate__animated animate__flash">Loading</p> }
            <div className = 'card-grip'>
                {

                    images.map( imgs => (

                        <GifItem 
                          key = { imgs.id } 
                          { ...imgs } 
                        />

                    ))
                }   
            </div>
        </>
    );
}

export default GifGrid;