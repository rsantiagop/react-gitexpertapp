import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Primer hook
// A diferencia del functional component, el hook no devuelve JSX
export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [category]);

    return state;
}
