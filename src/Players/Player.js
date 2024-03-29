import React, { useContext, useState, useEffect } from "react";
import { myContext } from "../Container";
import scoreCalculator from "../logic/scoreCalculator";
import "./styles/Player.css";
import "./styles/buttons.css";
import "./styles/scoreText.css";
import { Button } from "./Button";

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
        setWinner("Draw");
      }
    }
  }, [score]);

  return (
    <div
      className={
        props.player === "player1" ? "blue container" : "red container"
      }
    >
      <div className="players-nav">
        <h2>{props.player === "player1" ? "PLAYER 1" : "PLAYER 2"}</h2>
      </div>

      {activePlayer === props.player && (
        <div className="flex-container">
          <Button
            value={"X"}
            buttonOnclickHandler={buttonOnclickHandler}
            addHandler={addHandler}
          />
          <Button
            value={"O"}
            buttonOnclickHandler={buttonOnclickHandler}
            addHandler={addHandler}
          />
          <Button
            value={"add"}
            buttonOnclickHandler={buttonOnclickHandler}
            addHandler={addHandler}
          />
        </div>
      )}
      <p>Score:{score[props.player]}</p>
    </div>
  );
}
