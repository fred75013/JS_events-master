//Fonctionnalité 1 :

var footer = document.querySelector("footer");
footer.addEventListener("click", function () {
  console.log("click");
});

//Fonctionnalité 1-bis :

var footer = document.querySelector("footer");
var x = 0;
footer.addEventListener("click", function () {
  x++;
  console.log(`click numéro ${x}`);
});

//Fonctionnalité 2
var nav = document.querySelector(
  "body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > button"
);
var navbar = document.querySelector("#navbarHeader");
nav.addEventListener("click", function () {
  navbar.classList.toggle("collapse");
});

//Fonctionnalité 3 :

var edit = document.querySelector("button.btn-outline-secondary");
var text = document.querySelector(".card-text");

edit.addEventListener("click", function () {
  text.style.color = "red";
});

//Fonctionnalité 4 :

var edit2 = document.querySelectorAll("button.btn-outline-secondary")[1];
var text2 = document.querySelectorAll(".card-text")[1];

edit2.addEventListener("click", function () {
  if (text2.style.color === "green") {
    text2.style.color = "";
  } else text2.style.color = "green";
});

//Fonctionnalité 5 :

var header = document.querySelector("header");
var cnd = document.querySelector("link");

header.addEventListener("dblclick", function () {
  if (cnd.disabled === true) {
    cnd.disabled = false;
  } else cnd.disabled = true;
});

//Fonctionnalité 6 :

var cards = document.querySelectorAll("div.col-md-4");

cards.forEach((card) => {
  let text3 = card.querySelector(".card-text");
  let img = card.querySelector(".card-img-top");
  let btnn = card.querySelector(".btn-success");

  btnn.addEventListener("mouseenter", function () {
    if (img.style.width === "20%") {
      img.style.width = "100%";
    } else {
      img.style.width = "20%";
    }

    if (text3.style.display === "none") {
      text3.style.display = "block";
    } else {
      text3.style.display = "none";
    }
  });
});

//Fonctionnalité 7 :

var button = document.querySelector(".btn-secondary");

button.addEventListener("click", function () {
  var last = document.querySelectorAll(".row")[1].lastElementChild;
  var first = document.querySelectorAll(".row")[1].firstElementChild;
  first.parentElement.insertBefore(last, first);
});

//Fonctionnalité 8 :
var buttonLeft = document.querySelector(".btn-primary");

buttonLeft.addEventListener("click", function (event) {
  event.preventDefault();
  var first = document.querySelector(".col-md-4");
  first.parentElement.appendChild(first);
});

//Fonctionnalité 9 :
