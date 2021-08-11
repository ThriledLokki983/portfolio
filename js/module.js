/** @format */

export class Project {
    constructor(data, limit) {
        this.data = data;
        this.limit = limit;
    }

    loadProjects() {
        const projectsParentElement = document.querySelector(".all_projects");
        projectsParentElement.innerHTML = "";
        const ul = document.createElement("ul");
        const dat = this.limit;

        this.data.forEach(function (item, i) {
            if (item.id < dat) {
                console.log(dat);
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
                        src="img/${item.photo}.jpg"/>
                </div>
                </div>`;

                projectsParentElement.insertAdjacentHTML("beforebegin", html);
            }
        });

        return this;
    }
}
