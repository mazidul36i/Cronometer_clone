import footer from "../components/footer.js";
import navbar from "../components/navbar.js";

let footerContainer = document.querySelector("#footer_container");
let navbarContainer = document.querySelector("#navbar_container");

footerContainer.innerHTML = footer();
navbarContainer.innerHTML = navbar.getNavbar();
navbar.getFunction(document.body);
