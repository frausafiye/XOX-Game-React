  const scoreCalculator=(id,mtrx,playersScore)=>{
    let scoreCounter=playersScore
    const arrayCheck=(array)=>{
      if((array[0]===array[1])&&(array[0]===array[2])){
        scoreCounter+=10;
      }
    }
    const horizontalcheck=(id)=>{
      let horizontalArray=[];
      if(id%3===0){
        horizontalArray=[mtrx[id].value,mtrx[id+1].value,mtrx[id+2].value];
      }
      else if(id%3===2){
        horizontalArray=[mtrx[id-2].value,mtrx[id-1].value,mtrx[id].value];
      }
      else{
        horizontalArray=[mtrx[id-1].value,mtrx[id].value,mtrx[id+1].value];
      }
      arrayCheck(horizontalArray)
      }
    const verticalcheck=(id)=>{
      let verticalArray=[];
      if(id<3){
        verticalArray=[mtrx[id].value,mtrx[id+3].value,mtrx[id+6].value];
      }
      else if(id>=3 && id<=5){
        verticalArray=[mtrx[id-3].value,mtrx[id].value,mtrx[id+3].value];
      }
      else{//(id>5)
        verticalArray=[mtrx[id].value,mtrx[id-3].value,mtrx[id-6].value];
      }
      arrayCheck(verticalArray)
    }
    const diagonalcheck=(id)=>{
      let diagonalArray=[];
      if(id===2||id===4||id===6){
        diagonalArray=[mtrx[2].value,mtrx[4].value,mtrx[6].value]
        arrayCheck(diagonalArray)
      }
      if(id===0||id===4||id===8){
        diagonalArray=[mtrx[0].value,mtrx[4].value,mtrx[8].value]
        arrayCheck(diagonalArray)
      }
    }
      horizontalcheck(id);
      verticalcheck(id);
      diagonalcheck(id);
      return scoreCounter
  }

  export default scoreCalculator;