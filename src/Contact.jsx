import React from 'react'


export default function Contact({ name, img, telf, email }) {
  return (
    <div className='card'>
      <div className='top'>
        <h2 className='name'>{name}</h2> 
        {/* para poner el id --- h2-- {id}.{name} */}
        <img src={img} alt='avatar-img' className='circle-img' />
      </div>
      <div className='bottom'>
        <p className='info'>{telf}</p>
        <p className='info'>{email}</p>
      </div>  
    </div>
  );
}
