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
const query = window.matchMedia("(max-height: 550px)");
home();

function home() {
  const title = document.createElement('div');
  const text = document.createElement('h1');
  title.id = 'title';
  text.innerHTML = 'Go';
  title.appendChild(text);
  root.append(title);
  options();
  query.addListener(toggleLandscape);
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
  const footer = document.createElement('footer');
  const footerBox = document.createElement('div');
  const freepik = document.createElement('a');
  const flaticon = document.createElement('a');
  const fontawesome = document.createElement('a');
  freepik.href = "https://www.flaticon.com/authors/freepik";
  flaticon.href = "https://www.flaticon.com/";
  fontawesome.href = "https://fontawesome.com/license";
  freepik.innerHTML = 'Freepik';
  flaticon.innerHTML= "www.flaticon.com";
  fontawesome.innerHTML = "www.fontawesome.com";
  footerBox.append(
    'Icons made by ',
    freepik,
    ' from ',
    flaticon,
    ' and ',
    fontawesome
  )
  footer.appendChild(footerBox);
  document.body.appendChild(footer);
  toggleLandscape(query);
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

function playGo(gameForm) {
  return event => {
    event.preventDefault();
    const size = document.getElementById('size').value;
    const game = new Game(size, options);
    root.removeChild(gameForm);
    root.removeChild(back);
    document.body.removeChild(document.getElementsByTagName('footer')[0]);
    toggleLandscape(query);
    game.play();
  }
}

function toggleLandscape(query) {
  const root = document.getElementById('root');
  let over = false;
  const game = document.getElementById('game');
  if (game) over = game.classList.contains('over');
  let titleBlock = document.getElementById('title');
  if (query.matches && game) {
    if (titleBlock) root.removeChild(titleBlock);
    if (over) {
      const footer = document.getElementById('board-footer');
      const header = document.getElementById('endgame-header');
      header.remove();
      footer.appendChild(header);
    }
  } else {
    if (!titleBlock) {
      titleBlock = document.createElement('div');
      titleBlock.id = 'title';
      const title = document.createElement('h1');
      title.innerHTML = 'Go';
      titleBlock.appendChild(title);
      root.firstChild.before(titleBlock);
    }
    if (over) {
      const table = document.querySelector('.table')
      const header = document.getElementById('endgame-header');
      header.remove();
      table.before(header);
    }
  }
  const instructions = document.getElementById('instructions');
  if (instructions) {
    if (instructions.classList.contains('show')) {
      const board = document.querySelector('.board-group').firstChild;
      const boardProps = board.getBoundingClientRect();
      const top = boardProps.top;
      const left = boardProps.left;
      instructions.setAttribute('style', `top: ${top}px; left: ${left}px;`);
    }
  }
}