import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

   // const [images, setImages] = useState([]);
        
    // Solo se ejecuta cuando es renderizado por primera vez, añadiendo el arreglo [] vacio al final
    // useEffect(() => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ]);

    const {data:images, loading} = useFetchGifs(category);    

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{ category }</h3>
            { loading && <p>Loading...</p> }      
            <div className="card-grid">
                {/* Con el operador  spread podemos pasar cada uno de las propiedades del objeto item*/}
                {
                    images.map(item => (
                        <GifGridItem                         
                            key={ item.id }
                            {...item}
                        />
                    ))
                }
            </div>
        </>
    )
}
