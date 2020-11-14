import React, { useState } from 'react';
import GifGrid from './GifGrid';
import AddCategory from './AddCategory';

// const categories = ['Prueba', 'Prueba2', 'Prueba 3'];


const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Fútbol']);

    //Agregar elementos dando click a un botón

    /* const handleAddNewEvent = () => {
        setCategories([
            ...categories,
            'The Simpson Show'
        ]);
    } */

    return (
        <div>
            <h2>Gif Expert App</h2>

            <AddCategory
                setCategories={setCategories}
            />
            <hr />

            { categories.map(category => <GifGrid
                key={category}
                category={category}
                categories={categories}
            />)}
        </div>
    );
}

export default GifExpertApp;