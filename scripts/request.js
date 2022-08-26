let searchbar = document.querySelector(".searchbar");
let requestForm = document.querySelector("#request_form");

/* ====================== Event Listeners ========================= */
searchbar.query.addEventListener("blur", () => {
    searchbar.style["border"] = "1px rgb(211, 211, 211) solid";
});

searchbar.query.addEventListener("focus", () => {
    searchbar.style["border"] = "1px var(--accent-color) solid";
});

function RequestOpen() {
    window.location.href = "./request.html";
}

function SubmitRequest(e) {
    e.preventDefault();

    let data = {
        email: requestForm.email.value,
        subject: requestForm.subject.value,
        description: requestForm.desc.value,
        attachments: requestForm.attachment.value,
    };
    console.log(data);
    // Connect with server with network requests
}
