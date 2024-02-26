import React from "react";

export const Button = ({ value, buttonOnclickHandler, addHandler }) => {
  return (
    <div className="button-box">
      <button
        onClick={
          value === "X" || value === "O"
            ? () => buttonOnclickHandler(value)
            : () => addHandler()
        }
        className={value === "X" || value === "O" ? "btn selected" : "btn"}
      >
        {value}
      </button>
    </div>
  );
};
