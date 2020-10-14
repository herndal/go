const [white, black, empty] = ["X", "O", "_"];

class Board {
  constructor(size) {
    this.size = size;
    this.fullSize = size * size;
    this.grid = blankGrid();
    
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
        if (this.grid[neighb] === color && !stoneString.includes(neighb)) {
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

}