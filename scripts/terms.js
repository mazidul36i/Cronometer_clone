import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

let footer_container = document.getElementById("footer_container");
footer_container.innerHTML = footer();

let nav = document.getElementById("navbar_container");
nav.innerHTML = navbar.getNavbar();
navbar.getFunction(document.body);
