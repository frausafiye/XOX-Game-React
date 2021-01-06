import React,{useContext, useState,useEffect} from 'react'
import {myContext} from '../Container';
import scoreCalculator from '../logic/scoreCalculator'
import './styles/Player.css'
import './styles/buttons.css'
import './styles/scoreText.css'

export default function Player(props) {
  console.log('player comp rendering');
  const {matrix,setMatrix,players,activePlayer,setActivePlayer,score,setScore}=useContext(myContext)
  let activeArea=matrix.filter(obj=>obj.active===true)
  const [itemToAdd,setItemToAdd]=useState(null);
  console.log('from top');

  const buttonOnclickHandler=(type)=>{
    if(activeArea.length){
      setItemToAdd(type)
    }
  }

  const addHandler=()=>{//sets matrix and active player
    if(activeArea.length && itemToAdd){
      let newObj={...activeArea[0],value:itemToAdd,active:false}
      let newMatrix=[...matrix]
      newMatrix.splice(activeArea[0].id,1,newObj)
      setMatrix(newMatrix)
      const scoreResult= scoreCalculator(activeArea[0].id,newMatrix,score[activePlayer]);
      setScore({...score,[activePlayer]:scoreResult})
      //change active player:
      const newPlayer=players.filter(player=>player!==activePlayer)
      setActivePlayer(...newPlayer)
    }
  }

  useEffect(() => {
    //after setting the score, it should control the empty areas
    //if there is no, then should announce the winner with the current scores!
    //prob: it is rendered 2 times (1  for each player)
    //prob: by setting the scores first time it is rendered 
    console.log('use effect rendering');
    let emptiesArray=matrix.filter(obj=>obj.value===null);
    if(emptiesArray.length===0){
      console.log('Player1: '+score.player1+' point and  Player2: '+score.player2+' point')
      if(score.player1<score.player2){console.log('Player 2 won');}
      else if(score.player2<score.player1){console.log('Player 1 won');}
      else{console.log(score);}
    }else{console.log('no winner yet')}
  }, [score])

  console.log('until bottom');

  return (
    <div className={props.player==='player1'?'blue container':'red container'}>
      <h2>{props.player.toUpperCase()}</h2>
      {activePlayer===props.player &&
      <div className='flex-container'>
      <button onClick={()=>buttonOnclickHandler('X')} className='btn'>X</button>
      <button onClick={()=>buttonOnclickHandler('O')} className='btn'>O</button>
      <button onClick={()=>addHandler()} className='btn'>add</button>
      </div>}
      <p>Score:{score[props.player]}</p>
    </div>
  )
}
