
const productMenuContainer = document.querySelector('#productMenuContainer');
const hovered = document.querySelector('.products');
const literature = document.querySelector(".literature");

hovered.onmouseover = function() {
    productMenuContainer.classList.add("show");
    hovered.classList.add("show");
};

productMenuContainer.onmouseover = function() {
    productMenuContainer.classList.add("show");
    hovered.classList.add("show");
};

productMenuContainer.onmouseout = function() {
    productMenuContainer.classList.remove("show");
    hovered.classList.remove("show");
};

literature.onmouseover = function() {
    productMenuContainer.classList.remove("show");
    hovered.classList.remove("show");
};

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.getElementById("navbarCollapse");


navbarToggler.addEventListener("click", function(){
    navbarCollapse.classList.toggle("showNav");
});