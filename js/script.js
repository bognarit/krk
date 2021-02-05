const mainLinks = Array.from(document.getElementsByClassName("mainLink"));
const btnLogin = document.querySelector(".mainLink");

window.onload = function () {
  // init is the start function that starts when page loads
  init();
};

function init() {
  addEventlistenerLinks();
}

function addEventlistenerLinks() {
  mainLinks.forEach((element) => console.log(element));
}

btnLogin.addEventListener("click", addEventlistenerLinks);
