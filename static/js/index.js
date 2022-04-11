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
            const content = await getPage(`/${nav_item.id}.html`);
            renderToRoot(content);
        });
    });
}

linkToPage();
