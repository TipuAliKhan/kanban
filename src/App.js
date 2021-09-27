import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Kanban from './Components/Kanban/kanban';
import { Data } from './Constant';

import { ThemeProvider } from './ThemeContext';

import './App.css';

function App() {
  const [ticket, setTicket] = useState({});

  useEffect(() => {
    console.log(ticket);
    // Mimic API call
    setTicket(Data);
  }, []);

  const reset = () => {
    setTicket(Data);
  }

  return (
    <div className="App">
      <ThemeProvider>
        <Header reset={reset} />
        <Kanban data={ticket} setData={setTicket} />
      </ThemeProvider>
    </div>
  );
}

export default App;
