import { useEffect, useState } from "react"
import { getGif } from '../resources/helper';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGif(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, []);

    return state;
}