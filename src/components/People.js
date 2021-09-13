import React, {useState} from 'react';
import { CircularProgress } from '@material-ui/core';
import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeople = async (pageNum) =>{
    const resp = await fetch(`https://swapi.dev/api/people?page=${pageNum}`);
    const data = await resp.json()
    return data;
}

const People = () => {

    const [ pageNum, setPageNum ] = useState(1);
    const {data, status} = useQuery(['people', pageNum], ()=>fetchPeople(pageNum),{
        keepPreviousData: true
    });

    return (
        <div>
            {status==='loading' && <span className='center'><CircularProgress /></span>}
            {status==='error' && <h2>Error occured while fetching data</h2>}
            {status==='success' && <div>
            <div className='pagination'>
                    <button onClick={()=> pageNum !== 1 && setPageNum(prevNum=>prevNum-1)} className="prev" disabled={pageNum===1}>Previous Page</button>
                    <p  className="current">Current Page: {pageNum}</p>
                    <button onClick={()=> data.next !== null && setPageNum(prevNum=>prevNum+1)} className="next" disabled={data.next===null}>Next Page</button>
            </div>
                {data.results.map((person)=><Person key={person.name} person={person} />)}
            </div>}
        </div>
    )
}

export default People
