import React, { useState } from 'react'
import { Addcategory } from './components/Addcategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {   

    const [categories, setCategories] = useState(['One punch']);

    /*
    const handleAdd = (e) => {
        // Si se utiliza asi, se cambia el tipo de dato de categories, en este caso a un String
        //setCategories('Hunter');

        // Se puede utilizar el callback, el cual es el estado anterior
        //setCategories(cats => [...cats, 'Nuevo']);

        // O utilizando el operador spred sin uso del callback
        setCategories([...categories, 'Hunter']);
    }
    */

    return (
        <div>
            <h2>GifExpertApp</h2>
            <Addcategory setCategories={ setCategories }/>
            <hr />
            
            {/* <button onClick={handleAdd}>Agregar</button> */}
            
            <ol>
                {   
                    categories.map(item => 
                        <GifGrid 
                            key={ item }
                            category={ item } />)
                }
            </ol>
        </div>
    )
}
