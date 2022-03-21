import React from 'react'
import PropTypes from 'prop-types';
import { GifContainer } from './GifContainer';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

 
   const {data , loading} = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Cargando...</p>}
            { /* loading ?  <p>Cargando...</p> : null */}

            <div className='card-grid'>
                {
                    data.map(image => (

                        <GifContainer 
                            key={image.id} 
                            { ... image}
                        />
                    ))
                }
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired,
}