import { useState } from "react";
import Nav from "./components/Nav";
import Planets from "./components/Planets";
import People from "./components/People";

const App = () => {
  const [page, setPage] = useState('planets');

  return (
    <div className="App">
     <h1>Star Wars</h1>
     <Nav page={page} setPage={setPage}/>
     <div className='content'>
      {page==='planets'?<Planets/>: <People/> }
     </div>
    </div>
  );
}

export default App;
