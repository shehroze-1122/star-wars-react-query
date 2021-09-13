import React from 'react';

const Nav = ({page, setPage}) => {

    return (
        <div className='NavBar'>
            <button onClick={()=>setPage('planets')} className={page==='planets'? 'NavBar-active': null} >Planets</button>
            <button onClick={()=>setPage('people')} className={page==='people'? 'NavBar-active': null}>People</button>
        </div>
    )
}
export default Nav;