
// om film lijst in te laden //

const movieGallery = document.getElementById("movieList");

const addMoviesToDom = movies => {
    movies.map(movie => {
        movieGallery.innerHTML = "";
    });
    const addListElement = movies.map(movie => {
        const newLi = document.createElement("li");
        const a = document.createElement("a");
        a.target = "_blank";
        a.href = "https://www.imdb.com/title/" + movie.imdbID + "/";
        const img = document.createElement("img");
        img.src = movie.poster;
        a.appendChild(img);
        newLi.appendChild(a);
        return newLi;
    });
        addListElement.forEach(newLi => movieGallery.appendChild(newLi));
};
addMoviesToDom(movies);

// filteren van films //

window.addEventListener('load', (event) => {
const radios = document.querySelectorAll('input[type=radio]');
radios.forEach(radio => radio.addEventListener('change', (radio) => {
    radio.target
// filter voor films vanaf 2014
if  (document.getElementById('newmovies').checked) {
    const latestMovies = movies.filter(function (movie) {
        return movie.year >= 2014;
    });
    addMoviesToDom(latestMovies);
}
// filter voor avengers films
else if (document.getElementById('avengers').checked) {
    const avengersMovies = movies.filter(function (movie) {
        return movie.title.includes("Avengers");
        });
        addMoviesToDom(avengersMovies);
}
// filter voor x-men films
else if (document.getElementById('xmen').checked) {
    const xmenMovies = movies.filter(function(movie) {
        return movie.title.includes("X-Men");
    });
    addMoviesToDom(xmenMovies);
}
// filter voor princess films
else if (document.getElementById('princess').checked) {
    const princessMovies = movies.filter(function (movie) {
        return movie.title.includes("Princess");
    });
    addMoviesToDom(princessMovies);
}
// filter voor batman films
else if (document.getElementById('batman').checked) {
    const batmanMovies = movies.filter(function (movie) {
        return movie.title.includes("Batman");
    });
    addMoviesToDom(batmanMovies);
} 

else if (document.getElementById('all').checked) {
  
    addMoviesToDom(movies);

}
}));})
