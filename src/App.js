import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Kanban from './Components/Kanban/kanban';
import { Data } from './Constant';

import './App.css';

function App() {
  // const [searchProp, setSearchProp] = useState({});
  const [ticket, setTicket] = useState(Data);

  useEffect(() => {
    console.log('kjsdhf');
  }, [ticket]);

  return (
    <div className="App">
      <Header data={ticket} setTicket={setTicket} />
      <Kanban data={ticket} setData={setTicket}/>
    </div>
  );
}

export default App;
