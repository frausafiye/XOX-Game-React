import React,{useContext, useState,useEffect} from 'react'
import {myContext} from '../Container';
import scoreCalculator from '../logic/scoreCalculator'
import './styles/Player.css'
import './styles/buttons.css'
import './styles/scoreText.css'

export default function Player(props) {
  const {matrix,setMatrix,players,activePlayer,setActivePlayer,score,setScore,setWinner}=useContext(myContext)
  let activeArea=matrix.filter(obj=>obj.active===true)
  const [itemToAdd,setItemToAdd]=useState(null);

  const buttonOnclickHandler=(type)=>{
    if(activeArea.length){
      setItemToAdd(type)
    }
  }

  const addHandler=()=>{
    if(activeArea.length && itemToAdd){
      setItemToAdd(null)
      let newObj={...activeArea[0],value:itemToAdd,active:false}
      let newMatrix=[...matrix]
      newMatrix.splice(activeArea[0].id,1,newObj)
      setMatrix(newMatrix)
      const scoreResult= scoreCalculator(activeArea[0].id,newMatrix,score[activePlayer]);
      setScore({...score,[activePlayer]:scoreResult})
      const newPlayer=players.filter(player=>player!==activePlayer)
      setActivePlayer(...newPlayer)
    }
  }

  useEffect(() => {
    let emptiesArray=matrix.filter(obj=>obj.value===null);
    if(emptiesArray.length===0){
      if(score.player1<score.player2){setWinner('Player2')}
      else if(score.player2<score.player1){setWinner('Player1')}
      else{setWinner('draw')}
    }
  }, [score])


  return (
    <div className={props.player==='player1'?'blue container':'red container'}>
      <h2>{props.player.toUpperCase()}</h2>
      {activePlayer===props.player &&
      <div className='flex-container'>
      <button onClick={()=>buttonOnclickHandler('X')} className={itemToAdd==='X'? 'btn selected':'btn'}>X</button>
      <button onClick={()=>buttonOnclickHandler('O')} className={itemToAdd==='O'? 'btn selected':'btn'}>O</button>
      <button onClick={()=>addHandler()} className='btn'>add</button>
      </div>}
      <p>Score:{score[props.player]}</p>
    </div>
  )
}
