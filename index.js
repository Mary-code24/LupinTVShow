const image = document.querySelector("#myImage");
const text = document.querySelector("h2");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.addEventListener("click", claire);
buttonTwo.addEventListener("click", juliette)

function claire() {
image.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BOTUzMTQ1NzYtZDlhNy00OTdjLWJhZDItOWUxMGRlYzMzMzE4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX501_.jpg");
text.innerHTML = "WILL HE STAY WITH CLAIRE?";
buttonOne.innerHTML = "YES,BUT LATER";
buttonTwo.innerHTML = "NEVER";

buttonOne.addEventListener("click", wedding);
buttonTwo.addEventListener("click", staySingle);
}

function wedding() {
    image.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BZTU5ZWMyZGEtOGJiMS00NGIwLTg0ZTQtMDJjYThiOWZjY2EwXkEyXkFqcGdeQXVyMzY5ODU0Mzc@._V1_QL75_UX607.5_.jpg");
    text.innerHTML = "THEY WILL STAY TOGETHER";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function staySingle() {
    image.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BODBjOGJiNmYtMzBkZi00NjgwLWJkZDUtMTNiMzhiMzc2MzcyXkEyXkFqcGdeQXVyMTMyODYwMDQx._V1_QL75_UX541.5_.jpg");
    text.innerHTML = "HE WILL STAY SINGLE";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function juliette() {
    image.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BNjA0MmY0MDMtZmRkNi00ZGVkLTg1MzMtZjU5ODllYjRlZjJkXkEyXkFqcGdeQXVyMjA3OTMwODg@._V1_QL75_UX535.5_.jpg");
    text.innerHTML = "WILL THEY BE HAPPY?";
    buttonOne.innerHTML = "YES";
    buttonTwo.innerHTML = "NEVER";

    buttonOne.addEventListener("click", jail);
    buttonTwo.addEventListener("click", single);
}
function jail() {
    image.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BYzdhNTc5NjMtM2YzZS00ZTIwLWEwODQtMTA2ZjdiNWI1MjVlXkEyXkFqcGdeQXVyMTE5MTkxMDI2._V1_QL75_UX541.5_.jpg");
    text.innerHTML = " NO! HE WILL GET TO JAIL";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function single() {
    image.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BZjMyN2MxMzItMmEzMy00NmM2LTg0M2ItYzkzOWE0OTlmN2I5XkEyXkFqcGdeQXVyMjA3OTMwODg@._V1_QL75_UX547.5_.jpg");
    text.innerHTML = "HE WILL STAY ALONE";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}