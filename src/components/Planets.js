import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { CircularProgress } from '@material-ui/core';
import Planet from './Planet';

const fetchPlanets = async (pageNum) =>{
    const resp = await fetch(`https://swapi.dev/api/planets/?page=${pageNum}`);
    console.log(`https://swapi.dev/api/planets/?page=${pageNum} `)
    const data = resp.json()
    return data;
}

const Planets = () => {

    const [ pageNum, setPageNum ] = useState(1);
    const { data, status, isFetching } = useQuery(['planets', pageNum], ()=>fetchPlanets(pageNum), {
        //staleTime: 5000,
        //cacheTime: 20,
        //onSuccess: ()=>{console.log('data loaded successfully')}
        keepPreviousData: true
    });

    const handlePagination = () =>{
        if(data.next !== null){
            setPageNum(prevNum=>prevNum+1);
        }
    }

    return (
        <div>
            {status==='loading' && <span className='center' ><CircularProgress /></span>}
            {status==='error' && <h2>Error occured while fetching data</h2>}
            {status==='success' && 
            <div>
                <div className='pagination'>
                    <button onClick={()=> pageNum !== 1 && setPageNum(prevNum=>prevNum-1)} className="prev" disabled={pageNum===1 || isFetching}>Previous Page</button>
                    <p  className="current">Current Page: {pageNum}</p>
                    <button onClick={()=> handlePagination()} className="next" id="next-page" disabled={data.next===null || isFetching}>Next Page</button>
                </div>
                {data.results.map((planet)=><Planet key={planet.name} planet={planet}/>)}
            </div>}
        </div>
    )
}

export default Planets
