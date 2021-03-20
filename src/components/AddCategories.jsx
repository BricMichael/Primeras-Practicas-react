import React, { useState } from 'react';


const AddCategories = ({ setCategories }) => {

    const [ input, setInput ] = useState('');

    const handleInput = ( e ) => {
        const event = e.target.value;
        setInput( event );
    }

    const handleButton = () => {
        setCategories( data => [ input, ...data ])
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        e.target.reset()
    }


    return(
        <>
            <h2>SEARCH GIFS</h2>
            <form action="#" onSubmit = { handleSubmit }>
                <input 
                    type="text"
                    placeholder="Write..."
                    onChange = { handleInput }                
                />  
                <button onClick = { handleButton } >Search</button>
            </form>
        </>
    );
}

export default AddCategories;