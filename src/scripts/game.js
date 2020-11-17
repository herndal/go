import Board from './board';
import Player from './player';

const black = new Player('B');
const white = new Player('W');
const players = {
  'B': black,
  'W': white
};

export default class Game {
  constructor(size) {
    this.currentPlayer = black;
    this.board = new Board(size);
    this.reset();
    this.drawGame(size);
    this.passTurn = this.passTurn.bind(this);
  }

  reset() {
    black.captured = 0;
    white.captured = 0;
  }

  drawGame(size) {
    const game = document.createElement('div');
    game.classList.add('game', 'black');
    this.drawBoard(size, game);
    this.drawPlayers(size, game);
    document.getElementById('root').appendChild(game);
    this.drawStars(size);
  }

  addCell(element, color) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.stone = color;
    element.appendChild(cell);
  }

  drawPlayers(size, game) {
    const docPlayers = document.createElement('div');
    const blackPlayer = document.createElement('div');
    const whitePlayer = document.createElement('div');
    const blackCaptured = document.createElement('div');
    const whiteCaptured = document.createElement('div');
    docPlayers.classList.add('players');
    blackPlayer.classList.add('player', 'black');
    whitePlayer.classList.add('player', 'white');
    docPlayers.dataset.pass = false;
    blackPlayer.dataset.player = 'B';
    whitePlayer.dataset.player = 'W';
    blackCaptured.innerHTML = `${black.captured}`;
    whiteCaptured.innerHTML = `${white.captured}`;
    switch(size) {
      case "5":
        docPlayers.style.width = "210px";
        break;
      case "9":
        docPlayers.style.width = "250px";
        break;
      case "13":
        docPlayers.style.width = "310px";
        break;
      case "19":
        docPlayers.style.width = "410px";
        break;
    }
    this.addCell(blackPlayer, 'B');
    this.addCell(whitePlayer, 'W');
    blackPlayer.appendChild(blackCaptured);
    whitePlayer.appendChild(whiteCaptured);
    docPlayers.append(blackPlayer, whitePlayer);
    game.appendChild(docPlayers);
  }

  drawBoard(size, game) {
    const board = document.createElement('ul');
    board.classList.add('board');
    board.style.width = `${30 * size + 2}px`;
    board.style.height = `${30 * size + 2}px`;
    let k = 0;
    for (let i = 0; i < size; i++) {
      let row = document.createElement('ul');
      row.className = 'row';
      for (let r = 0; r < size; r++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = k;
        cell.dataset.stone = "_";
        row.appendChild(cell);
        k++;
      }
      board.appendChild(row);
    }
    game.appendChild(board);
  }

  drawStars(size) {
    let stars = [];
    switch(size) {
      case "5":
        stars = [12];
        break;
      case "9":
        stars = [20, 24, 40, 56, 60];
        break;
      case "13":
        stars = [42, 48, 84, 120, 126];
        break;
      case "19":
        stars = [60, 66, 72, 174, 180, 186, 288, 294, 300];
    }
    let cell;
    stars.forEach(star => {
      cell = document.querySelector(`[data-index="${star}"]`);
      cell.classList.add("star");
    });
  }

  play() {
    document.querySelector('.board').addEventListener("click", this.playTurn(this.board));
    document.querySelectorAll('.player').forEach(player => {
      this.addPassListeners(player);
    })
    // listen for two passes in a row
    // stop the game
    // take the score, display the winner
    // add a replay button
  }

  swap() {
    if (this.currentPlayer === black) {
      this.currentPlayer = white;
    } else {
      this.currentPlayer = black;
    }
    const game = document.querySelector('.game');
    game.classList.toggle('white');
    game.classList.toggle('black');
  }

  playTurn(board) {
    return e => {
      e.preventDefault();
      if (e.target.classList.contains('cell')) {
        const sPos = parseInt(e.target.dataset.index);
        try {
          const capturedStones = board.playMove(this.currentPlayer, sPos);
          if(capturedStones) {
            e.target.dataset.stone = this.currentPlayer.color;
            let cell;
            capturedStones.forEach(index => {
              cell = document.querySelector(`[data-index="${index}"]`);
              cell.dataset.stone = "_";
            })
            this.swap();
          }
        } catch(err) {
          console.log("internal board error");
          window.error = err;
        }
      }
    }
  }

  addPassListeners(player) {
    let listeners = [this.offerPass.bind(player), this.notPass.bind(player)];
    player.addEventListener('mouseover', listeners[0]);
    player.addEventListener('mouseout', listeners[1]);
    player.onclick = this.passTurn(player, listeners);
  }

  offerPass() {
    this.removeChild(this.childNodes[1]);
    this.classList.add("pass");
  }

  notPass() {
    this.classList.remove('pass');
    const captured = document.createElement('div');
    captured.classList.add('captured');
    const player = players[this.dataset.player];
    captured.innerHTML = `${player.captured}`;
    this.appendChild(captured);
  }

  passTurn(player, listeners) {
    return e => {
      e.preventDefault;
      const docPlayers = document.querySelector('.players');
      if(docPlayers.dataset.pass === 'true') {
        this.endGame(docPlayers);
      } else {
      docPlayers.dataset.pass = true;
      player.classList.add("pass");
      player.removeEventListener('mouseover', listeners[0]);
      player.removeEventListener('mouseout', listeners[1]);
      this.swap();
      }
    }
  }

  endGame(docPlayers) {
    const game = document.querySelector('.game');
    game.removeChild(docPlayers);
    this.drawScore();
  }

  drawScore() {
    const {blackScore, whiteScore, grid} = this.board.score();

    console.log(blackScore);
    console.log(whiteScore);
    console.log(grid);

    const board = document.querySelector('.board');
    const endGame = document.createElement('div');
    const winMessage = document.createElement('h2');
    const table = document.createElement('div');
    const blackTotals = document.createElement('div');
    const whiteTotals = document.createElement('div');
    endGame.classList.add('endgame');
    table.classList.add('table');
    blackTotals.classList.add('totals', 'board');
    whiteTotals.classList.add('totals', 'board');
    if(blackScore > whiteScore) {
      winMessage.innerHTML = `Black wins!`; //or draw
    } else if(blackScore < whiteScore) {
      winMessage.innerHTML = `White wins!`; //or draw
    } else {
      winMessage.innerHTML = `It's a draw!`; //or draw
    }
    this.addCell(blackTotals, 'B');
    this.addCell(whiteTotals, 'W');
    this.addScore(blackTotals, blackScore);
    this.addScore(whiteTotals, whiteScore);
    this.addCaptured(blackTotals, 'B');
    this.addCaptured(whiteTotals, 'W');
    table.append(blackTotals, whiteTotals);
    endGame.append(winMessage, table);
    for(let i = 0; i < grid.length; i++) {
      let cell = document.querySelector(`[data-index="${i}"]`);
      cell.dataset.stone = grid[i];
    }
    board.before(endGame);
  }

  addCaptured(element, color) {
    const child = document.createElement('div');
    const message = document.createElement('h3');
    const captured = players[color].captured;
    child.classList.add('total');
    message.innerHTML = 'Captured:';
    child.append(message, `${captured}`);
    element.append(child);
  }
  
  addScore(element, score) {
    const child = document.createElement('div');
    const message = document.createElement('h3');
    child.classList.add('total');
    message.innerHTML = 'Score:';
    child.append(message, `${score}`);
    element.append(child);
  }
}

//h2 black wins
//flex div scores
//black, white
//each: cell, captured, score
//play again button (adds welcome)
//board render score

// 0    1    2    3    4    5    6    7    8
// 9    10   11   12   13   14   15   16   17
// 18   19   20   21   22   23   24   25   26
// 27   28   29   30   31   32   33   34   35
// 36   37   38   39   40   41   42   43   44
// 45   46   47   48   49   50   51   52   53
// 54   55   56   57   58   59   60   61   62
// 63   64   65   66   67   68   69   70   71
// 72   73   74   75   76   77   78   79   80

// 0    1    2    3    4    5    6    7    8    9    10   11   12
// 13   14   15   16   17   18   19   20   21   22   23   24   25
// 26   27   28   29   30   31   32   33   34   35   36   37   38
// 39   40   41   42   43   44   45   46   47   48   49   50   51
// 52   53   54   55   56   57   58   59   60   61   62   63   64
// 65   66   67   68   69   70   71   72   73   74   75   76   77
// 78   79   80   81   82   83   84   85   86   87   88   89   90
// 91   92   93   94   95   96   97   98   99   100  101  102  103
// 104  105  106  107  108  109  110  111  112  113  114  115  116
// 117  118  119  120  121  122  123  124  125  126  127  128  129
// 130  131  132  133  134  135  136  137  138  139  140  141  142
// 143  144  145  146  147  148  149  150  151  152  153  154  155
// 156  157  158  159  160  161  162  163  164  165  166  167  168

// 0    1    2    3    4    5    6    7    8    9    10   11   12   13   14   15   16   17   18
// 19   20   21   22   23   24   25   26   27   28   29   30   31   32   33   34   35   36   37
// 38   39   40   41   42   43   44   45   46   47   48   49   50   51   52   53   54   55   56
// 57   58   59  (60)  61   62   63   64   65  (66)  67   68   69   70   71  (72)  73   74   75
// 76   77   78   79   80   81   82   83   84   85   86   87   88   89   90   91   92   93   94
// 95   96   97   98   99   100  101  102  103  104  105  106  107  108  109  110  111  112  113
// 114  115  116  117  118  119  120  121  122  123  124  125  126  127  128  129  130  131  132
// 133  134  135  136  137  138  139  140  141  142  143  144  145  146  147  148  149  150  151
// 152  153  154  155  156  157  158  159  160  161  162  163  164  165  166  167  168  169  170
// 171  172  173 (174) 175  176  177  178  179 (180) 181  182  183  184  185 (186) 187  188  189 
// 190  191  192  193  194  195  196  197  198  199  200  201  202  203  204  205  206  207  208
// 209  210  211  212  213  214  215  216  217  218  219  220  221  222  223  224  225  226  227
// 228  229  230  231  232  233  234  235  236  237  238  239  240  241  242  243  244  245  246
// 247  248  249  250  251  252  253  254  255  256  257  258  259  260  261  262  263  264  265
// 266  267  268  269  270  271  272  273  274  275  276  277  278  279  280  281  282  283  284
// 285  286  287 (288) 289  290  291  292  293 (294) 295  296  297  298  299 (300) 301  302  303
// 304  305  306  307  308  309  310  311  312  313  314  315  316  317  318  319  320  321  322
// 323  324  325  326  327  328  329  330  331  332  333  334  335  336  337  338  339  340  341
// 342  343  344  345  346  347  348  349  350  351  352  353  354  355  356  357  358  359  360




//     populate() {
//         let grid = [];
//         for (let i = 0; i < this.height; i++) {
//             let rowArr = [];
//             let row = document.createElement('ul');
//             row.className = 'row';
//             for (let j = 0; j < this.width; j++) {
//                 let cell = document.createElement('div')
//                 cell.className = 'cell';
//                 cell.dataset.pos = [i, j]
//                 rowArr.push(cell);

//                 row.appendChild(cell);
//             } 
//             this.root.appendChild(row);
//             grid.push(rowArr);
//         }

//         return grid;
//     }



// import stitchAndYoda from "../images/yoda-stitch.jpg";
// export const DOMExample = () => {
//   const testObj = {
//     key1: "hi",
//     key2: {
//       key3: "Hello",
//     },
//   };

//   const greeting = testObj?.key2?.key3 || testObj.key1;
//   document.body.classList.add("center");
//   const card = document.createElement("div");
//   card.classList.add("card", "center");
//   card.innerHTML = `<h2>${greeting} World!</h2>`;
//   document.body.append(card);
//   const imgCard = document.createElement("div");
//   imgCard.classList.add("card", "center", "image-card");
//   document.body.appendChild(imgCard);
//   const imgElement = document.createElement("img");
//   imgElement.src = buildAssetPath(stitchAndYoda);
//   imgElement.classList.add("card", "center");
//   imgElement.style.objectFit = "cover";
//   imgElement.style.filter = "grayscale(80%)";
//   document.body.appendChild(imgElement);
// };

// // to resolve path issues for images in JS

// function buildAssetPath(imgSrc) {
//   return `./dist/${imgSrc}`;
// }
