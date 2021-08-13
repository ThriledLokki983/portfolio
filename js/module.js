/** @format */

export class Project {
    constructor(data, limit) {
        this.data = data;
        this.limit = limit;
    }

    loadProjects() {
        const projectsParentElement = document.querySelector(".all_projects");
        projectsParentElement.innerHTML = "";
        const dat = this.limit;

        this.data.forEach(function (item, i) {
            if (item.id < dat) {
                const html = `
                <div class="${item.className}">
                
                    <div class="${item.className}-content">
                        <div class="${item.className}-label">
                        ${item.label}
                    </div>
                    <h4 class="${item.className}-title"> ${item.name} </h4>
                    <div class="${item.className}-details">
                        <p> ${item.desc} </p>
                        <ul>
                        ${item.languages
                            .map((lang) => `<li>${lang}</li>`)
                            .join("")}
                        </ul>
                        <ul>
                            ${item.links
                                .map(
                                    (lnk, i) => `
                            <li class="side__social--item ${item.className}-links">
                                <a href="${lnk.link}" target="_blank" rel="noopener noreferrer" aria-label="${lnk.icon}">
                                    <svg class="side__social--item icon project-links-icon">
                                        <use xlink:href="img/sprites.svg#icon-${lnk.icon}"></use>
                                    </svg>
                                </a>
                            </li>`
                                )
                                .join("")}
                        </ul>
                    </div>
                </div>
            
                <div class="${item.className}-img">
                    <img srcset="img/${item.photo}-small.png  600w, img/${
                    item.photo
                }.jpg 1000w"
                        sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw 300px"
                        alt="Photo ${item.name}"
                        src="img/${item.photo}.jpg"
                        width="300px" height="350px"/>
                </div>
                </div>`;

                projectsParentElement.insertAdjacentHTML("beforebegin", html);
            }
        });

        return this;
    }
}

export class NoteworthyProjects {
    constructor(data, limit) {
        this.data = data;
        this.limit = limit;
    }

    loadNoteworthyProjects() {
        const projectsListsParentElement = document.querySelector(
            ".project__lists--items"
        );
        console.log(this.data);
        projectsListsParentElement.innerHTML = "";
        const dat = this.limit;

        this.data.forEach(function (item, i) {
            if (item.id < dat) {
                const html = `
                <li class="item others">
                    <div class="item__inner">
                        <header>
                            <div class="item__inner-top">
                                <div class="item__inner-top--folder">
                                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Folder">
                                        <svg class="ide__social--item icon item__inner-top--folder-icon">
                                            <use xlink:href="img/sprites.svg#icon-${
                                                item.icon
                                            }"></use>
                                        </svg>
                                    </a>
                                </div>
                                <div class="item__inner-top--links">
                                    <a href="${
                                        item.link.maniLink
                                    }" target="_blank" rel="noopener noreferrer" aria-label="Folder">
                                        <svg class="ide__social--item icon item__inner-top--links-icon">
                                            <use xlink:href="img/sprites.svg#icon-${
                                                item.link.linkIcon
                                            }"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <h3 class="item__inner-title"> ${item.topic} </h3>
                            <div class="item__inner-description"> ${
                                item.desc
                            } </div>
                        </header>
                        <footer>
                            <ul class="item__inner--tech-list">
                            ${item.languages
                                .map((lang) => `<li>${lang}</li>`)
                                .join("")}
                            </ul>
                        </footer>
                        </div>
                </li>`;

                projectsListsParentElement.insertAdjacentHTML(
                    "afterbegin",
                    html
                );
            }
        });

        return this;
    }
}

export class Experience {
    constructor(data) {
        this.data = data;
    }

    loadExperience() {
        const projectsListsParentElement = document.querySelector(
            ".project__lists--items"
        );
        console.log(this.data);
        projectsListsParentElement.innerHTML = "";
        const dat = this.limit;

        this.data.forEach(function (item, i) {
            if (item.id < dat) {
                const html = `
              `;

                projectsListsParentElement.insertAdjacentHTML(
                    "beforebegin",
                    html
                );
            }
        });

        return this;
    }
}
