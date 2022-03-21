import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['Sea']);


    return (
        <>
            <h2>GiffExpertApp</h2>
            <AddCategory setCategories={ setCategories }></AddCategory>
            <hr></hr>
            {/*Mostrar las categorias dentro de una OL con la funcion map */}
            <ol>
                {
                    categories.map( category => (

                        <GifGrid 
                            category={category}
                            key={category}
                        />
                    )) 
                }
            </ol>
            
        </>
    
    );

};




