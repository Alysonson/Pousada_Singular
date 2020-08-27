const showTexto = document.querySelector(".anuncios");
window.addEventListener("load", function () {
  showText();
});
function showText() {
  const timeLimite = 1;
  let i = 0;
  const timer = setInterval(function () {
    i++;
    if (i == timeLimite) {
      clearInterval(timer);
      showTexto.classList.add("show");
    }
    console.log(i);
  }, 1000);
}
