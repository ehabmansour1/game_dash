// -----------------------------------start menu
bars.onclick = function () {
  nav.classList.add("nav-opened");
};

bars.addEventListener("click", method1);
bars.addEventListener("click", method2);
function method2() {
  nav.classList.add("nav-opened");
}
function method1() {
  exit.classList.add("animat-exit");
}

exit.addEventListener("click", method4);
exit.addEventListener("click", method5);
function method5() {
  nav.classList.remove("nav-opened");
}
function method4() {
  exit.classList.remove("animat-exit");
}

// -----------------------------------end menu
// -----------------------------------start loader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
// -----------------------------------end loader
