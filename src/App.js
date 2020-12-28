
import React from 'react';
import Player from './Player';
import Table from './Table';


function App() {
  return (
    <div className="App"style={{display:'flex',justifyContent:'space-between'}}>

      <Player player='player1'/>
      <Table />
      {/* <Table player='player2'/> */}
      <Player player='player2'/>

    </div>
  );
}


export default App;
//, activ olmayan icin disabled yap???). sonra sectigi yere butona basarak  ne eklecegini secer ve ekler. eklenince kontrol edilir 3 lü tamamlanmis mi diye! tamamlanmadiysa diger oyuncu aktiv olur
//2.secenek 2 tablo yap ust uste koy, her oyuncu sirasinda sadece kendi tablosunu göster digerini display none yap.//bu özelligi ilerde //ok//sira degistirmeyi handler a eklemeyi unutma!
//use user's info to block the table when they are not active player!!(therefore i use 2 tables for each player and displaying only the active player's.but improve it with user info.)