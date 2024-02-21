import React from "react";

export const Span = ({ directionsClass, direction, edgesToShorten }) => {
  const edgeMapping = {
    horizontal: ["left", "right"],
    vertical: ["top", "bottom"],
    diagonalToLeftBottom: ["left-bottom", "right-top"],
    diagonalToRightBottom: ["right-bottom", "left-top"],
  };

  let edgeClassForSpan = edgesToShorten
    .filter((edge) => edgeMapping[direction].includes(edge))
    .map((edge) => "short-on-" + edge)
    .join(" ");
  const lineClass =
    direction === "horizontal"
      ? "line-horizontal"
      : direction === "vertical"
      ? "line-vertical"
      : direction === "diagonalToLeftBottom"
      ? "line-diagonal-left-bottom"
      : "line-diagonal-right-bottom";

  console.log("className ", lineClass + " " + edgeClassForSpan);
  return (
    <span
      style={{
        display: directionsClass.includes(direction) ? "block" : "none",
      }}
      className={lineClass + " " + edgeClassForSpan}
    >
      -
    </span>
  );
};
