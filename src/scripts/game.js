import Board from './board';
import Player from './player';
import { instructions } from './dropdowns';

const black = new Player('black', 'B');
const white = new Player('white', 'W');
const players = {
  'B': black,
  'W': white
};

export default class Game {
  constructor(size, newGame) {
    this.currentPlayer = black;
    this.board = new Board(size);
    this.reset();
    this.drawGame(size);
    this.passTurn = this.passTurn.bind(this);
    this.newGame = newGame.bind(this);
  }
  reset() {
    black.captured = 0;
    white.captured = 0;
  }
  drawGame(size) {
    const game = document.createElement('div');
    game.id = 'game';
    game.classList.add('black');
    instructions(game);
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
    blackCaptured.classList.add('captured');
    whiteCaptured.classList.add('captured');
    docPlayers.dataset.pass = false;
    blackPlayer.dataset.player = 'B';
    whitePlayer.dataset.player = 'W';
    blackCaptured.innerHTML = `${black.captured}`;
    whiteCaptured.innerHTML = `${white.captured}`;
    this.addCell(blackPlayer, 'B');
    this.addCell(whitePlayer, 'W');
    blackPlayer.appendChild(blackCaptured);
    whitePlayer.appendChild(whiteCaptured);
    docPlayers.append(blackPlayer, whitePlayer);
    game.appendChild(docPlayers);
  }
  drawBoard(size, game) {
    const boardGroup = document.createElement('div');
    const board = document.createElement('ul');
    boardGroup.classList.add('board-group');
    board.classList.add('board', `s${size}`);
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
      };
      board.appendChild(row);
    };
    boardGroup.appendChild(board);
    game.appendChild(boardGroup);
  };
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
    const notPasses = this.addPassListeners();
    document.querySelector('.board').addEventListener("click", this.playTurn(this.board, notPasses));
  }
  swap() {
    if (this.currentPlayer === black) {
      this.currentPlayer = white;
    } else {
      this.currentPlayer = black;
    }
    const game = document.querySelector('#game');
    game.classList.toggle('white');
    game.classList.toggle('black');
  }
  playTurn(board, notPasses) {
    return e => {
      e.preventDefault();
      const player = this.currentPlayer;
      const color = player.color;
      const name = player.name;
      if (e.target.classList.contains('cell')) {
        const sPos = parseInt(e.target.dataset.index);
        try {
          const capturedStones = board.playMove(player, sPos);
          if(capturedStones) {
            this.clearErrors();
            e.target.dataset.stone = color;
            let cell;
            capturedStones.forEach(index => {
              cell = document.querySelector(`[data-index="${index}"]`);
              cell.dataset.stone = "_";
            })
            notPasses[0]();
            notPasses[1]();
            const docPlayers = document.querySelector('.players');
            if (docPlayers.dataset.pass === 'true') {
              const opponentColor = color === 'W' ? 'B' : 'W';
              const index = color === 'W' ? 0 : 1;
              const opponent = document.querySelector(`[data-player="${opponentColor}"]`);
              notPasses[index] = this.resetPassListeners(opponent);
              docPlayers.dataset.pass = false;
            }
            const capturedElement = document.querySelector(`.player.${name}`).childNodes[1];
            capturedElement.innerHTML = `${player.captured}`;
            this.swap();
          }
        } catch(error) {
          this.renderError(error);
        }
      }
    }
  }
  addPassListeners() {
    const notPasses = [];
    document.querySelectorAll('.player').forEach(player => {
      let listeners = [this.offerPass(player), this.notPass(player)];
      notPasses.push(listeners[1]);
      player.addEventListener('mouseover', listeners[0]);
      player.addEventListener('mouseout', listeners[1]);
      player.onclick = this.passTurn(player, listeners);
    });
    return notPasses;
  }
  resetPassListeners(player) {
    let listeners = [this.offerPass(player), this.notPass(player)];
    player.addEventListener('mouseover', listeners[0]);
    player.addEventListener('mouseout', listeners[1]);
    player.onclick = this.passTurn(player, listeners);
    return listeners[1];
  }
  offerPass(player) {
    return () => {
      if(player.dataset.player === this.currentPlayer.color) {
        const pass = player.childNodes[1];
        if (pass) player.removeChild(player.childNodes[1]);
        player.classList.add("pass");
        player.dataset.pass = true;
      }
    }
  }
  notPass(player) {
    return () => {
      if(player.dataset.pass === 'true') {
        player.dataset.pass = false;
        player.classList.remove('pass');
        const captured = document.createElement('div');
        captured.classList.add('captured');
        const gamePlayer = players[player.dataset.player];
        captured.innerHTML = `${gamePlayer.captured}`;
        player.appendChild(captured);
      }
    }
  }
  passTurn(player, listeners) {
    return e => {
      if(player.dataset.player === this.currentPlayer.color) {
        e.preventDefault;
        this.clearErrors();
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
  }
  renderError(message) {
    const board = document.querySelector('.board');
    let error = document.getElementById('error');
    if(!error) {
      error = document.createElement('h3');
      error.id = 'error';
      board.after(error);
    }
    error.innerHTML = message;
  }
  clearErrors() {
    const boardGroup = document.querySelector('.board-group');
    let error = document.getElementById('error');
    while (error) {
      boardGroup.removeChild(error);
      error = document.getElementById('error');
    }
  }
  endGame(docPlayers) {
    const root = document.getElementById('root');
    const instructionsButton = document.getElementById('instructions-button');
    const instructions = document.getElementById('instructions');
    root.removeChild(instructions);
    const game = document.querySelector('#game');
    game.classList.add('over');
    game.removeChild(instructionsButton);
    game.removeChild(docPlayers);
    this.drawScore();
  }
  drawScore() {
    const {blackScore, whiteScore, grid} = this.board.score();
    const boardGroup = document.querySelector('.board-group');
    const endGame = document.createElement('div');
    const header = document.createElement('div');
    const winMessage = document.createElement('h2');
    const table = document.createElement('div');
    const blackTotals = document.createElement('div');
    const whiteTotals = document.createElement('div');
    const blackBox = document.createElement('div');
    const whiteBox = document.createElement('div');
    const footer = document.createElement('div');
    const goHome = document.createElement('button');
    endGame.classList.add('endgame');
    table.classList.add('table');
    blackTotals.classList.add('totals', 'board', 'black');
    whiteTotals.classList.add('totals', 'board', 'white');
    blackBox.classList.add('total-box');
    whiteBox.classList.add('total-box');
    if(blackScore > whiteScore) {
      winMessage.innerHTML = `Black wins!`; //or draw
    } else if(blackScore < whiteScore) {
      winMessage.innerHTML = `White wins!`; //or draw
    } else {
      winMessage.innerHTML = `Draw!`; //or draw
    }
    header.id = 'endgame-header';
    header.appendChild(winMessage);
    goHome.innerHTML = 'Home';
    goHome.onclick = this.newGame;
    footer.id = 'board-footer';
    footer.appendChild(goHome);
    this.addCell(blackTotals, 'B');
    this.addCell(whiteTotals, 'W');
    this.addScore(blackBox, blackScore);
    this.addScore(whiteBox, whiteScore);
    this.addCaptured(blackBox, 'B');
    this.addCaptured(whiteBox, 'W');
    blackTotals.appendChild(blackBox);
    whiteTotals.appendChild(whiteBox);
    table.append(blackTotals, whiteTotals);
    for(let i = 0; i < grid.length; i++) {
      let cell = document.querySelector(`[data-index="${i}"]`);
      cell.dataset.stone = grid[i];
    }
    let query = window.matchMedia("(max-height: 550px)");
    query.matches ? footer.append(header) : endGame.append(header) ;
    endGame.append(table);
    boardGroup.before(endGame);
    boardGroup.appendChild(footer);
  }
  addCaptured(element, color) {
    const child = document.createElement('div');
    const message = document.createElement('h3');
    const captured = document.createElement('h2');
    child.classList.add('total');
    message.innerHTML = 'Captured:';
    captured.innerHTML = `${players[color].captured}`;
    child.append(message, captured);
    element.append(child);
  }
  addScore(element, score) {
    const child = document.createElement('div');
    const message = document.createElement('h3');
    const htmlScore = document.createElement('h2');
    child.classList.add('total');
    message.innerHTML = 'Score:';
    htmlScore.innerHTML = `${score}`;
    child.append(message, htmlScore);
    element.append(child);
  }
}