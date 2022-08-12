let input = document.querySelector('#search-form');
const searchButton = document.querySelector('#submit-form');
const movieContent = document.querySelector('.movie');
let list = document.querySelector('.list')

searchButton.addEventListener('click', () => {
  fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${input.value}`, createMovie);
});

input.addEventListener('input', () => {
  fetch(`/movies?${input.value}`, createList);
});

function createList (data){
  list.textContent= ''
    data.forEach((element) => {
    let listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.textContent = element;
    list.appendChild(listItem);
    // listItem.addEventListener('click' ,displayName(element) )
    listItem.setAttribute("onclick", "displayName('" + element + "')");
  });
}

function displayName(elementName) {
  input.value = elementName;
  list.textContent='';
}

function createElement(ele, className, parent) {
    let element = document.createElement(ele);
    element.classList.add(className);
    parent.appendChild(element);
    return element;
  }

function createMovie(data) {
  movieContent.textContent = "";
  let movie = data.data.movies[0];
  const movieImg=createElement('img','movie-img',movieContent);
  movieImg.setAttribute("src", `${movie.medium_cover_image}`);

  const aboutMovie=createElement('div','about',movieContent);
  
 const movieName= createElement('h2','h2',aboutMovie);
 movieName.textContent=`${movie.title}`;

 const rate = createElement('p','para',aboutMovie);
 rate.textContent += `${movie.rating}`;

 const icon = createElement('i', 'fa-solid', rate);
 icon.classList.add('fa-star');
 
 const watchLink = createElement('a', 'anchor', aboutMovie);
 watchLink.setAttribute('href', `${movie.url}`);
 watchLink.setAttribute('target', '_blank'); 
 
 const button = createElement('button', 'Watch-button', watchLink);
button.textContent="watch"
}