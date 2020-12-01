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
    '<i class="fab fa-github-square"></i>'
  );
  const linkedIn= listLink(
    'https://www.linkedin.com/in/donald-herndon-8364b01a5/',
    '<i class="fab fa-linkedin"></i>'
  );
  const twitter = listLink(
    'https://twitter.com/donald_builds',
    '<i class="fab fa-twitter-square"></i>'
  );
  links.append(github, linkedIn, twitter);
  return [name, links];
}

export function aboutElements() {
  const wikipedia = listLink(
    'https://en.wikipedia.org/wiki/Go_(game)',
    '<i class="fab fa-wikipedia-w"></i>',
    'wikipedia'
  );
  return [wikipedia];
}

function listLink(href, html, ...classes) {
  const li = document.createElement('li');
  const link = document.createElement('a');
  li.classList.add('link');
  link.classList.add(...classes);
  link.href = href;
  link.innerHTML = html;
  link.target = 'blank';
  li.appendChild(link);
  return li;
}

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
    li('The board is empty at the beginning of the game'),
    li('The first player to go is always Black'),
    li('Players alternate moves until the game is over')
    );
  gettingStarted.append(gettingStartedTitle, gettingStartedInfo);
  const gamePlay = document.createElement('div');
  const gamePlayTitle = document.createElement('h4');
  const gamePlayInfo = document.createElement('ul');
  gamePlayTitle.innerHTML = 'Taking Turns and Capturing';
  gamePlayInfo.append(
    li('On their turn, a player can either pass their turn or place one stone'),
    li('Click on any empty intersection to place a stone'),
    li('Adjacent stones form a group'),
    li('A liberty is defined as an empty intersection next to a group'),
    li('When a group has no liberties, it becomes captured and is removed from the board'),
    li('To pass their turn, a player clicks on their corresponding information box'),
    img('https://cabins-seeds.s3.amazonaws.com/go-pass-example.png'),
    li('There are two illegal moves: Suicide and Ko'),
    li('Ko means that a previous position of the board cannot be exactly repeated'),
    li('Suicide means that a player cannot play a move that results in their own group being captured')
    );
  gamePlay.append(gamePlayTitle, gamePlayInfo);
  const winning = document.createElement('div');
  const winningTitle = document.createElement('h4');
  const winningInfo = document.createElement('ul');
  winningTitle.innerHTML = 'Ending the game';
  winningInfo.append(
    li('The game ends when both players pass their turn'),
    li('The player who commands more territory on the board wins'),
    li('A player\'s territory includes the stones on the board of one color and the empty intersections surrounded by that color')
  );
  winning.append(winningTitle, winningInfo)
  instructions.append(gettingStarted, gamePlay, winning);
}

function showInstructions(instructions) {
  return event => {
    event.stopPropagation();
    instructions.classList.toggle('show');
  }
}

function hideInstructions(instructions) {
  return event => {
    if (instructions.classList.contains('show')) {
      instructions.classList.remove('show');
    }
  }
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