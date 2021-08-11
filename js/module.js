/** @format */

export class Project {
	constructor(data, id) {
		this.data = data;
		this._id = id;
	}

	loadExperience() {
		const projectsParentElement = document.querySelector(".all_projects");
		projectsParentElement.innerHTML = "";
		const ul = document.createElement("ul");

		this.data.forEach(function (item, i) {
			const html = `
        <div class="${item.className}">
        
            <div class="${item.className}-content">
                <div class="${item.className}-label">
                ${item.label}
            </div>
            <h4 class="${item.className}-title"> ${item.name} </h4>
            <div class="${item.className}-details">
                <p> ${item.desc} </p>
                ${ul}
            </div>
        </div>
    
        <div class="${item.className}-img">
            <img srcset="img/${item.photo}-small.jpg  600w, img/${item.photo} 1000w"
                sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw 300px"
                alt="Photo Recipe"
                src="img/${item.photo}"/>
        </div>
        </div>`;

			projectsParentElement.insertAdjacentHTML("beforebegin", html);
		});

		return this;
	}

	renderLanguageItems(languages) {
		return `
        ${languages.map((language) => `<li>${language}</li>`)}
        `;
	}

	async listLanguageItems() {
		const experienceLangUlItems = document.querySelector(".exp_listItem");
		// console.log(document.querySelector(".project-container"));
		// experienceLangUlItems.innerHTML = "";
		console.log(this);

		await this.data[1].languages.forEach(function (item, i) {
			const html = `
            <li>${item}</li>`;

			experienceLangUlItems.insertAdjacentHTML("afterbegin", html);
		});
		return this;
	}

	async listLinkItems() {
		const experienceLinkUlItems = document.querySelector(".link_listItems");
		// experienceLinkUlItems.innerHTML = "";

		await this.links.forEach(function (item, i) {
			const html = `
            <li class="side__social--item ${data.className}-links">
                <a href="${data.links[i].link}" target="_blank" rel="noopener noreferrer" aria-label="${data.links[i].icon}">
                    <svg class="side__social--item icon project-links-icon">
                        <use xlink:href="img/sprites.svg#icon-${data.links[i].icon}"></use>
                    </svg>
                </a>
            </li>`;

			experienceLinkUlItems.insertAdjacentHTML("afterbegin", html);
		});
		return this;
	}
}
