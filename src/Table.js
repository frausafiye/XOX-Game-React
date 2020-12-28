import React,{useContext} from 'react'
import {myContext} from './Container';

export default function Table(props) {
  const{matrix,setMatrix,activePlayer}=useContext(myContext)
  let firstLine=matrix.slice(0,3);
  let secondLine=matrix.slice(3,6);
  let thirdLine=matrix.slice(6)
  const matrixArray=[[...firstLine],[...secondLine],[...thirdLine]]

  const selectHandler=(id)=>{
    //make all actives false!
      const newMatrix=[...matrix].map(obj=>{return{...obj,active:false}})
    //check if it is empty
    if(newMatrix[id].value===null){
      newMatrix.splice(id,1,{id:id,value:null,active:true})
      setMatrix(newMatrix)
    }
  }
  return (
    //active butona ekstra styling ekle!
    <table className={props.player} style={{width:'200px',height:'200px',position:'absolute',left:'50%',top:'50%',transform: 'translate(-50%, -50%)'//display:activePlayer!==props.player&&'none'
  }}>
     {matrixArray.map(line=><tr>{line.map(obj=>{
     return <td 
     key={obj.id} 
     style={{padding:'20px',backgroundColor:'white'}}
     onClick={()=>selectHandler(obj.id)}
     >
    {obj.value}
    </td>
     }
     )}</tr>)}
    </table>
  )
}
