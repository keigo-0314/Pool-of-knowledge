const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const header = document.getElementById("header");

hamburger.addEventListener('click', () => {
    if(menu.style.display == "none") {
        menu.style.display = "contents";
        header.style.height = "120px";
    } else {
        menu.style.display= "none";
        header.style.height = "92px";
    }
    // console.log("click");
});