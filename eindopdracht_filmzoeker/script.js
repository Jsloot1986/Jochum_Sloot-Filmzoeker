// the movies database is in file. 'scriptmovie.js'

const movieList = document.getElementById("movie-list");
const movieInfo = document.getElementById("movie-Info");

//add database in function to wrap it with tags and send back to DOM.
const addMoviesToDom = (movieSelector) =>{
    const movieListLi = movieSelector.map((movie)=> {
        let ulMovieList = document.createElement("li");
        ulMovieList.id = 'movieList--item';
        let h2Title = document.createElement("h2");
        h2Title = movie.Title;
        let pText = document.createElement("p");
        pText = "jaar= " + movie.Year + "Soort film= " + movie.Type; 
        let aLink = document.createElement("a");
        aLink.href = "https://www.imdb.com/title/" + movie.imdbID;
        aLink.target = "_blank";
        let img_link = document.createElement('img');
        ulMovieList.appendChild(aLink).appendChild(img_link);
       img_link.src = movie.Poster;
        img_link.alt = movie.title;
        ulMovieList.classList.add("img_link");
        
        return movie = ulMovieList;
    });
    movieListLi.forEach((moviesToDom) => {
        movieList.appendChild(moviesToDom);
    });
};
addMoviesToDom(movies);

// add the eventlistner at the button and use the filter function

const handleOnChangeEvent = (e) =>{
    switch (e.target) {
        case newMovies: {
            filterNewMovies(newMovies);
            break;
        }
        case avengersMovies: {
            filterMovies(avengersMovies);
            break;
        }
        case xmenMovies: {
            filterMovies(xmenMovies);
            break;
        }
        case princessMovies: {
            filterMovies(princessMovies);
            break;
        }
        case batmanMovies: {
            filterMovies(batmanMovies);
            break;
        }
        default:
            console.log("maak een andere keuze");
    };
};
const radioButtons = document.querySelectorAll('input[type=radio][name="moviesFilter"][value]');
radioButtons.forEach(radio => radio.addEventListener("click", handleOnChangeEvent));

//filter function to filter the titles.

const filterMovies = (wordInTitle) =>{
    movieList.innerHTML = "";
    const searchValue = wordInTitle.value;

    const filteredMovies = movies.filter((movie) =>{
        return movie.Title.includes(searchValue);
    });
    return addMoviesToDom(filteredMovies);
};

// filter function for new movies 2014

const filterNewMovies = () =>{
    movieList.innerHTML = "";
    
    const filterByYear = movies.filter((movie) => {
        return movie.Year > "2013" && movie.Year < "2020";
    });
    return addMoviesToDom(filterByYear);
};

// searchbar
const searchBar = document.getElementById("userInput");

searchBar.addEventListener("keypress", elm => {
    movieList.innerHTML="";
    const searchString = elm.target.value;

    const filteredMovies = movies.filter(movie =>{
        return movie.Title.includes(searchString) || movie.Title.toLowerCase().includes(searchString) ||
        movie.Title.toUpperCase().includes(searchString);
    });
    displayMovies(filteredMovies);
});
const displayMovies = (filteredMovies) =>{
    return addMoviesToDom(filteredMovies);
};
