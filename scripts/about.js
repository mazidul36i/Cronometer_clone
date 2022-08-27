import footer from "../components/footer.js";
import navbar from "../components/navbar.js";

let footer_container = document.getElementById("footer_container");
footer_container.innerHTML = footer();

let navContainer = document.querySelector("#nav_container");
navContainer.innerHTML = navbar.getNavbar();
navbar.getFunction(document.body);
