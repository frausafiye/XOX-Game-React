
import React,{useContext} from 'react';
import Player from './Players/Player';
import Table from './Table/Table';
import Winner from './Winner/Winner';
import {myContext} from './Container';

function App() {
  const {winner}=useContext(myContext)

  return (
    
    <div className="App"style={{display:'flex',justifyContent:'space-between'}}>
      
      <Player player='player1'/>
      {winner? <Winner/>:<Table />}
      <Player player='player2'/>
    </div>
  );
}

export default App;
