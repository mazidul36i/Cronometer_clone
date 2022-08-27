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

     function navbar(){
          return `<a href="#">
        <img src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg" alt="our main logo" class="logo">
    </a>
    <nav class="navbar">
        <ul class="navbar-list">
            <li><a href="#" class="navbar-link">Products</a> </li>
            <li><a href="#" class="navbar-link">Support</a></li>
            <li><a href="#" class="navbar-link">Blog</a></li>
            <li><a href="#" class="navbar-link">Forums</a></li>
            <li><a href="#" class="navbar-link">About</a></li>
            <li><a href="#" class="navbar-link-a  a-button">Log In</a></li>
        </ul>
    </nav>
    <div class="mobile-navbar-btn">
        <ion-icon name="menu-outline" class="mobile-navbar-icon"></ion-icon>
        <ion-icon name="close-circle-outline" class="mobile-navbar-icon"></ion-icon>
    </div>`
       }
       
       export default navbar;
