import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const Addcategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // Handler submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(items => [inputValue, ...items]);
            setInputValue('');
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={ inputValue } 
                onChange={handleInputChange}/>            
        </form>      
    )
}

Addcategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
