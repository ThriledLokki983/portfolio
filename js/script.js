/** @format */

"use-strict";
import { experience, projects } from "data.js";

// const nav = document.querySelector(".navigation");
const mobile_logo = document.querySelector(".header__nav");
const mainContent = document.querySelector(".content");
const modal = document.querySelector(".modal");
const modalNav = document.querySelector(".modal__nav");
const home = document.querySelector("#home");
const logoBox = document.querySelector(".header__logo-box");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

window.addEventListener("DOMContentLoaded", (event) => {
	console.log("DOMContent is Loaded!!!");
});

const listItems = function (item) {
	// containerMovements.innerHTML = "";

	item.forEach(function (mov, i) {});
};

const loadExperience = function (projects, id, className = "project__left") {
	const data = projects[id];

	const html = `
    <div class="${className}">
    <div class="${className}-content">
        <div class="${className}-label">
            Featured Project
        </div>
        <h4 class="${className}-title">
            ${data.name}
        </h4>
        <div class="${className}-details">
            <p>
            ${data.desc}
            </p>
            <ul>
            
                <li>JavaScript</li>
                <li>Sass</li>
                <li>GitHub-API</li>
            </ul>
            <ul>
                <li
                    class="
                        side__social--item
                        ${className}-links
                    "
                >
                    <a
                        href="https://github.com/ThriledLokki983/RecipeApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <svg
                            class="
                                side__social--item
                                icon
                                project-links-icon
                            "
                        >
                            <use
                                xlink:href="img/sprites.svg#icon-${data.links[0]}"
                            ></use>
                        </svg>
                    </a>
                </li>
                <li
                    class="
                        side__social--item
                        ${className}-links
                    "
                >
                    <a
                        href="https://gideon-recipeapp.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <svg
                            class="
                                side__social--item
                                icon
                                project-links-icon
                            "
                        >
                            <use
                                xlink:href="img/sprites.svg#icon-${data.links[1]}"
                            ></use>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div class="${className}-img">
        <img
            srcset="
                img/recipe-small.png  600w,
                img/recipe-1.jpg     1000w
            "
            sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw 300px"
            alt="Photo Recipe"
            src="img/recipe-1.jpg"
        />
    </div>
</div>`;

	parentElement.insertAdjacentHTML("afterbegin", html);
};

const mobileMenu = function () {
	mainContent.classList.toggle("hidden");
	modal.style.display = "flex";
	modal.classList.toggle("hidden");
	modalNav.classList.toggle("hidden");
};

const viewSection = function (e) {
	const id = e.target.getAttribute("href");
	document.querySelector(id).scrollIntoView({
		behavior: "smooth",
	});
};

logoBox.addEventListener("click", function (e) {
	if (e.target.classList.contains("header__logo-box--text")) {
		home.scrollIntoView({
			behavior: "smooth",
		});
	}
});

mobile_logo.addEventListener("click", function (e) {
	if (e.target.classList.contains("header__nav")) {
		mobileMenu();
	}
});

document.querySelector(".header__nav--list").addEventListener("click", function (e) {
	e.preventDefault();

	if (e.target.classList.contains("header__nav--link")) {
		viewSection(e);
	}
});

document.querySelector(".modal__nav--list").addEventListener("click", function (e) {
	e.preventDefault();

	mobileMenu();

	if (e.target.classList.contains("modal__nav--link")) {
		viewSection(e);
	} else {
		home.scrollIntoView({
			behavior: "smooth",
		});
	}
});

//Control the experience buttons and its content
tabsContainer.addEventListener("click", function (e) {
	const clicked = e.target.closest(".operations__tab");
	console.log(clicked);

	if (!clicked) return;

	tabs.forEach((t) => t.classList.remove("operations__tab--active"));
	clicked.classList.toggle("btn-1");

	tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

	tabs.forEach((tab) => tab.classList.remove("btn-1"));

	document
		.querySelector(`.operations__content--${clicked.dataset.tab}`)
		.classList.add("operations__content--active");

	document
		.querySelector(`.operations__tab--${clicked.dataset.tab}`)
		.classList.add("btn-1");
});

// const docWidth = document.documentElement.offsetWidth;
// [].forEach.call(document.querySelectorAll("*"), function (el) {
//     if (el.offsetWidth > docWidth) {
//         console.log(el);
//     }
// });
