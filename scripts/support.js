let Articles = [];

let searchbar = document.querySelector(".searchbar");
let recentSupportContainer = document.querySelector(".recent_support_list");

/* ====================== Event Listeners ========================= */
searchbar.query.addEventListener("blur", () => {
    searchbar.style["boxShadow"] = "rgb(156, 156, 156) 0 0 5px";
    searchbar.style["border"] = "none";
});

searchbar.query.addEventListener("focus", () => {
    searchbar.style["boxShadow"] = "rgb(146, 146, 146) 0 0 10px";
    searchbar.style["border"] = "1px var(--accent-color) solid";
});

function LoadMore(e) {
    let target = e.target;
    target.innerText = "...";
    setTimeout(() => {
        target.innerText = "See more";
        console.log("Not functional yet. :(");
    }, 1200);
}

function RequestOpen() {
    window.location.href = "./request.html";
}

/* ====================== Article ========================= */
class Article {
    constructor(title, feature, time, reply) {
        this.title = title;
        this.feature = feature;
        this.time = time;
        this.reply = reply;
    }
}

{
    let a1 = new Article(
        "Pro Account Settings",
        "Pro-HIPAA",
        "19 hours ago",
        []
    );
    let a2 = new Article("Clients", "Pro Messaging", "1 month ago", []);
    let a3 = new Article(
        "Widgets",
        "Android Home Screen Widgets",
        "1 month ago",
        []
    );
    let a4 = new Article("Foods Tab", "Foods", "3 months ago", []);
    let a5 = new Article("Settings", "Target Scheduler", "5 months ago", []);

    Articles.push(a1, a2, a3, a4, a5);
    // console.log(Articles);

    DisplayActivity(Articles);
}

function DisplayActivity(list) {
    recentSupportContainer.innerHTML = null;
    list.forEach((article) => {
        let div = document.createElement("div");
        let title = document.createElement("h4");
        let details = document.createElement("p");
        let feature = document.createElement("span");
        let time = document.createElement("span");
        let chat_count = document.createElement("span");

        title.setAttribute("class", "title");
        details.setAttribute("class", "details");
        chat_count.setAttribute("class", "chat_count");

        title.innerText = article.title;
        feature.innerText = article.feature;
        chat_count.innerHTML = `<i class="fa-regular fa-message"></i> ${article.reply.length}`;
        time.innerHTML = `Article created ${article.time}`;
        time.append(chat_count);

        details.append(feature, time);
        div.append(title, details);
        recentSupportContainer.append(div);
    });
}
