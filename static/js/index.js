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

linkToPage();
switchMode();
