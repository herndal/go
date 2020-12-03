//Author and About dropdowns

export function dropdown(parent, name, listElements) {
  const dropdown = document.createElement('ul');
  const button = document.createElement('button');
  const list = document.createElement('ul');
  button.id = name.toLowerCase();
  list.id = `${name.toLowerCase()}-list`;
  dropdown.classList.add('dropdown');
  button.classList.add('option', 'drop-button');
  list.classList.add('list');
  if(name === 'Author') button.classList.add('red');
  button.innerHTML = name;
  list.append(...listElements);
  dropdown.append(button, list);
  parent.appendChild(dropdown);
  button.onclick = reveal(dropdown, list);
  document.onclick = hideLists;
}
function reveal(dropdown, list) {
  return event => {
    event.stopPropagation();
    hideLists();
    list.classList.toggle('show');
  }
}
function hideLists() {
  const lists = document.querySelectorAll('.list');
  for(let i = 0; i < lists.length; i++) {
    if (lists[i].classList.contains('show')) {
      lists[i].classList.remove('show');
    }
  }
}
export function authorElements() {
  const name = document.createElement('h3');
  name.classList.add('red');
  name.innerHTML = 'Donald Herndon';
  const links = document.createElement('ul');
  links.id = 'author-links';
  const github = listLink(
    'https://github.com/herndal/go',
    '<i class="fab fa-github-square"></i>',
    'My Github repository for this project'
  );
  const linkedIn= listLink(
    'https://www.linkedin.com/in/donald-herndon-8364b01a5/',
    '<i class="fab fa-linkedin"></i>',
    'My LinkedIn'
  );
  const twitter = listLink(
    'https://twitter.com/donald_builds',
    '<i class="fab fa-twitter-square"></i>',
    'My Twitter'
  );
  links.append(github, linkedIn, twitter);
  return [name, links];
}
export function aboutElements() {
  const wikipedia = listLink(
    'https://en.wikipedia.org/wiki/History_of_Go',
    '<i class="fab fa-wikipedia-w"></i>',
    'Wikipedia: the History of Go',
    'wikipedia'
  );
  const aga = listLink(
    'https://www.usgo.org/',
    img('https://www.usgo.org/theme/images/agalogo2.png'),
    'The American Go Association. Founded in New York City in 1935, AGA is one of the oldest Western Go associations.',
    'aga'
  );
  const deepMind = listLink(
    'https://deepmind.com/research/case-studies/alphago-the-story-so-far',
    img('https://upload.wikimedia.org/wikipedia/commons/1/12/DeepMind_logo.png'),
    'AlphaGo: The project at Google\'s DeepMind that created the first program capable of defeating a Go world champion in 2016. Their story inspired this project!',
    'deepMind'
  )
  return [aga, wikipedia, deepMind];
}


//In-game instructions modal

export function instructions(game) {
  const root = document.getElementById('root');
  const button = document.createElement('div');
  const instructions = document.createElement('div');
  button.id = 'instructions-button';
  instructions.id = 'instructions';
  button.innerHTML = '<i class="far fa-question-circle"></i>';
  fillInstructions(instructions);
  root.appendChild(instructions);
  game.appendChild(button);
  button.onclick = showInstructions(instructions);
  document.onclick = hideInstructions(instructions);
}
function fillInstructions(instructions) {
  const gettingStarted = document.createElement('div');
  const gettingStartedTitle = document.createElement('h4');
  const gettingStartedInfo = document.createElement('ul')
  gettingStartedTitle.innerHTML = 'Getting Started';
  gettingStartedInfo.append(
    li('The board is empty at the beginning of the game.'),
    li('The first player to move is Black.'),
    li('Players alternate turns until the game is over.')
    );
  gettingStarted.append(gettingStartedTitle, gettingStartedInfo);
  const gamePlay = document.createElement('div');
  const gamePlayTitle = document.createElement('h4');
  const gamePlayInfo = document.createElement('ul');
  gamePlayTitle.innerHTML = 'Taking Turns and Capturing';
  gamePlayInfo.append(
    li('On their turn, a player can either pass their turn or place one stone.'),
    li('Click on any empty intersection to place a stone:'),
    img('https://cabins-seeds.s3.amazonaws.com/go-move-example.png'),
    li('To pass your turn, click on your color\'s information box:'),
    img('https://cabins-seeds.s3.amazonaws.com/go-pass-example.png'),
    li('Adjacent stones form a group.'),
    li('A liberty is defined as an empty intersection next to a group.'),
    img('https://cabins-seeds.s3.amazonaws.com/go-liberty-example.png'),
    li('In this example, the large white group has just one liberty remaining, in the center.'),
    li('When a group has no liberties, it becomes captured and is removed from the board:'),
    img('https://cabins-seeds.s3.amazonaws.com/go-captured-example.png'),
    li('Now the black player has filled the last liberty and captured seven white stones.'),
    li('There are two illegal moves: Suicide and Ko.'),
    li('Ko means that a previous position of the board cannot be exactly repeated.'),
    li('Suicide means that a player cannot play a move that results in their own group being captured.')
    );
  gamePlay.append(gamePlayTitle, gamePlayInfo);
  const winning = document.createElement('div');
  const winningTitle = document.createElement('h4');
  const winningInfo = document.createElement('ul');
  winningTitle.innerHTML = 'Ending the game';
  winningInfo.append(
    li('The game ends when both players pass their turn.'),
    li('The player who commands more territory on the board wins.'),
    img('https://cabins-seeds.s3.amazonaws.com/go-endgame-example.png'),
    li('A player\'s territory includes the stones on the board of one color and the empty intersections surrounded by that color.')
  );
  winning.append(winningTitle, winningInfo)
  instructions.append(gettingStarted, gamePlay, winning);
}
function showInstructions(instructions) {
  return event => {
    event.stopPropagation();
    instructions.classList.toggle('show');
    const board = document.querySelector('.board-group').firstChild;
    const boardProps = board.getBoundingClientRect();
    const top = boardProps.top;
    const left = boardProps.left;
    instructions.setAttribute('style', `top: ${top}px; left: ${left}px;`);
  }
}
function hideInstructions(instructions) {
  return event => {
    if (instructions.classList.contains('show')) {
      instructions.classList.remove('show');
    }
  }
}

//Utility functions for creating lists

function listLink(href, html, tip, ...classes) {
  const li = document.createElement('li');
  const link = document.createElement('a');
  li.classList.add('link');
  link.classList.add(...classes);
  link.href = href;
  if(typeof html === 'string') {
    link.innerHTML = html;
  } else {
    link.append(html);
  }
  tooltip(link, tip);
  link.target = 'blank';
  li.appendChild(link);
  return li;
}
function li(text) {
  const element = document.createElement('li');
  element.innerHTML = text;
  return element;
}
function img(url) {
  const element = document.createElement('img');
  element.src = url;
  return element;
}
function tooltip(link, tip) {
  link.title = tip;
  link.addEventListener('mouseover', showTip);
  link.addEventListener('mouseout', hideTip);
}
function showTip() {
  const title = this.title;
  this.title = '';
  this.setAttribute('tooltip', title);
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.append(title);
  document.body.firstChild.before(tooltip);
  tooltip.setAttribute('style', 'max-width: 13em');
  const linkProps = this.getBoundingClientRect();
  const tooltipProps = tooltip.getBoundingClientRect(); 
  const top = linkProps.top + (linkProps.height + 15);
  const left = linkProps.left + (linkProps.width / 2) - (tooltipProps.width / 2);
  tooltip.setAttribute('style', `max-width: 13em; top: ${top}px; left: ${left}px;`);
}
function hideTip() {
  const title = this.getAttribute('tooltip');
  this.title = title;
  this.removeAttribute('tooltip');
  document.querySelector(".tooltip").remove();
}