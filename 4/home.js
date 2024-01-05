let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

let msgHead = document.getElementById("msg");
let greetHead = document.getElementById("greet");
let logoutBtn = document.getElementById("logout");


let logout = () => {
    sessionStorage.removeItem("user-creds");
    sessionStorage.removeItem("user-info");
    window.location.href = 'login1.html'
}

let CheckCred = () => {
    if (!sessionStorage.getItem("user-creds"))
        window.location.href = 'login1.html'
    else {
        msgHead.innerText = `user with email "${UserCreds.email}" logged in`;
        greetHead.innerText = `welcome ${UserInfo.firstname + " " + UserInfo.lastname}!`;
    }
}

window.addEventListener('load', CheckCred);
logoutBtn.addEventListener('click', logout);