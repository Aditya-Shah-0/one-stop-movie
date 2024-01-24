//Movies list
const API_KEY = 'api_key=360adcd963f64afc2c8ca49d7ad57b84';
const BASE_URL = 'https://api.themoviedb.org/3';

//Movies Series
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const API_URL1 = BASE_URL + '/movie/now_playing?' + API_KEY;
const API_URL2 = BASE_URL + '/movie/popular?' + API_KEY;
const API_URL3 = BASE_URL + '/movie/top_rated?' + API_KEY;
const API_URL4 = BASE_URL + '/movie/upcoming?' + API_KEY;

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

// https://api.themoviedb.org/3/movie/popular?api_key=360adcd963f64afc2c8ca49d7ad57b84

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const nowPlaying = document.getElementById('nowplaying')
const popular = document.getElementById('popular')
const top_rated = document.getElementById('topRated')
const upcoming = document.getElementById('upcoming')
const all = document.getElementById('all')


getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
        showMovies(data.results);
    })
}

function showMovies(data) {
    main.innerHTML = '';
    data.forEach(movie => {
        const { title, poster_path, vote_average, id } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
                <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
            </a> 
            <div class="movie-info">
                <h3>${title}</h3>
            </div> 
            <span class="${getColor(vote_average)}">${vote_average}</span>`

        movieEl.addEventListener('click', function () { window.location.href = 'HTML-home2.html' })

        main.appendChild(movieEl);

        document.getElementById(id).addEventListener('click', () => {
            console.log(id);
            openDetails(movie);
        })
    })
}

all.addEventListener('click', (e) => {
    const main = document.getElementById('main');
    getMovies(API_URL);

    function getMovies(url) {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            showMovies(data.results);
        })
    }

    function showMovies(data) {
        main.innerHTML = '';
        data.forEach(movie => {
            const { title, poster_path, vote_average, id } = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
                <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
            </a>
            <div class="movie-info">
                <h3>${title}</h3>
            </div>   
            <span class="${getColor(vote_average)}">${vote_average}</span>`

            movieEl.addEventListener('click', function () { window.location.href = 'HTML-home2.html' })

            main.appendChild(movieEl);

            document.getElementById(id).addEventListener('click', () => {
                console.log(id);
                openDetails(movie);
            })
        })
    }
})

nowPlaying.addEventListener('click', (e) => {
    const main = document.getElementById('main');
    getMovies(API_URL1);

    function getMovies(url) {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            showMovies(data.results);
        })
    }

    function showMovies(data) {
        main.innerHTML = '';
        data.forEach(movie => {
            const { title, poster_path, vote_average, id } = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
                <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
            </a>
            <div class="movie-info">
                <h3>${title}</h3>
            </div>
            <span class="${getColor(vote_average)}">${vote_average}</span>`
            movieEl.addEventListener('click', function () { window.location.href = 'HTML-home2.html' });

            main.appendChild(movieEl);

            document.getElementById(id).addEventListener('click', () => {
                console.log(id);
                openDetails(movie);
            })
        })
    }
})

popular.addEventListener('click', (e) => {
    const main = document.getElementById('main');
    getMovies(API_URL2);
    function getMovies(url) {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            showMovies(data.results);
        })
    }

    function showMovies(data) {
        main.innerHTML = '';

        data.forEach(movie => {
            const { title, poster_path, vote_average, id } = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
                <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
            </a>
            <div class="movie-info">
                <h3>${title}</h3>
            </div>
            <span class="${getColor(vote_average)}">${vote_average}</span>`
            movieEl.addEventListener('click', function () { window.location.href = 'home2.html' })

            main.appendChild(movieEl);

            document.getElementById(id).addEventListener('click', () => {
                console.log(id);
                openDetails(movie);
            })
        })
    }
})

top_rated.addEventListener('click', (e) => {
    const main = document.getElementById('main');
    getMovies(API_URL3);
    function getMovies(url) {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            showMovies(data.results);
        })
    }

    function showMovies(data) {
        main.innerHTML = '';

        data.forEach(movie => {
            const { title, poster_path, vote_average, id } = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
                <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
            </a>
            <div class="movie-info">
                <h3>${title}</h3>
            </div>
            <span class="${getColor(vote_average)}">${vote_average}</span>`
            movieEl.addEventListener('click', function () { window.location.href = 'HTML-home2.html' })
            main.appendChild(movieEl);

            document.getElementById(id).addEventListener('click', () => {
                console.log(id);
                openDetails(movie);
            })
        })
    }
})

upcoming.addEventListener('click', (e) => {
    const main = document.getElementById('main');
    getMovies(API_URL4);

    function getMovies(url) {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            showMovies(data.results);
        })
    }

    function showMovies(data) {
        main.innerHTML = '';

        data.forEach(movie => {
            const { title, poster_path, vote_average, overview, id } = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
                <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
            </a>
            <div class="movie-info">
                <h3>${title}</h3>
            </div>
            <span class="${getColor(vote_average)}">${vote_average}</span>`
            movieEl.addEventListener('click', function () { window.location.href = 'HTML-home2.html' })

            main.appendChild(movieEl);

            document.getElementById(id).addEventListener('click', () => {
                console.log(id);
                openDetails(movie);
            })
        })
    }
})

//TV SERIES
const API_URL5 = BASE_URL + '/discover/tv?sort_by=popularity.desc&' + API_KEY;
const API_URL6 = BASE_URL + '/tv/airing_today?' + API_KEY;
const API_URL7 = BASE_URL + '/tv/on_the_air?' + API_KEY;
const API_URL8 = BASE_URL + '/tv/popular?' + API_KEY;
const API_URL9 = BASE_URL + '/tv/top_rated?' + API_KEY;

const main1 = document.getElementById('main1');
const all1 = document.getElementById('all1');
const arivngToday = document.getElementById('arivingToday');
const onTheAir = document.getElementById('ontheAir');
const popular1 = document.getElementById('popular1');
const topRated1 = document.getElementById('topRated1');

getTv(API_URL5);

function getTv(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
        showTv(data.results);
    })
}

function showTv(data) {
    main1.innerHTML = '';

    data.forEach(movie => {
        const { name, poster_path, vote_average, overview, id } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
            <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
        </a>
        <div class="movie-info">
            <h3>${name}</h3>
        </div>
        <span class="${getColor(vote_average)}">${vote_average}</span>`
        movieEl.addEventListener('click', function () { window.location.href = 'HTML-home2.html' })

        main1.appendChild(movieEl);

        document.getElementById(id).addEventListener('click', () => {
            console.log(id);
            openDetails(movie);
        })
    })
}

all1.addEventListener('click', (e) => {
    const main1 = document.getElementById('main1');
    getTv(API_URL5);

    function getTv(url) {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            showTv(data.results);
        })
    }

    function showTv(data) {
        main1.innerHTML = '';

        data.forEach(movie => {
            const { name, poster_path, vote_average, overview, id } = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
                <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
            </a>
            <div class="movie-info">
                <h3>${name}</h3>
            </div>
            <span class="${getColor(vote_average)}">${vote_average}</span>`

            movieEl.addEventListener('click', function () { window.location.href = 'HTML-home2.html' })

            main1.appendChild(movieEl);

            document.getElementById(id).addEventListener('click', () => {
                console.log(id);
                openDetails(movie);
            })
        })
    }
})

arivngToday.addEventListener('click', (e) => {
    const main1 = document.getElementById('main1');
    getTv(API_URL6);

    function getTv(url) {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            showTv(data.results);
        })
    }

    function showTv(data) {
        main1.innerHTML = '';

        data.forEach(movie => {
            const { name, poster_path, vote_average, overview, id } = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
                <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
            </a>
            <div class="movie-info">
                <h3>${name}</h3>
            </div> 
            <span class="${getColor(vote_average)}">${vote_average}</span>`
            movieEl.addEventListener('click', function () { window.location.href = 'HTML-home2.html' })

            main1.appendChild(movieEl);

            document.getElementById(id).addEventListener('click', () => {
                console.log(id);
                openDetails(movie);
            })
        })
    }
})

onTheAir.addEventListener('click', (e) => {
    const main1 = document.getElementById('main1');
    getTv(API_URL7);

    function getTv(url) {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            showTv(data.results);
        })
    }

    function showTv(data) {
        main1.innerHTML = '';

        data.forEach(movie => {
            const { name, poster_path, vote_average, overview, id } = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
                <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
            </a>
            <div class="movie-info">
                <h3>${name}</h3>
            </div> 
            <span class="${getColor(vote_average)}">${vote_average}</span>`
            movieEl.addEventListener('click', function () { window.location.href = 'HTML-home2.html' })

            main1.appendChild(movieEl);

            document.getElementById(id).addEventListener('click', () => {
                console.log(id);
                openDetails(movie);
            })
        })
    }
})

popular1.addEventListener('click', (e) => {
    const main1 = document.getElementById('main1');
    getTv(API_URL8);

    function getTv(url) {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            showTv(data.results);
        })
    }

    function showTv(data) {
        main1.innerHTML = '';

        data.forEach(movie => {
            const { name, poster_path, vote_average, overview, id } = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
                <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
            </a>
            <div class="movie-info">
                <h3>${name}</h3>
            </div> 
            <span class="${getColor(vote_average)}">${vote_average}</span>`
            movieEl.addEventListener('click', function () { window.location.href = 'HTML-home2.html' })

            main1.appendChild(movieEl);

            document.getElementById(id).addEventListener('click', () => {
                console.log(id);
                openDetails(movie);
            })
        })
    }
})

topRated1.addEventListener('click', (e) => {
    const main1 = document.getElementById('main1');
    getTv(API_URL9);

    function getTv(url) {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            showTv(data.results);
        })
    }

    function showTv(data) {
        main1.innerHTML = '';

        data.forEach(movie => {
            const { name, poster_path, vote_average, id, overview } = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
                <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
            </a>
            <div class="movie-info">
                <h3>${name}</h3>
            </div> 
            <span class="${getColor(vote_average)}">${vote_average}</span>`
            movieEl.addEventListener('click', function () { window.location.href = 'HTML-home2.html' })

            main1.appendChild(movieEl);

            document.getElementById(id).addEventListener('click', () => {
                console.log(id);
                openDetails(movie);
            })
        })
    }
})


const API_URL11 = BASE_URL + '/trending/movie/day?' + API_KEY;
const API_URL12 = BASE_URL + '/trending/tv/day?' + API_KEY;

const main2 = document.getElementById('main2');
const movies = document.getElementById('movies');
const tv = document.getElementById('tv');

//https://api.themoviedb.org/3/trending/all/day?api_key=360adcd963f64afc2c8ca49d7ad57b84

getTrending(API_URL11);

function getTrending(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
        showTrending(data.results);
    })
}

function showTrending(data) {
    main2.innerHTML = '';
    
    data.forEach(movie => {
        const { title, name, poster_path, vote_average, overview, id } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
        <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
        </a>
        <div class="movie-info">
        <h3>${title}</h3>
        </div> 
        <span class="${getColor(vote_average)}">${vote_average}</span>`
        movieEl.addEventListener('click', function () { window.location.href = 'HTML-home2.html' })
        
        main2.appendChild(movieEl);
        
        document.getElementById(id).addEventListener('click', () => {
            console.log(id);
            openDetails(movie);
        })
    })
}

movies.addEventListener('click', (e) => {
    const main2 = document.getElementById('main2');
    getTrending(API_URL11);
    
    function getTrending(url) {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            showTrending(data.results);
        })
    }
    
    function showTrending(data) {
        main2.innerHTML = '';
        
        data.forEach(movie => {
            const { title, name, poster_path, vote_average, overview, id } = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
            <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
            </a>
            <div class="movie-info">
            <h3>${title}</h3>
            </div> 
            <span class="${getColor(vote_average)}">${vote_average}</span>`
            movieEl.addEventListener('click', function () { window.location.href = 'HTML-home2.html' })

            main2.appendChild(movieEl);
            
            document.getElementById(id).addEventListener('click', () => {
                console.log(id);
                openDetails(movie);
            })
        })
    }
})

tv.addEventListener('click', (e) => {
    const main2 = document.getElementById('main2');
    getTrending(API_URL12);
    
    function getTrending(url) {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            showTrending(data.results);
        })
    }
    
    function showTrending(data) {
        main2.innerHTML = '';
        
        data.forEach(movie => {
            const { title, name, poster_path, vote_average, overview, id } = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
            <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
            </a>
            <div class="movie-info">
            <h3>${name}</h3>
            </div> 
            <span class="${getColor(vote_average)}">${vote_average}</span>`
            movieEl.addEventListener('click', function () { window.location.href = 'HTML-home2.html' })
            
            main2.appendChild(movieEl);
            
            document.getElementById(id).addEventListener('click', () => {
                console.log(id);
                openDetails(movie);
            })
        })
    }
})

function getColor(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return "orange"
    } else {
        return 'red'
    }
}

const API_URL13 = "https://api.themoviedb.org/3/trending/all/week?api_key=360adcd963f64afc2c8ca49d7ad57b84"

const searchResult = document.getElementById('searchResult');
const searchname = document.getElementById('searchname');

const genres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]

const tagsEl = document.getElementById('tags');

var selectedGenre = []
setGenre();
function setGenre() {
    tagsEl.innerHTML= '';
    genres.forEach(genre => {
        const t = document.createElement('div');
        t.classList.add('tag');
        t.id=genre.id;
        t.innerText = genre.name;
        t.addEventListener('click', () => {
            if(selectedGenre.length == 0){
                selectedGenre.push(genre.id);
            }else{
                if(selectedGenre.includes(genre.id)){
                    selectedGenre.forEach((id, idx) => {
                        if(id == genre.id){
                            selectedGenre.splice(idx, 1);
                        }
                    })
                }else{
                    selectedGenre.push(genre.id);
                }
            }
            console.log(selectedGenre)
            getResult(API_URL + '&with_genres='+encodeURI(selectedGenre.join(',')))
            highlightSelection()
        })
        tagsEl.append(t);
    })
}

function highlightSelection() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.classList.remove('highlight')
    })
    clearBtn()
    if(selectedGenre.length !=0){   
        selectedGenre.forEach(id => {
            const hightlightedTag = document.getElementById(id);
            hightlightedTag.classList.add('highlight');
        })
    }

}

function clearBtn(){
    let clearBtn = document.getElementById('clear');
    if(clearBtn){
        clearBtn.classList.add('highlight')
    }else{
            
        let clear = document.createElement('div');
        clear.classList.add('tag','highlight');
        clear.id = 'clear';
        clear.innerText = 'Clear x';
        clear.addEventListener('click', () => {
            selectedGenre = [];
            setGenre();            
            getResult(API_URL13);
        })
        tagsEl.append(clear);
    }
    
}

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const current = document.getElementById('current')

var currentPage = 1;
var nextPage = 2;
var prevPage = 3;
var lastUrl = '';
var totalPages = 100;


getResult(API_URL13);

function getResult(url) {
    lastUrl = url;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.results)
        if(data.results.length !== 0){
            showResult(data.results);
            currentPage = data.page;
            nextPage = currentPage + 1;
            prevPage = currentPage - 1;
            totalPages = data.total_pages;

            current.innerText = currentPage;

            if(currentPage <= 1){
                prev.classList.add('disabled');
                next.classList.remove('disabled')
            }else if(currentPage>= totalPages){
                prev.classList.remove('disabled');
                next.classList.add('disabled')
            }else{
                prev.classList.remove('disabled');
                next.classList.remove('disabled')
            }

            tagsEl.scrollIntoView({behavior : 'smooth'})

        }else{
            searchResult.innerHTML= `<h1 class="no-results">No Results Found</h1>`
        } 
    })
}


function showResult(data) {
    searchResult.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average,name, overview, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML =  `
        <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
        <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
            </a>
            <div class="movie-info">
                <h3>${title? title:name}</h3>
            </div> 
            <span class="${getColor(vote_average)}">${vote_average}</span>`

        movieEl.addEventListener('click', function () { window.location.href = 'HTML-home2.html' })

        searchResult.appendChild(movieEl);

        document.getElementById(id).addEventListener('click', () => {
            console.log(id);
            openDetails(movie);
        })
    })
}

prev.addEventListener('click', () => {
    if(prevPage > 0){
    pageCall(prevPage);
    }
})

next.addEventListener('click', () => {
    if(nextPage <= totalPages){
    pageCall(nextPage);
    }
})

function pageCall(page){
    let urlSplit = lastUrl.split('?');
    let queryParams = urlSplit[1].split('&');
    let key = queryParams[queryParams.length -1].split('=');
    if(key[0] != 'page'){
        let url = lastUrl + '&page='+page;
        getResult(url);
    }else{
        key[1] = page.toString();
        let a = key.join('=');
        queryParams[queryParams.length -1] = a;
        let b = queryParams.join('&');
        let url = urlSplit[0] +'?'+ b
        getResult(url);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    console.log(searchTerm)
    if (searchTerm) {
        searchname.innerText = `${searchTerm}`;
        getResult(searchURL + '&query=' + searchTerm)
    } else {
        getResult(API_URL13);
    }
})