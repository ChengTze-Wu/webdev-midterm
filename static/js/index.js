async function getPage(url) {
    const resp = await fetch(url);
    const content = await resp.text();
    return content;
}

function renderToRoot(content) {
    const root = document.getElementById("root");
    root.innerHTML = content;
}

function linkToPage() {
    const nav_items = document.querySelectorAll(".nav_item");
    nav_items.forEach((nav_item) => {
        nav_item.addEventListener("click", async () => {
            const content = await getPage(`./${nav_item.id}.html`);
            renderToRoot(content);
        });
    });
}

function linkToHome() {
    const logo = document.querySelector(".logo");
    const headbar_logo = document.querySelector(".headbar_logo");
    logo.addEventListener("click", async () => {
        const content = await getPage("./home.html");
        renderToRoot(content);
    });
    headbar_logo.addEventListener("click", async () => {
        const content = await getPage("./home.html");
        renderToRoot(content);
    });
}

function switchMode() {
    const body = document.querySelector("body");
    const toggle = document.getElementById("toggle");
    window.addEventListener("load", async () => {
        const content = await getPage("./home.html");
        renderToRoot(content);
        if (toggle.checked) {
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
        }
    });
    toggle.addEventListener("click", (e) => {
        if (e.target.checked) {
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
        }
    });
}

function shrinkSidebar() {
    const sidebar_btn = document.querySelector(".sidebar_btn");
    const sidebar_btn_i = document.querySelector(".sidebar_btn > i");
    const displaies = document.querySelectorAll(".display");
    const sidebar = document.querySelector(".sidebar");
    const toggle_l = document.querySelector(".toggle-l");
    const nav_item = document.querySelectorAll(".nav_item");
    const logo = document.querySelector(".logo");
    const search = document.querySelector(".search");
    let status = 0;
    sidebar_btn.addEventListener("click", () => {
        if (status == 0) {
            sidebar.classList.add("sidebar_shrink");
            sidebar_btn_i.classList.add("rotate");
            displaies.forEach((display) => {
                display.classList.add("hidden");
            });
            nav_item.forEach((n) => {
                n.classList.add("sidebar-center");
            });
            search.classList.add("sidebar-center");

            logo.classList.add("sidebar-center");
            toggle_l.classList.add("toggle_shrink");
            status = 1;
        } else {
            sidebar.classList.remove("sidebar_shrink");
            sidebar_btn_i.classList.remove("rotate");
            displaies.forEach((display) => {
                display.classList.remove("hidden");
            });
            nav_item.forEach((n) => {
                n.classList.remove("sidebar-center");
            });
            search.classList.remove("sidebar-center");
            logo.classList.remove("sidebar-center");
            toggle_l.classList.remove("toggle_shrink");
            status = 0;
        }
        // console.log(status);
    });
}

linkToPage();
linkToHome();
switchMode();
shrinkSidebar();
