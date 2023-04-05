let menuOn = document.querySelector(".menu-on");
let menu = document.querySelector(".menu");
let menuOff = document.querySelector(".menu-off");
let feedbackOff = document.querySelector(".feedback-off");
let callOff = document.querySelector(".call-off");
let callIcon = document.querySelector(".icon-5");
let feedbackIcon = document.querySelector(".icon-6");
let call = document.querySelector(".call");
let feedback = document.querySelector(".feedback");
let lid = document.querySelector(".lid");
let opacity = document.querySelector(".opacity");
let openText = document.querySelector(".open-text");
let openSlide = document.querySelector(".open-slaid");
let openCard = document.querySelector(".open-card");
let text = document.querySelector(".conteiner__text");
let logo = document.querySelector(".abusteku-deagulus");
let cadr = document.querySelector(".abusteku-deagulusnew");
menuOn.addEventListener("click", function () {
  menu.classList.add("active");
  lid.classList.add("opacity");
});
menuOff.addEventListener("click", function () {
  menu.classList.remove("active");
  lid.classList.remove("opacity");
});
feedbackIcon.addEventListener("click", function () {
  feedback.classList.add("active");
  lid.classList.add("opacity");
  menu.classList.remove("active");
});
feedbackOff.addEventListener("click", function () {
  feedback.classList.remove("active");
  lid.classList.remove("opacity");
});
callIcon.addEventListener("click", function () {
  call.classList.add("active");
  lid.classList.add("opacity");
  menu.classList.remove("active");
});
callOff.addEventListener("click", function () {
  call.classList.remove("active");
  lid.classList.remove("opacity");
});
openText.addEventListener("click", function () {
  text.classList.toggle("show");
});
openSlide.addEventListener("click", function () {
  logo.classList.toggle("show");
  if (logo.classList.contains("show") == true) {
    openSlide.innerHTML = "Скрыть";
  } else {
    openSlide.innerHTML = "Показать все";
  }
});
openCard.addEventListener("click", function () {
  cadr.classList.toggle("show");
  if (cadr.classList.contains("show") == true) {
    openCard.innerHTML = "Скрыть";
  } else {
    openCard.innerHTML = "Показать все";
  }
});
