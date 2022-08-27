import navbar from "../components/navbar.js";
console.log(navbar);
let nav = document.getElementById("navbar_container");
nav.innerHTML = navbar.getNavbar();
navbar.getFunction(document.body);
