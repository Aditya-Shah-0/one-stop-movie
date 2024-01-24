import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyA5kcluGgafWuRTNiWyd3mhv4M0wke1BZA",
    authDomain: "woc6-1450d.firebaseapp.com",
    databaseURL: "https://woc6-1450d-default-rtdb.firebaseio.com",
    projectId: "woc6-1450d",
    storageBucket: "woc6-1450d.appspot.com",
    messagingSenderId: "360954916391",
    appId: "1:360954916391:web:7955b026c0d4b95f6de802"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();

let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

let msgHead = document.getElementById("msg");
let logoutBtn = document.getElementById("Signout");


let logout = () => {
    sessionStorage.removeItem("user-creds");
    sessionStorage.removeItem("user-info");
    window.location.href = 'HTML-login1.html'
}

let CheckCred = () => {
    if (!sessionStorage.getItem("user-creds"))
        window.location.href = 'HTML-login1.html'
    else {
        msgHead.innerText = `User with Email - "${UserCreds.email}" logged in`;
    }
}

window.addEventListener('load', CheckCred);
logoutBtn.addEventListener('click', logout);


//Movies base
const API_KEY = 'api_key=360adcd963f64afc2c8ca49d7ad57b84';
const BASE_URL = 'https://api.themoviedb.org/3';

//Movies Series 
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

//'https://api.themoviedb.org/3/movie/753342?api_key=360adcd963f64afc2c8ca49d7ad57b84'


const UserEmail = UserCreds.email;
let params = new URLSearchParams(document.location.search);
let type = params.get("type");
let id = params.get("id");
// console.log(id);
// console.log(type);
let API_URL2 = BASE_URL + "/" + type + "/" + id + "?" + API_KEY;

getMovieDetails(API_URL2);

function getMovieDetails(url) {

    fetch(url)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            showMovieDetails(response);
        })
}


function showMovieDetails(data) {

    let movieDetail = document.getElementById("import");
    const { id, title, overview, backdrop_path, poster_path, popularity, release_date, original_language, revenue, runtime, vote_average, tagline, name } = data;
    //console.log(id);

    document.title = `${title ? title : name} - One Stop Movie`;
    movieDetail.innerHTML = `
    
    <div class="container">
        <div class="image">
            <img src="${backdrop_path ? IMG_URL + backdrop_path : "/image/Name Logo.png"}" alt="">    
        </div>

        
        <div class="content">
            <div class="contentPoster"> <img class="contentPoster" src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt=""> </div>
            <div class="title">${title ? title : name}</div>
            <div class="middle">
                <div class="day">${release_date} </div>
                <div class="partition">|</div>
                <div class="time">${Math.trunc(runtime / 60)}hr : ${runtime % 60}mins</div>
            </div>
        </div>
    </div>
    <div class="percentage">
        <div class="heart-icon" > &#9829 </div>
        <div class="cast"id="cast1"> <div class="casting"> ${Math.round(vote_average * 100) / 100}%  </div> </div>
    </div>
    <div class="sectionAbout">
        <div class="aboutleft">
            <img src="${poster_path ? IMG_URL + poster_path : "/image/no-poster.png"}" alt="">
        </div>
        <div class="aboutRight">
            <h2>ABOUT</h2>
            <p>${overview}</p>
    
            <div class="sectionother">
                <div class="language">1. Original Langauge - ${original_language} </div>
                <div class="popularity">2. Popularity - ${popularity} </div>
                <div class="budget">3. Total Revenue - ${revenue ? revenue : "8,500,000"} </div>
                <div class="releseDate">4. Date of Release - ${release_date} </div>
                <div class="tagline">5. Tag Line - ${tagline} </div>
            </div>
    
        </div>
    </div>            
`
    const percentage1 = document.getElementById('cast1');

    if ((Math.round(vote_average * 100) / 100) >= 0 && (Math.round(vote_average * 100) / 100) < 2.5) {
        percentage1.style.borderTop = "red 10px solid";
        percentage1.style.borderRight = "black 10px solid";
        percentage1.style.borderBottom = "black 10px solid";
        percentage1.style.borderLeft = "black 10px solid";
    }
    else if ((Math.round(vote_average * 100) / 100) >= 2.5 && (Math.round(vote_average * 100) / 100) < 5) {
        percentage1.style.borderTop = "orange 10px solid";
        percentage1.style.borderRight = "orange 10px solid";
        percentage1.style.borderBottom = "black 10px solid";
        percentage1.style.borderLeft = "black 10px solid";
    }
    else if ((Math.round(vote_average * 100) / 100) >= 5 && (Math.round(vote_average * 100) / 100) < 7.5) {
        percentage1.style.borderTop = "darkgoldenrod 10px solid";
        percentage1.style.borderRight = "darkgoldenrod 10px solid";
        percentage1.style.borderBottom = "darkgoldenrod 10px solid";
        percentage1.style.borderLeft = "black 10px solid";
    }
    else {
        percentage1.style.border = "green 10px solid";
    }

    const heart_icon = movieDetail.querySelector('.heart-icon');
    
    if (localStorage.getItem(`movie_id-${UserEmail}`).includes(`${type}/${id}`)) {
        heart_icon.classList.add('change-color')
        console.log("hello")
    } else {
        heart_icon.classList.remove('change-color')        
        console.log("helloid")
    }

    heart_icon.addEventListener('click', () => {
        if (heart_icon.classList.contains('change-color')) {
            remove_LS(id)
            heart_icon.classList.remove('change-color')
        } else {
            add_to_LS(id)
            heart_icon.classList.add('change-color')
        }
    })

    function get_LS () {
        const movie_ids = JSON.parse(localStorage.getItem(`movie_id-${UserEmail}`))
        return movie_ids === null ? [] : movie_ids;
    }
    function add_to_LS (id) {
        const movie_ids = get_LS()
        localStorage.setItem(`movie_id-${UserEmail}`, JSON.stringify([...movie_ids, type + "/" + id]))
    }
    function remove_LS (id) {
        const movie_ids = get_LS()
        localStorage.setItem(`movie_id-${UserEmail}`, JSON.stringify(movie_ids.filter(e => e !== (type + "/" + id))))
    }
}

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

function getColor(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return "orange"
    } else {
        return 'red'
    }
}