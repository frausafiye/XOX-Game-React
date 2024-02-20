const scoreCalculator = (id, mtrx, playersScore) => {
  let scoreCounter = playersScore;
  const arrayCheck = (array) => {
    const valuesArray = array.map((cell) => cell.value);

    if (
      valuesArray.length &&
      valuesArray[0] === valuesArray[1] &&
      valuesArray[0] === valuesArray[2]
    ) {
      scoreCounter += 10;
      return array;
    }
    return [];
  };
  const horizontalcheck = (id) => {
    let horizontalArray = [];
    if (id % 3 === 0) {
      horizontalArray = [mtrx[id], mtrx[id + 1], mtrx[id + 2]];
    } else if (id % 3 === 2) {
      horizontalArray = [mtrx[id - 2], mtrx[id - 1], mtrx[id]];
    } else {
      horizontalArray = [mtrx[id - 1], mtrx[id], mtrx[id + 1]];
    }
    return [arrayCheck(horizontalArray), "horizontal"];
  };
  const verticalcheck = (id) => {
    let verticalArray = [];
    if (id < 3) {
      verticalArray = [mtrx[id], mtrx[id + 3], mtrx[id + 6]];
    } else if (id >= 3 && id <= 5) {
      verticalArray = [mtrx[id - 3], mtrx[id], mtrx[id + 3]];
    } else {
      verticalArray = [mtrx[id], mtrx[id - 3], mtrx[id - 6]];
    }
    return [arrayCheck(verticalArray), "vertical"];
  };
  const diagonalcheck = (id) => {
    let diagonalArray = [];
    if (id === 2 || id === 4 || id === 6) {
      diagonalArray = [mtrx[2], mtrx[4], mtrx[6]];
      return [arrayCheck(diagonalArray), "diagonalToLeftBottom"];
    }
    if (id === 0 || id === 4 || id === 8) {
      diagonalArray = [mtrx[0], mtrx[4], mtrx[8]];
      return [arrayCheck(diagonalArray), "diagonalToRightBottom"];
    }
    return [];
  };

  let directions = [];
  const lineDirectionDeterminator = ([line, direction]) => {
    if (line && line.length) {
      directions.push({ line, direction });
    }
  };
  lineDirectionDeterminator(horizontalcheck(id));
  lineDirectionDeterminator(verticalcheck(id));
  lineDirectionDeterminator(diagonalcheck(id));

  return { lastScore: scoreCounter, linesToOverline: directions };
};

export default scoreCalculator;
