import React,{useContext, useState} from 'react'
import {myContext} from './Container';

export default function Player(props) {
  const{matrix,setMatrix,players,activePlayer,setActivePlayer,score}=useContext(myContext)
  const activeArea=matrix.filter(obj=>obj.active===true)
  const [itemToAdd,setItemToAdd]=useState(null);

  const buttonOnclickHandler=(type)=>{
    // if(props.player!==activePlayer){
    //   console.log('wait you turn!')
    // }
      if(activeArea.length){
        setItemToAdd(type)
      }else{
      console.log('Please select an area first!')
      }
  }

  const controller=(id)=>{//score u isle!
      const scoreCounter=0;
      const arrayCheck=(array)=>{
        if((array[0]===array[1])&&(array[0]===array[3])){
        console.log('you won 10 point');
        scoreCounter+=10;
        }
      }
      const horizontalcheck=(id)=>{
        const horizontalArray=[];
      if(id%3===0){
        horizontalArray=[matrix[id].value,matrix[id+1].value,matrix[id+2].value];
      }
      else if(id%3===2){
        horizontalArray=[matrix[id].value,matrix[id-1].value,matrix[id-2].value];
      }
      else //(id%3==1)
      {
        horizontalArray=[matrix[id].value,matrix[id-1].value,matrix[id+1].value];
      }
      arrayCheck(horizontalArray)
      }

      const verticalcheck=(id)=>{
        const verticalArray=[];
        if(id<3){
          verticalArray=[matrix[id].value,matrix[id+3].value,matrix[id+6].value];
        }
        if(id>=3 && id<5){
          verticalArray=[matrix[id-3].value,matrix[id].value,matrix[id+3].value];
        }
        if(id>5){
          verticalArray=[matrix[id].value,matrix[id-3].value,matrix[id-6].value];
        }
        arrayCheck(verticalArray)
      }

      const diagonalcheck=(id)=>{
        //if id===4 double check!
        const diagonalArray=[];
        if(id===2||id===4||id===6){// /
          diagonalArray=[matrix[2].value,matrix[4].value,matrix[6].value]
          arrayCheck(diagonalArray)
        }
        if(id===0||id===4||id===8){// \
          diagonalArray=[matrix[0].value,matrix[4].value,matrix[8].value]
          arrayCheck(diagonalArray)
        }
      }

      horizontalcheck(id);
      verticalcheck(id);
      diagonalcheck(id);
      // const [score,setScore]=useState({player1:0,player2:0})
      if (scoreCounter!==0){
        const scoreObj={activePlayer:score[activePlayer]+scoreCounter}
        console.log(scoreObj);
      //setScore({...score,activePlayer:score[activePlayer]+scoreCounter})
      }
      
      }

  const addHandler=()=>{//ilk eklemeden sonra calismiyor!!!!
    if(activeArea.length && itemToAdd){
      const newObj={...activeArea,value:itemToAdd,active:false}
      let newMatrix=[...matrix]
      newMatrix.splice(activeArea.id,1,newObj)
      setMatrix(newMatrix)
      controller(activeArea[0].id)
      //change active player
      const newPlayer=players.filter(player=>player!==activePlayer)
      console.log(newPlayer);
      setActivePlayer(...newPlayer)
    }
    }
    const buttonStyle={textAlign:'center',marginRight:'20px',backgroundColor:'black',color:'white',border:'2px solid grey',borderRadius:'10px', width:'100px', height:'50px'}

  return (
    <div  
    style={{width:'50vw',height:'100vh'}} 
    className={props.player==='player1'?'blue':'red'}
    >
      <h2 style={{textAlign:'center'}}>{props.player.toUpperCase()}</h2>
      {/* {(activePlayer===props.player )&&<p>Please select an area first!</p>} */}
      <div style={{height:'100px'}}>
      {activePlayer===props.player &&
      <div style={{display:'flex',justifyContent:'center'}}>
      <button onClick={()=>buttonOnclickHandler('X')} style={buttonStyle}>X</button>
      <button onClick={()=>buttonOnclickHandler('O')} style={buttonStyle}>O</button>
      <button onClick={()=>addHandler()} style={buttonStyle}>add</button>
      </div>}
      </div>
      <p style={{position:'absolute', bottom:'10vh',textAlign:'center',width:'50vw',fontSize:'2rem',fontWeight:'bold'}}>Score:{score[props.player]}</p>
    </div>
  )
}
