import React from "react";
import { TableCell } from "./TableCell";

export const TableRow = ({ i, line, selectHandler, overlinedCells }) => {
  return (
    <tr key={i}>
      {line.map((obj, index) => {
        let directions = [];
        overlinedCells.map((cell) => {
          if (cell.id === obj.id) {
            directions = [...directions, cell.direction];
          }
        });
        return (
          <TableCell
            key={index}
            id={obj.id}
            overlineDirections={directions}
            selectHandler={selectHandler}
            value={obj.value}
            isActive={obj.active}
          />
        );
      })}
    </tr>
  );
};
