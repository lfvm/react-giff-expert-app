import React from 'react'

export const GifContainer = ({ id,title,url }) => {

  return (
    <div className='card animate__animated animate__bounceIn'>
        <img
            src={url}
            alt={title}
        />
        <p>{title}</p>
    </div>
  );
}
