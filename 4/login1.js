import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, get, ref , child} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
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
const db = getDatabase();
const auth = getAuth(app);
const dbref = ref(db);

let Email = document.getElementById("email");
let Password = document.getElementById("password");
let login = document.getElementById("login");

let SignInUser = evt => {
    evt.preventDefault();

    signInWithEmailAndPassword(auth, Email.value, Password.value)
        .then((userCredential) => {
            console.log(userCredential);
            get(child(dbref, 'UsersAuthList/' + userCredential.user.uid))
            .then((snapshot) => {
                if(snapshot.exists){
                    sessionStorage.setItem("user-info", JSON.stringify({
                        firstname: snapshot.val().firstname,
                        lastname: snapshot.val().lastname
                    }))
                    sessionStorage.setItem("user-creds", JSON.stringify(userCredential.user));
                    window.location.href = 'navbar.html';
                }
            })
            alert('user loged in!');
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        })
}

login.addEventListener("click", SignInUser);