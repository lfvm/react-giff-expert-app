import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ( {setCategories} ) => {


    const [inputValue, setInputValue] = useState('');

    const handleOnChangeValue = (e) => {
        //Leer el string del input y establecer su valor a la variable nputValue 
        setInputValue( (v) => e.target.value);
    }

    const handleSubmit = (e) => {

    
        e.preventDefault();
        
        //Obtener la referencia el setCategories del componente padre, y agregar una nueva categoria
        if(inputValue !== ''){   
            setCategories((c) => [inputValue,...c]);
        }

        //Limpiar el valor del input
        setInputValue('');

    }

    return (
        
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={inputValue}
                onChange={handleOnChangeValue}
            />
        </form>
    );
}



//Definir los datos que recibira el componente
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
}