let isFriend = document.querySelector("h5");
let isClick = document.querySelector("#btn");
let isProfile = document.querySelector("#profile")
let bodyColor = document.querySelector("body")

let val = 0;

isClick.addEventListener("click", () => {

    if (val == 0) {
        isFriend.innerHTML = "Friend😉"
        isFriend.style.color = "#rgb(251 237 2)"
        btn.innerHTML = "Remove Friend😏"
        btn.style.color="white"
        btn.style.backgroundColor = "#4169e1"
        btn.style.boxShadow = "7px 7px 7px #395cc6,-7px -7px 7px #4976fc";
        bodyColor.style.backgroundColor = "#4169e1"
        isProfile.style.backgroundColor = "#4169e1"
        isProfile.style.boxShadow = "7px 7px 7px #395cc6,-7px -7px 7px #4976fc";
        val = 1
    } else {
        isFriend.innerHTML = "Stranger😏"
        isFriend.style.color = "#ff8a00"
        btn.innerHTML = "Add Friend😉"
        btn.style.color="#4169e1"
        btn.style.backgroundColor = "#90ee90"
        btn.style.boxShadow = "7px 7px 7px #7fd17f,-7px -7px 7px #a1ffa1";
        bodyColor.style.backgroundColor = "#90ee90"
        isProfile.style.backgroundColor = "#90ee90"
        isProfile.style.boxShadow = "7px 7px 7px #7fd17f,-7px -7px 7px #a1ffa1";
        val = 0
    }


})