import footer from "../components/footer.js";

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
let footerContainer = document.querySelector("#footer_container");

footerContainer.innerHTML = footer();

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
