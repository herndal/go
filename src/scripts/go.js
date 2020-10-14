const [white, black, empty, neutral] = ["X", "O", "_", "."];

class Board {
  constructor(size) {
    this.size = size;
    this.fullSize = size * size;
    this.grid = blankGrid();
    this.prevPositions = [];
  }

  swap(color) {
    if (color === black) return white;
    if (color === white) return black;
    return color;
  }

  blankGrid() {
    return empty * this.fullSize;
  }

  sPos(pos) {
    return this.size * pos[0] + pos[1];
  }

  pos(sPos) {
    const row = Math.floor(sPos / this.size);
    const col = sPos % this.size;
    return [row, col];
  }

  validPos(pos) {
    const [x, y] = pos;
    return (x % this.size === x && y % this.size === y);
  }

  placeStone(color, sPos) {
    this.grid = this.grid.slice(0, sPos) + color + this.grid.slice(sPos+1);
  }

  placeManyStones(color, sPoses) {
    const arr = this.grid.split("");
    sPoses.forEach(sPos => {
      arr[sPos] = color;
    });
    return this.grid = arr.join("");
  }

  neighbors(sPos) {
    [row, col] = this.pos(sPos);
    const positions = [[row, col-1], [row-1, col], [row, col+1], [row+1, col]];
    const neighbs = [];
    positions.forEach(pos => {
      if (this.validPos(pos)) neighbs.push(this.sPos(pos))
    })
    return neighbs;
  }

  findString(sPos) {
    const color = this.grid[sPos];
    const stoneString = [sPos];
    const bordered = [];
    const nextInString = [sPos];
    let currentStone;
    while (nextInString.length) {
      currentStone = nextInString.pop();
      stoneString.push(currentStone);
      this.neighbors(currentStone).forEach(neighb => {
        if (this.grid[neighb] === color 
          && !stoneString.includes(neighb)) {
          nextInString.push(neighb);
        }
        if (this.grid[neighb] !== color) {
          bordered.push(neighb);
        }
      });
    }
    return ({
      stoneString,
      bordered
    });
  }

  captureSurrounded(sPos) {
    const { 
      stoneString, 
      bordered 
    } = this.findString(sPos);
    let capture = true;
    bordered.forEach(sPos => {
      if (this.grid[sPos] === empty) {
        capture = false;
      }
    });
    if (capture) {
      this.placeManyStones(empty, stoneString);
      return stoneString;
    } else {
      return [];
    }
  }

  playMove(player, pos) {
    const color = player.color;
    const sPos = this.sPos(pos);
    const opponent = swap(color);
    const captured = 0;
    //do nothing if position is occupied
    if (this.grid[sPos] !== empty) return;
    this.placeStone(color, sPos);
    //find opponent stones in neighbors, capture if possible
    this.neighbors(sPos).forEach(neighb => {
      if (this.grid[neighb] === opponent) {
        captured += this.captureSurrounded(neighb).length;
      }
    });
    //check for suicidal move
    if (this.captureSurrounded(sPos).length) {
      throw "Suicide! Try again";
    }
    //check for ko
    if (this.prevPositions.includes(this.grid)) {
      this.grid = this.prevPositions[this.prevPositions.length - 1];
      throw "Ko! Invalid move, try again";
    }
    player.captured += captured;
    this.prevPositions.push(this.grid);
    return this.grid;
  }

  score() {
    //fill grid territories (lowercase letters for visual difference)
    while (this.grid.includes(empty)) {
      let idx = this.grid.indexOf(empty);
      let { stoneString, bordered } = this.findString(idx);
      let borderColors = bordered.map(sPos => {
        return this.grid[sPos].toUpperCase;
      });
      let matched = true;
      let firstColor = borderColors[0];
      borderColors.forEach(color => {
        if (color !== firstColor) matched = false;
      });
      if (matched) {
        this.placeManyStones(firstColor.toLowerCase(), stoneString);
      } else {
        this.placeManyStones(neutral, stoneString);
      }
    }
    //count up the final scores
    const finalGrid = this.grid.toUpperCase();
    let blackScore = 0;
    let whiteScore = 0;
    for (let i = 0; i < finalGrid.length; i++) {
      if (finalGrid[i] === black) blackScore++;
      if (finalGrid[i] === white) whiteScore++;
    };
    return ({
      blackScore,
      whiteScore
    })
  }
}

class Player {
  constructor(color) {
    this.color = color;
    this.captured = 0;
  }
}