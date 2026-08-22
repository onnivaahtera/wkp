const movies = new Array();

numOfMovies = parseInt(prompt("Enter the number of movies to rate: "));

for (let i = 1; i <= numOfMovies; i++) {
  const title = prompt(`Title for movie ${i}: `);
  const rating = parseInt(prompt(`Rating for movie ${i}: `));
  movies.push({ title: title, rating: rating });
}
movies.sort((a, b) => b.rating - a.rating);
const movieList = document.querySelector("#target");
movies.forEach((movie, index) => {
  const movieElement = document.createElement("p");
  movieElement.textContent = `${movie.title} ${movie.rating}/5`;
  movieList.appendChild(movieElement);
});

document.querySelector(
  "#highest"
).innerHTML = `Highest rated movie ${movies[0].title} ${movies[0].rating}/5`;
