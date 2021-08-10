/** @format */

"use strict";

//ANIMATION
const anim = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
});

anim.add({
    targets: "#hexagon path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutQuart",
    baseFrequency: 0,
    opacity: 1,
    duration: 1000,
    delay: function (el, i) {
        return i * 250;
    },
}).add({
    targets: "#hexagon #G",
    baseFrequency: 0,
    duration: 1500,
    opacity: 1,
    easing: "easeInOutQuart",
});

window.addEventListener("DOMContentLoaded", () => {
    const mobile_logo = document.querySelector(".header__nav");
    const mainContent = document.querySelector(".content");
    const modal = document.querySelector(".modal");
    const modalNav = document.querySelector(".modal__nav");
    const home = document.querySelector("#home");
    const logoBox = document.querySelector(".header__logo-box");

    const tabs = document.querySelectorAll(".operations__tab");
    const tabsContainer = document.querySelector(".operations__tab-container");
    const tabsContent = document.querySelectorAll(".operations__content");

    const docWidth = document.documentElement.offsetWidth;

    [].forEach.call(document.querySelectorAll("*"), function (el) {
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    });

    // const nav = document.querySelector(".navigation");

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

    document
        .querySelector(".header__nav--list")
        .addEventListener("click", function (e) {
            e.preventDefault();

            if (e.target.classList.contains("header__nav--link")) {
                viewSection(e);
            }
        });

    document
        .querySelector(".modal__nav--list")
        .addEventListener("click", function (e) {
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

    //Control the enxperience buttons and its content
    tabsContainer.addEventListener("click", function (e) {
        const clicked = e.target.closest(".operations__tab");
        console.log(clicked);

        if (!clicked) return;

        tabs.forEach((t) => t.classList.remove("operations__tab--active"));
        clicked.classList.toggle("btn-1");

        tabsContent.forEach((c) =>
            c.classList.remove("operations__content--active")
        );

        tabs.forEach((tab) => tab.classList.remove("btn-1"));

        document
            .querySelector(`.operations__content--${clicked.dataset.tab}`)
            .classList.add("operations__content--active");

        document
            .querySelector(`.operations__tab--${clicked.dataset.tab}`)
            .classList.add("btn-1");
    });
});
