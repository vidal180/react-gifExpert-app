import React, { Fragment } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>

            { loading && <p>Loading...</p>}
            <div className="cardGrid">
                {
                    images.map(image =>
                        <GifGridItem
                            key={image.id}
                            // Al enviarlo así, envia cada uno de los parametros como si fueran propiedades enviadas del componente
                            {...image}
                        />
                    )
                }
            </div>
        </Fragment>

    );
}

export default GifGrid;