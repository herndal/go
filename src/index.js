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