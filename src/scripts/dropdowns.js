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
  const elements = [];
  const name = document.createElement('h3');
  const links = document.createElement('ul');
  const github = document.createElement('li');
  const linkedIn = document.createElement('li');
  const twitter = document.createElement('li');
  const ghLink = document.createElement('a');
  const liLink = document.createElement('a');
  const twLink = document.createElement('a');
  name.classList.add('red');
  name.innerHTML = 'Donald Herndon';
  links.id = 'author-links';
  github.classList.add('link');
  linkedIn.classList.add('link');
  twitter.classList.add('link');
  ghLink.href = 'https://github.com/herndal/go';
  liLink.href = 'https://www.linkedin.com/in/donald-herndon-8364b01a5/';
  twLink.href = 'https://twitter.com/donald_builds';
  ghLink.innerHTML = '<i class="fab fa-github-square"></i>';
  liLink.innerHTML = '<i class="fab fa-linkedin"></i>';
  twLink.innerHTML = '<i class="fab fa-twitter-square"></i>';
  github.appendChild(ghLink);
  linkedIn.appendChild(liLink);
  twitter.appendChild(twLink);
  links.append(github, linkedIn, twitter);
  elements.push(name, links);
  return elements;
}

export function aboutElements() {
  const elements = ['wikipedia', 'american go association'];
  return elements;
}