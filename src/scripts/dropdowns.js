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
    if (!list.classList.contains('show')) {
      list.classList.add('show');
    }
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
  const elements = [];
  const name = document.createElement('h3');
  const links = document.createElement('ul');
  const github = document.createElement('li');
  const linkedIn = document.createElement('li');
  const angelList = document.createElement('li');
  const twitter = document.createElement('li');
  links.id = 'author-links';
  github.classList.add('link');
  linkedIn.classList.add('link');
  angelList.classList.add('link');
  twitter.classList.add('link');
  name.classList.add('red');
  name.innerHTML = 'Donald Herndon';
  github.innerHTML = 'GH';
  linkedIn.innerHTML = 'LI';
  angelList.innerHTML = 'AL';
  twitter.innerHTML = 'TW';
  links.append(github, linkedIn, angelList, twitter);
  elements.push(links, name);
  return elements;
}

export function aboutElements() {
  const elements = ['wikipedia', 'american go association'];
  return elements;
}