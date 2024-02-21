import React, { useContext } from "react";
import { myContext } from "../Container";
import "./styles/Table.css";
import { TableRow } from "./TableRow";

export default function Table() {
  const { matrix, setMatrix, overlinedLines } = useContext(myContext);

  // const overlinedCells = overlinedLines.map((obj) => {
  //   return obj.line.map((lineObj) => {
  //     return { id: lineObj.id, direction: obj.direction };
  //   });
  // });
  const overlinedCells = overlinedLines.flatMap((obj) => {
    return obj.line.map((lineObj) => {
      return { id: lineObj.id, direction: obj.direction };
    });
  });
  const matrixArray = [
    [...matrix.slice(0, 3)],
    [...matrix.slice(3, 6)],
    [...matrix.slice(6)],
  ];

  const selectHandler = (id) => {
    let newMatrix = [...matrix].map((obj) => {
      return { ...obj, active: false };
    });
    if (newMatrix[id].value === null) {
      newMatrix.splice(id, 1, { id: id, value: null, active: true });
      setMatrix(newMatrix);
    }
  };
  return (
    <table>
      <tbody>
        {matrixArray.map((line, i) => (
          <TableRow
            key={i}
            line={line}
            selectHandler={selectHandler}
            overlinedCells={overlinedCells}
          />
        ))}
      </tbody>
    </table>
  );
}
