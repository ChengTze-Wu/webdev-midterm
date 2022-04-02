async function get_content_by_relative_url(relative_url) {
    const resp = await fetch(relative_url);
    const contrent = await resp.text();
    return contrent;
}
