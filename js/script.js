const mainLinks = document.getElementsByClassName("mainLink");

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
