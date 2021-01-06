import React,{useContext} from 'react'
import {myContext} from '../Container';
import './styles/Winner.css'

export default function Winner() {
  const {winner,setWinner,score,setScore,setActivePlayer,matrix,setMatrix}=useContext(myContext)

  const playAgainHandler=()=>{
    setWinner(null)
    setScore({player1:0,player2:0})
    setActivePlayer('player1')
    let newMatrix=[...matrix].map(obj=>{return {...obj,value:null,active:false}})
    setMatrix(newMatrix)
  }
  return (
    winner&&
    <div className='winnerbox'>
      <div className='players-box'>
      <h2>Player 1: {score.player1}</h2>
      <h2>Player 2: {score.player2}</h2>
      </div>
      {winner==='draw'? <h1>Draw</h1> :<h1>Winner: {winner}</h1>}
      <button className='winner-btn' onClick={()=>playAgainHandler()}>play again</button>
    </div>
  )
}
