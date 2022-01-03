
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

const companyInfo = document.querySelector(".companyInfo");
const companyInfoArray = [...companyInfo.children];

const companyInfoBtns = document.querySelector(".companyHeadBtns");
const infoBtns = [...companyInfoBtns.children];




companyInfoBtns.addEventListener("click", function(e) {

    const currentInfo = companyInfo.querySelector(".active");
    const currentBtn = (e.target);

    let index = findIndex(currentBtn, infoBtns);

    const targetInfo = companyInfoArray[index];

    toggleActive(currentInfo, targetInfo);

});

function toggleActive(current, target){
    current.classList.remove("active");
    target.classList.add("active");
}

function findIndex (item, items) {
    for (let index = 0; index < items.length; index++) {
        if (item === items[index]) {
            return index;
        }
    }
}


const companyBtns = document.getElementsByClassName("companyBtn");
for (let i = 0; i < companyBtns.length; i++) {

    companyBtns[i].onclick = function() {

        let el = companyBtns[0];
        while(el) {
            if(el.tagName === "LI") {
                el.classList.remove("border-b-3px");
            }
            el = el.nextSibling;
        }
        this.classList.add("border-b-3px");
    }
}