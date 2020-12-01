import Game from './scripts/game';
import {
  dropdown,
  authorElements,
  aboutElements
 } from './scripts/dropdowns';
import "./styles/reset.css";
import "./styles/nav.css";
import "./styles/game.css";
import "./styles/board.css";
import "./styles/endgame.css";
import "./styles/responsive-design.css";

const root = document.getElementById('root');
home();

function home() {
  const title = document.createElement('div');
  const text = document.createElement('h1');
  title.id = 'title';
  text.innerHTML = 'Go';
  title.appendChild(text);
  root.append(title);
  options();
}

function options() {
  const oldGame = document.getElementById('game');
  const gameForm = document.querySelector('.new-game');
  const back = document.getElementById('back');
  if(oldGame) root.removeChild(oldGame);
  if(gameForm) root.removeChild(gameForm);
  if(back) root.removeChild(back);
  const options = document.createElement('ul');
  const play = document.createElement('button');
  options.id = 'options';
  play.id = 'play';
  play.classList.add('option');
  play.innerHTML = 'Play';
  play.onclick = newGame;
  options.appendChild(play);
  dropdown(options, 'About', aboutElements());
  dropdown(options, 'Author', authorElements());
  root.appendChild(options);
}

function newGame() {
  const docOptions = document.getElementById('options');
  root.removeChild(docOptions);
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
  selectSizeLabel.innerHTML = 'Choose the size of your board';
  choose5.innerHTML = '5 x 5';
  choose9.innerHTML = '9 x 9';
  choose13.innerHTML = '13 x 13';
  choose19.innerHTML = '19 x 19';
  submit.innerHTML = 'Start Game';
  selectSize.append(choose5, choose9, choose13, choose19);
  play.append(selectSize, submit);
  gameForm.append(selectSizeLabel, document.createElement('hr'), play);
  root.append(gameForm, backButton());
  document.querySelector("#play").addEventListener("submit", playGo(gameForm));
}

function playGo(gameForm) {
  return event => {
    event.preventDefault();
    const size = document.getElementById('size').value;
    const game = new Game(size, options, newGame);
    root.removeChild(gameForm);
    root.removeChild(back);
    game.play();
  }
}

function backButton() {
  const button = document.createElement('button');
  const back = document.createElement('span');
  back.classList.add('back-go', 'red');
  button.id = 'back';
  back.innerHTML = 'back';
  button.onclick = options;
  button.append('Go ', back);
  return button;
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
