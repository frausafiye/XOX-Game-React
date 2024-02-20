import React from "react";
import { Span } from "./Span";

export const TableCell = ({
  id,
  overlineDirections,
  isActive,
  selectHandler,
  value,
}) => {
  let activeClass = isActive ? "active" : "";
  let directionsClass = overlineDirections.length
    ? overlineDirections.join(" ")
    : "";
  console.log("active class: " + activeClass);
  console.log("directions class: " + directionsClass);
  return (
    <td
      key={id}
      onClick={() => selectHandler(id)}
      className={activeClass + " " + directionsClass}
    >
      <Span directionsClass={directionsClass} direction={"horizontal"} />
      <Span directionsClass={directionsClass} direction={"vertical"} />
      <Span
        directionsClass={directionsClass}
        direction={"diagonalToLeftBottom"}
      />
      <Span
        directionsClass={directionsClass}
        direction={"diagonalToRightBottom"}
      />
      {/* <span
        style={{
          display: directionsClass.includes("horizontal") ? "block" : "none",
        }}
        className="line-horizontal"
      >
        -
      </span>
      <span
        style={{
          display: directionsClass.includes("vertical") ? "block" : "none",
        }}
        className="line-vertical"
      >
        -
      </span>
      <span
        style={{
          display: directionsClass.includes("diagonalToLeftBottom")
            ? "block"
            : "none",
        }}
        className="line-diagonal-left-bottom"
      >
        -
      </span>
      <span
        style={{
          display: directionsClass.includes("diagonalToRightBottom")
            ? "block"
            : "none",
        }}
        className="line-diagonal-right-bottom"
      >
        -
      </span> */}

      <div>{value}</div>
    </td>
  );
};
