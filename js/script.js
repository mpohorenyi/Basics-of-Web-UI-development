function showText (element) {
    if (element.previousElementSibling.clientHeight === 80) {
        element.previousElementSibling.style.height = "100%";
        element.innerHTML = "Show Less...";
    } else {
        element.previousElementSibling.style.height = "80px";
        element.innerHTML = "Read More...";
    }
}
