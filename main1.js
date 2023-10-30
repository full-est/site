const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

function toggleMenuVisibility() {
menuList.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleMenuVisibility);

const PortfolioBtn = document.querySelector(".portfolio__btn");
const PortfolioImg = document.querySelector(".portfolio__img");

function togglePortfolioVisibility() {
PortfolioImg.classList.toggle("hide");
}

PortfolioBtn.addEventListener("click", togglePortfolioVisibility);