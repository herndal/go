import {
  Board,
  Player
} from './board';

const black = new Player('black');
const white = new Player('white');

export default class Game {
  constructor(size) {
    this.size = size;
    this.board = new Board(size);
    black.pass = false;
    black.captured = 0;
    white.pass = false;
    white.captured = 0;
    this.currentPlayer = black;
    this.docBoard = document.createElement('ul');
    this.docBoard.classList.add('board', 'black');
    this.fill(size);
    const root = document.getElementById('root');
    root.appendChild(this.docBoard);
    this.addStars();
  }

  fill() {
    let k = 0;
    for (let i = 0; i < this.size; i++) {
      let row = document.createElement('ul');
      row.className = 'row';
      for (let i = 0; i < this.size; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = k;
        cell.dataset.stone = "_";
        row.appendChild(cell);
        k++;
      }
      this.docBoard.appendChild(row);
      this.docBoard.style.width = `${30 * this.size}px`;
      this.docBoard.style.height = `${30 * this.size}px`;
    }
  }

  addStars() {
    let stars = [];
    switch(this.size) {
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

    // fresh players, fresh board
    // get user input
    document.querySelector('board').addEventListener("click", this.playTurn(board));
    document.querySelector(".pass").addEventListener("click", this.passTurn);
    // take turns
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
    const board = document.querySelector('board');
    board.toggleClass('white');
    board.toggleClass('black');
  }

  playTurn(board) {
    return function(e) {
      if (!e.target.classList.contains('white') && !e.target.classList.contains('black')) {
        const idx = e.target.classList
        //play a turn on our board
      }
    }
  }

  passTurn(board) {
    return function(e) {
      if (e.target.classList.contains(`${this.currentPlayer.color}`)) {
        this.swap();
      }
    }
  }
}

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
