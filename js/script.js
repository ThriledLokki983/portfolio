"use strict";

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

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

// USe event delegation -- attach the event handler to the parent element that contains all the elements we want to work with
tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");

    // Guard clause
    if (!clicked) return;

    // Clear the active class from all elements that already has it
    tabs.forEach((t) => t.classList.remove("operations__tab--active"));
    // Add it to the one that was clicked
    clicked.classList.add("operations__tab--active");

    // Clear all content active class form the elements and then add it to the selected button
    tabsContent.forEach((c) =>
        c.classList.remove("operations__content--active")
    );

    // Activate the content Area of the clicked button
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add("operations__content--active");

    // console.log(clicked.dataset.tab);
});
