
import React from 'react';
import Player from './Players/Player';
import Table from './Table/Table';

function App() {
  return (
    <div className="App"style={{display:'flex',justifyContent:'space-between'}}>
      <Player player='player1'/>
      <Table />
      <Player player='player2'/>
    </div>
  );
}

export default App;
