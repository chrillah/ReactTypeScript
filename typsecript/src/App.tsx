import React from 'react';
import './App.css';
import { Greet } from './pages/Greet';
import { LoggedIn } from './state/LoggedIn';
import  Status  from './state/Status'

function App() {
  return (
    <div className="App">
        <Greet name={"Christopher"} age={37}/>
        <LoggedIn />
        <Status status={'success'}/>
    </div>
  );
}

export default App;
