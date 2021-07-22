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
}, 4000);
