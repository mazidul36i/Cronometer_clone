class navbar {
    constructor() {
        this.nav = `<header id="navbar" class="collapse">
        <a href="./index.html">
            <img src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg" alt="our main logo" class="logo">
        </a>
        <nav>
            <ul class="navbar-list">
                <li>
                    <div class="nav-product">
                        <a href="./pro.html">Pro</a>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </li>
                <li><a href="./support.html" class="navbar-link">Support</a></li>
                <li><a href="./blog.html" class="navbar-link">Blog</a></li>
                <li><a href="./forums.html" class="navbar-link">Forums</a></li>
                <li><a href="./about.html" class="navbar-link">About</a></li>
                <li><a href="./login.html" class="navbar-link-b">Log In</a></li>
            </ul>
        </nav>
        <i id="menu_button" class="mobile-navbar-btn fa-solid fa-bars"></i>
    </header>`;
        this.func = `const nav_container = document.querySelector("#navbar");
        let t;
        const toggleNavbar = () => {
            if (t) {
                clearTimeout(t);
                nav_container.classList.remove("active");
            }
        
            nav_container.classList.toggle("collapse");
            if (nav_container.classList.contains("active")) {
                t = setTimeout(() => {
                    nav_container.classList.remove("active");
                }, 600);
            } else {
                nav_container.classList.add("active");
            }
        };
        document
            .querySelector("#menu_button")
            .addEventListener("click", () => toggleNavbar());`;
    }

    getNavbar() {
        return this.nav;
    }

    getFunction(location) {
        let scriptTag = document.createElement("script");
        scriptTag.innerHTML = this.func;
        location.appendChild(scriptTag);
    }
}
export default new navbar();
