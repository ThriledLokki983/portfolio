"use strict";
const nav = document.querySelector(".header__nav");

window.addEventListener("DOMContentLoaded", () => {
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
});

const logo = document.querySelector(".intro__container");

setTimeout(() => {
    logo.classList.add("hidden");
}, 3000);

// Adding a sticky Nav-bar
const header1 = document.querySelector(".header__nav");
const navHeight = nav.getBoundingClientRect().height;

console.log(navHeight);

const stickyNav = function (entries) {
    const [entry] = entries;

    console.log(nav);
    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header1);
