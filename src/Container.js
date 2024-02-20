import React, { createContext, useState } from "react";

const myContext = createContext("");
export { myContext };

export default function Container(props) {
  const [matrix, setMatrix] = useState([
    { id: 0, value: null, active: false },
    { id: 1, value: null, active: false },
    { id: 2, value: null, active: false },
    { id: 3, value: null, active: false },
    { id: 4, value: null, active: false },
    { id: 5, value: null, active: false },
    { id: 6, value: null, active: false },
    { id: 7, value: null, active: false },
    { id: 8, value: null, active: false },
  ]);
  const players = ["player1", "player2"];
  const [activePlayer, setActivePlayer] = useState("player1");
  const [score, setScore] = useState({ player1: 0, player2: 0 });
  const [winner, setWinner] = useState(null);
  const [overlinedLines, setOverlinedLines] = useState([]);

  return (
    <myContext.Provider
      value={{
        matrix,
        setMatrix,
        players,
        activePlayer,
        setActivePlayer,
        score,
        setScore,
        winner,
        setWinner,
        overlinedLines,
        setOverlinedLines,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
}
