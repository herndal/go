import Game from './scripts/game';
import "./styles/reset.css";
import "./styles/page.css";
import "./styles/game.css";
import "./styles/board.css";
import "./styles/endgame.css";

const root = document.getElementById('root');
home();

function home() {
  const title = document.createElement('h1');
  title.innerHTML = 'Go';
  root.append(title);
  newGame();
}

function newGame() {
  const oldGame = document.getElementById('game');
  if(oldGame) root.removeChild(oldGame);
  const gameForm = document.createElement('div');
  const selectSize = document.createElement('select');
  const selectSizeLabel = document.createElement('p');
  const choose5 = document.createElement('option');
  const choose9 = document.createElement('option');
  const choose13 = document.createElement('option');
  const choose19 = document.createElement('option');
  const submit = document.createElement('button');
  const play = document.createElement('form');
  gameForm.classList.add('new-game');
  selectSize.id = 'size';
  play.id = 'play';
  choose5.value = '5';
  choose9.value = '9';
  choose13.value = '13';
  choose19.value = '19';
  selectSizeLabel.innerHTML = 'Choose the size of your board:';
  choose5.innerHTML = '5 x 5';
  choose9.innerHTML = '9 x 9';
  choose13.innerHTML = '13 x 13';
  choose19.innerHTML = '19 x 19';
  submit.innerHTML = 'Start Game';
  selectSize.append(choose5, choose9, choose13, choose19);
  play.append(selectSize, submit);
  gameForm.append(selectSizeLabel, play);
  root.appendChild(gameForm);
  document.querySelector("#play").addEventListener("submit", playGo(gameForm));
}

function playGo(gameForm) {
  return event => {
    event.preventDefault();
    //render the board
    //listen for click: play turn
    //surrender functionality
    //end game
    
    //restart game:
    //unregister/reregister event listeners?
    //clear board
    const size = document.getElementById('size').value;
    const game = new Game(size, newGame);
    root.removeChild(gameForm);
    game.play();
  }
}

/* <form>
  a: <input type="number" name="a" id="a"><br>
  b: <input type="number" name="b" id="b"><br>
  <button onclick="add()">Add</button>
</form>
<script>
  function add() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var sum = a + b;
    alert(sum);
  }
</script> */




// import "./styles/index.scss";
// import canvasExample from "./scripts/canvas";
// import Square from "./scripts/square";
// import { DOMExample } from "./scripts/DOMExample";
// const currentStateObj = {
//   currentExample: null,
//   currentEventListeners: [],
// };

// document.querySelector("#canvas-demo").addEventListener("click", startCanvas);
// document.querySelector("#DOM-demo").addEventListener("click", startDOM);

// function startDOM() {
//   unregisterEventListeners();
//   clearDemo();
//   currentStateObj.currentExample = "DOMDEMO";
//   DOMExample();
// }

// function startCanvas() {
//   clearDemo();
//   unregisterEventListeners();
//   currentStateObj.currentExample = "CANVASDEMO";
//   const canvas = new canvasExample();
//   canvas.createCanvas();
//   const squares = [new Square(canvas.ctx, canvas.coords, canvas.fillColor)];

//   let animating = true;

//   const animation = () => {
//     canvas.clearCanvas();
//     if (animating) squares.forEach((sq) => sq.updateSquare(canvas.fillColor));
//     squares.forEach((sq) => sq.drawSquare());
//     window.requestAnimationFrame(animation);
//     squares.forEach((sq) => {
//       if (sq.coords[0] + sq.coords[2] > window.innerWidth)
//         sq.reverseAnimation();
//       if (sq.coords[0] < 0) sq.reverseAnimation();
//     });
//   };

//   window.requestAnimationFrame(animation);

//   // window.addEventListener("keydown", handleKeyDown);
//   // currentStateObj.currentEventListeners.push([
//   //   "window",
//   //   "keydown",
//   //   handleKeyDown,
//   // ]);

//   // window.addEventListener("mousedown", handleMouseDown);
//   // currentStateObj.currentEventListeners.push([
//   //   "window",
//   //   "mousedown",
//   //   handleMouseDown,
//   // ]);

//   function handleKeyDown(event) {
//     if (event.which === 32) {
//       event.preventDefault();
//       squares.forEach((sq) => sq.reverseAnimation());
//       canvas.setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
//     }
//   }

//   function handleMouseDown(event) {
//     event.preventDefault();
//     squares.push(
//       new Square(
//         canvas.ctx,
//         canvas.coords.map((co) => co + 25),
//         canvas.fillColor
//       )
//     );
//     // animating = !animating;
//   }
// }

// function unregisterEventListeners() {
//   while (currentStateObj.currentEventListeners.length) {
//     let [
//       selector,
//       event,
//       handler,
//     ] = currentStateObj.currentEventListeners.pop();
//     if (selector === "window") {
//       window.removeEventListener(event, handler);
//       console.log(handler);
//     } else {
//       document.querySelector(selector).removeEventListener(event, handler);
//     }
//   }
// }

// function clearDemo() {
//   if (currentStateObj.currentExample === "CANVASDEMO")
//     document.body.removeChild(document.querySelector("canvas"));
//   if (currentStateObj.currentExample === "DOMDEMO") {
//     [...document.querySelectorAll(".card")].forEach((elem) =>
//       document.body.removeChild(elem)
//     );
//   }
// }
