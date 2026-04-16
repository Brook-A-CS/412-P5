function load_style() {
    page_style = localStorage.getItem("page_stylesheet_name")
    if (page_style === null) {
        page_style = "css/styles.css"
    }
    document.getElementById('page_style').setAttribute("href", page_style);
}

function light_mode() {
    console.log("changed to light mode")
    localStorage.setItem("page_stylesheet_name", "css/styles.css");
    load_style()
}

function dark_mode() {
    console.log("changed to dark mode")
    localStorage.setItem("page_stylesheet_name", "css/anotherOne.css");
    load_style()
}

window.onload = load_style