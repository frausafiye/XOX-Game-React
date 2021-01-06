import React,{useContext} from 'react'
import {myContext} from '../Container';
import './styles/Table.css'

export default function Table() {
  const{matrix,setMatrix}=useContext(myContext)
  const matrixArray=[[...matrix.slice(0,3)],[...matrix.slice(3,6)],[...matrix.slice(6)]]

  const selectHandler=(id)=>{
    let newMatrix=[...matrix].map(obj=>{return{...obj,active:false}})
    if(newMatrix[id].value===null){
      newMatrix.splice(id,1,{id:id,value:null,active:true})
      setMatrix(newMatrix)
    }
  }
  return (
    <table>
      <tbody>
        {matrixArray.map((line,i)=>
          <tr key={i}>{line.map(obj=>{
            return <td key={obj.id} onClick={()=>selectHandler(obj.id)} className={obj.active===true && 'active'}>
                 {obj.value}
                 </td>}
        )}</tr>)}
      </tbody>
    </table>
  )
}
