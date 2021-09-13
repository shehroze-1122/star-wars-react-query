import React from 'react'

const Person = ({person}) => {
    const { name, height, eye_color, skin_color, gender} = person;
    return (
        <div className='card'>
            <h2>{name}</h2>
            <p>Height- <span className='info'>{height}</span></p>
            <p>Eye color- <span className='info'>{eye_color}</span></p>            
            <p>Skin Color- <span className='info'>{skin_color}</span></p>            
            <p>Gender- <span className='info'>{gender}</span></p>                       
            
        </div>
    )
}

export default Person
