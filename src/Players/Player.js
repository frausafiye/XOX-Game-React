import React, { useContext, useState, useEffect } from "react";
import { myContext } from "../Container";
import scoreCalculator from "../logic/scoreCalculator";
import "./styles/Player.css";
import "./styles/buttons.css";
import "./styles/scoreText.css";

export default function Player(props) {
  const {
    matrix,
    setMatrix,
    players,
    activePlayer,
    setActivePlayer,
    score,
    setScore,
    setWinner,
    overlinedLines,
    setOverlinedLines,
  } = useContext(myContext);
  let activeArea = matrix.filter((obj) => obj.active === true);
  const [itemToAdd, setItemToAdd] = useState(null);

  const buttonOnclickHandler = (type) => {
    if (activeArea.length) {
      setItemToAdd(type);
    }
  };

  const addHandler = () => {
    if (activeArea.length && itemToAdd) {
      setItemToAdd(null);
      let newObj = { ...activeArea[0], value: itemToAdd, active: false };
      let newMatrix = [...matrix];
      newMatrix.splice(activeArea[0].id, 1, newObj);
      setMatrix(newMatrix);
      const { lastScore, linesToOverline } = scoreCalculator(
        activeArea[0].id,
        newMatrix,
        score[activePlayer]
      );
      setScore({ ...score, [activePlayer]: lastScore });
      const newPlayer = players.filter((player) => player !== activePlayer);
      setActivePlayer(...newPlayer);
      setOverlinedLines([...overlinedLines, ...linesToOverline]);
    }
  };

  useEffect(() => {
    let emptiesArray = matrix.filter((obj) => obj.value === null);
    if (emptiesArray.length === 0) {
      if (score.player1 < score.player2) {
        setWinner("Player2");
      } else if (score.player2 < score.player1) {
        setWinner("Player1");
      } else {
        setWinner("draw");
      }
    }
  }, [score]);

  // useEffect(() => {
  //   if (overlinedLines.length) {}

  // }, [overlinedLines]);

  return (
    <div
      className={
        props.player === "player1" ? "blue container" : "red container"
      }
    >
      <div className="players-box">
        <h2>{props.player.toUpperCase()}</h2>
      </div>

      {activePlayer === props.player && (
        <div className="flex-container">
          <div className="button-box">
            <button
              onClick={() => buttonOnclickHandler("X")}
              className={itemToAdd === "X" ? "btn selected" : "btn"}
            >
              X
            </button>
          </div>
          <div className="button-box">
            <button
              onClick={() => buttonOnclickHandler("O")}
              className={itemToAdd === "O" ? "btn selected" : "btn"}
            >
              O
            </button>
          </div>
          <div className="button-box">
            <button onClick={() => addHandler()} className="btn">
              add
            </button>
          </div>
        </div>
      )}
      <p>Score:{score[props.player]}</p>
    </div>
  );
}
