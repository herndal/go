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
    [x, y] = pos;
    return (x % this.size === x && y % this.size === y);
  }

  
}