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

function switchMode() {
    const body = document.querySelector("body");
    const toggle = document.getElementById("toggle");
    window.addEventListener("load", () => {
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
    const toggle = document.querySelector(".toggle");
    let status = 0;
    sidebar_btn.addEventListener("click", () => {
        if (status == 0) {
            sidebar.classList.add("sidebar_shrink");
            sidebar_btn_i.classList.add("rotate");
            displaies.forEach((display) => {
                display.classList.add("hidden");
            });
            toggle.classList.add("toggle_shrink");
            status = 1;
        } else {
            sidebar.classList.remove("sidebar_shrink");
            sidebar_btn_i.classList.remove("rotate");
            displaies.forEach((display) => {
                display.classList.remove("hidden");
            });
            toggle.classList.remove("toggle_shrink");
            status = 0;
        }
        // console.log(status);
    });
}

linkToPage();
switchMode();
shrinkSidebar();
