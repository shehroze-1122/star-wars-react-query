import React from 'react'

const Planet = ({planet}) => {
    const { name, rotation_period, orbital_period, climate, terrain, population } = planet;
    return (
        <div className='card'>
            <h2>{name}</h2>
            <p>Rotation Period- <span className='info'>{rotation_period}</span></p>
            <p>Orbital Period-  <span className='info'>{orbital_period}</span></p>            
            <p>Climate-  <span className='info'>{climate}</span></p>            
            <p>Terrain-  <span className='info'>{terrain}</span></p>            
            <p>Population-  <span className='info'>{population}</span></p>            
            
        </div>
    )
}

export default Planet
