//authentication 
let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

let logoutBtn = document.getElementById("Signout");
let first_name = document.getElementById("first-name");
let last_name = document.getElementById("last-name");
let email = document.getElementById("email-put");
let imagename = document.getElementById("imagename");


let logout = () => {
    sessionStorage.removeItem("user-creds");
    sessionStorage.removeItem("user-info");
    window.location.href = ('HTML-login1.html');
}

let CheckCred = () => {
    if (!sessionStorage.getItem("user-creds"))
        window.location.href = ('HTML-login1.html');

    else {
        first_name.innerText = `first name :- ${UserInfo.firstname}`;
        last_name.innerText = `last name :- ${UserInfo.lastname}`;
        imagename.innerText = `${UserInfo.firstname}  ${UserInfo.lastname}`;
        email.innerText = `Email - ${UserCreds.email}`;
    }
}

window.addEventListener('load', CheckCred);
logoutBtn.addEventListener('click', logout);

const API_KEY = 'api_key=360adcd963f64afc2c8ca49d7ad57b84';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;
const UserEmail = UserCreds.email;

let toWatchlist = document.getElementById('movieWistlist');

function get_LS() {
    const movie_ids = JSON.parse(localStorage.getItem(`movie_id-${UserEmail}`))
    return movie_ids === null ? [] : movie_ids;
}
function add_to_LS(id) {
    const movie_ids = get_LS()
    localStorage.setItem(`movie_id-${UserEmail}`, JSON.stringify([...movie_ids, type + "/" + id]))
}
function remove_LS(id) {
    const movie_ids = get_LS()
    localStorage.setItem(`movie_id-${UserEmail}`, JSON.stringify(movie_ids.filter(e => e !== (type + "/" + id))))
};

async function fetchMovies() {
    const movies_LS = await get_LS()
    const movies = []
    for (let i = 0; i <= movies_LS.length - 1; i++) {
        const movie_url = movies_LS[i];
        console.log(movie_url);
        let movie = getMovies(BASE_URL + "/" + movie_url + "?" + API_KEY);
        movies.push(movie);

        function getMovies(url) {
            toWatchlist.innerHTML = ' ';
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    showMovies(response);
                })
        }
    }
    console.log(movies);
    console.log(movies_LS);
}


function showMovies(data) {
    const {id, title, poster_path, release_date, overview, vote_average, name } = data;
    let Elem = document.createElement('div');
    Elem.classList.add("movielist");
    Elem.classList.add("flex");
    Elem.innerHTML =
    `
    <div class="moviePoster">
        <a href="HTML-home2.html?type=${title ? "movie" : "tv"}&id=${id}" id = ${id}>
            <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="${title}">
        </a>
    </div>
    <div class="movieDetails flexcolumn">
        <div class="movieName">${title ? title : name}</div>
        <div class="movieOverview">${overview}</div>
        <div class="dateetc">
            <div class="movieDate">Date of Release :- ${release_date}</div>
            <div class="movierating">${Math.round(vote_average * 100) / 100}% </div>
        </div>
    </div>
    `
    toWatchlist.appendChild(Elem);
};
fetchMovies();