ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});

var modal = document.getElementById('id01');


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}