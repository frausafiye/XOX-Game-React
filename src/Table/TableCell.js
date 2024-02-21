import React from "react";
import { Span } from "./Span";

export const TableCell = ({
  id,
  overlineDirections,
  isActive,
  selectHandler,
  value,
}) => {
  const directions = [
    "horizontal",
    "vertical",
    "diagonalToLeftBottom",
    "diagonalToRightBottom",
  ];
  let activeClass = isActive ? "active" : "";
  let directionsClass = overlineDirections.length
    ? overlineDirections.join(" ")
    : "";
  const edgeCells = [
    { edge: "left", cells: [0, 3, 6] },
    { edge: "right", cells: [2, 5, 8] },
    { edge: "top", cells: [0, 1, 2] },
    { edge: "bottom", cells: [6, 7, 8] },
    { edge: "right-top", cells: [2] },
    { edge: "right-bottom", cells: [8] },
    { edge: "left-top", cells: [0] },
    { edge: "left-bottom", cells: [6] },
  ];
  const edgeDirectionsForCell = edgeCells
    .filter((obj) => obj.cells.includes(id))
    .map((obj) => obj.edge);
  console.log("id ", id, " edgeDirectionsForCell: ", edgeDirectionsForCell);
  return (
    <td key={id} onClick={() => selectHandler(id)} className={activeClass}>
      {directions.map((direction) => (
        <Span
          directionsClass={directionsClass}
          direction={direction}
          edgesToShorten={edgeDirectionsForCell}
        />
      ))}
      <div>{value}</div>
    </td>
  );
};
