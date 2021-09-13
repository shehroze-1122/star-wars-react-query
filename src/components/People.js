import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeople = async () =>{
    const resp = await fetch('https://swapi.dev/api/people');
    const data = await resp.json()
    return data;
}

const People = () => {
    const {data, status} = useQuery('people', fetchPeople);

    return (
        <div>
            {status==='loading' && <span className='center'><CircularProgress /></span>}
            {status==='error' && <h2>Error occured while fetching data</h2>}
            {status==='success' && <div>
                {data.results.map((person)=><Person key={person.name} person={person} />)}
            </div>}
        </div>
    )
}

export default People
