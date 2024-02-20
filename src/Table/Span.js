import React from "react";

export const Span = ({ directionsClass, direction }) => {
  const lineClass =
    direction === "horizontal"
      ? "line-horizontal"
      : direction === "vertical"
      ? "line-vertical"
      : direction === "diagonalToLeftBottom"
      ? "line-diagonal-left-bottom"
      : "line-diagonal-right-bottom";
  return (
    <span
      style={{
        display: directionsClass.includes(direction) ? "block" : "none",
      }}
      className={lineClass}
    >
      -
    </span>
  );
};
