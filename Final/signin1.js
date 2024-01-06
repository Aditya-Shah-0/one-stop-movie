import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

let Email = document.getElementById("email");
let Password = document.getElementById("password");
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let submit = document.getElementById("submit");

let RegisterUser = evt => {
    evt.preventDefault();

    createUserWithEmailAndPassword(auth, Email.value, Password.value)
        .then((userCredential) => {
            console.log(userCredential);
            set(ref(db, 'UsersAuthList/' + userCredential.user.uid),{
                firstname: fName.value,
                lastname: lName.value,
                email: Email
            })
            alert('user created');
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        })
}

submit.addEventListener("click", RegisterUser);