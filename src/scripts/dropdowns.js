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