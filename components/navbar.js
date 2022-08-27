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
                        <a href="./pro.html">Products</a>
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
        this.func = `const nav_container = document.querySelector("#navbar");
        let t;
        // const toggleNavbar = () => {
        //     if (t) {
        //         clearTimeout(t);
        //         t = null;
        //     }
        
        //     // if (!nav_container.classList.contains("collapse")) {
        //     //     t = setTimeout(() => {
        //     //         nav_container.classList.toggle("collapse");
        //     //     }, 600);
        //     // } else {
        //     //     nav_container.classList.toggle("collapse");
        //     // }
        // };
        document
            .querySelector(".mobile-navbar-btn")
            .addEventListener("click", () => toggleNavbar());`;
    }

    getNavbar() {
        return this.nav;
    }

    getFunction(location) {
        let scriptTag = document.createElement("script");
        scriptTag.innerHTML = this.func;
        console.log(scriptTag)
        // location.appendChild(scriptTag);
    }
}
export default new navbar();
