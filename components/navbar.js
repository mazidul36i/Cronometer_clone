class navbar {
    constructor() {
        this.nav = `<header id="navbar" class="collapse">
        <a href="/">
            <img src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg" alt="our main logo" class="logo">
        </a>
        <nav>
            <ul class="navbar-list">
                <li>
                    <div class="nav-product">
                        <a>Products</a>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </li>
                <li><a href="./support.html" class="navbar-link">Support</a></li>
                <li><a href="./blog.html" class="navbar-link">Blog</a></li>
                <li><a href="./forums.html" class="navbar-link">Forums</a></li>
                <li><a href="./about.html" class="navbar-link">About</a></li>
                <li><a href="#" class="navbar-link-b">Log In</a></li>
            </ul>
        </nav>
        <i class="mobile-navbar-btn fa-solid fa-bars"></i>
    </header>`;

        this.func = `const mobile_nav = document.querySelector(".mobile-navbar-btn");
    const nav_header = document.querySelector("#navbar");
    
    let t;
    const toggleNavbar = () => {
        if (t) {
            clearTimeout(t);
            t = null;
        }
        nav_header.classList.toggle("active");
        if (!nav_header.classList.contains("collapse")) {
            t = setTimeout(() => {
                nav_header.classList.toggle("collapse");
            }, 600);
        } else {
            nav_header.classList.toggle("collapse");
        }
    };
    mobile_nav.addEventListener("click", () => toggleNavbar());`;
    }

    getNavbar() {
        return this.nav;
    }

    getFunction(location) {
        var script = document.createElement("script");
        script.innerHTML = this.func;
        location.appendChild(script);
    }
}

export default new navbar;
