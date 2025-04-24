const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
  --radius: 30px
}
* {
    margin: 0;
}
.main-container {
    padding: 20px 20px 0 30px;
}
.widget-card-product {
    background-color: #414141;
    border-radius: var(--radius);
    border: 1px solid var(--primary);
}
.widget-card-img {
    border-radius: var(--radius);
}
.flex {
    display: flex;
}
.flex-wrap {
    flex-wrap: wrap;
}
.flex-column {
    display: flex;
    flex-direction: column;
}
.justify-between {
    justify-content: space-between;
}
.justify-around {
    justify-content: space-around;
}
.gap-10 {
    gap: 30px ;
}
.gap-30 {
    gap: 30px ;
}
.title-md {
    font-weight: 600;
    font-size: clamp(1.3rem, 2vw + 1.3rem, 64px);
    line-height: clamp(1.4rem, 2.1vw + 1.4rem, 77px);
}
.text-md {
    font-size: 14px;
    line-height: 100%;
}
.text-bold {
    font-weight: 600;
}
.text-lg {
    font-size: clamp(1rem,  1vw + 1rem, 24px);
    line-height: 100%;
}
.text-underline {
    text-decoration: underline;
}
.text-uppercase {
    text-transform: uppercase;
}
.color-light {
    color: white;
}
.color-primary {
    color: var(--primary);
}
.cursor-pointer {
    cursor: pointer;
}
.p-v-10 {
    padding-block: 10px;
}
.p-v-20 {
    padding-block: 20px;
}
@media screen and (max-width: 768px) {
    .hide-mobile {
        display: none;
    }
}
</style>
`

export default class WidgetCardProduct extends HTMLElement {
    activeTab = null;
    setActiveTab(code) {
        this.activeTab = code === this.activeTab ? null : code;
        this.render();
    }
    connectedCallback() {
        this.root = this.attachShadow({ mode: "open" });
        this.render();
    }

    get img() {
        return this.getAttribute("img")
    }

    get tabs() {
        return [
            {
                title: "Читать описание",
                code: "description"
            },
            {
                title: "Смотреть галерею",
                code: "gallery"
            },
            {
                title: "Таблица цен",
                code: "price"
            }
        ]
    }
    render() {
        const tmp = template.content.cloneNode(true);

        const rootDiv = document.createElement("div");


        rootDiv.classList.add("widget-card-product");

        const body = document.createElement("div");
        body.classList.add("flex-column", "gap-30", "justify-around");
        body.append(this.createTagsContainer())
        body.append(this.createTitle())
        body.append(this.createIconsContainer())
        body.append(this.createTabsContainer())

        const side = this.createSideContainer();


        const mainContainer = document.createElement("div");
        mainContainer.classList.add("flex","justify-between", "main-container");
        mainContainer.append(body, side);

        const contentContainer = this.createContainerContent();

        rootDiv.append(mainContainer);
        rootDiv.append(contentContainer);
        rootDiv.append(tmp);
        this.root.innerHTML = ""
        this.root.append(rootDiv)

    }

    createTitle() {
        const el = document.createElement("p");
        el.classList.add("title-md", "color-light", "text-uppercase");
        el.innerText = this.getAttribute("title")
        return el;
    }
    /**
     * @description Функция для рендеринга списка tags. Возвращает div для подстановки в компоненту.
     * @returns {HTMLDivElement}
     */
    createTagsContainer() {
        const container = document.createElement("widget-card-tags");
        container.setAttribute("array", this.getAttribute("tags"));
        return container;
    }
    /**
     * @description Функция для рендеринга списка tags. Возвращает div для подстановки в компоненту.
     * @returns {HTMLDivElement}
     */
    createIconsContainer() {
        const container = document.createElement("widget-card-icons");
        container.setAttribute("array", this.getAttribute("icons"));
        return container;
    }

    /**
     * @description Функция для рендеринга списка tags. Возвращает div для подстановки в компоненту.
     * @returns {HTMLDivElement}
     */
    createTabsContainer() {
        const container = document.createElement("widget-card-tabs");
        container.setAttribute("array", JSON.stringify(this.tabs));
        container.setAttribute("active-tab", this.activeTab);
        container.addEventListener("open", (event) => this.setActiveTab(event.detail.code))
        return container;
    }

    createSideContainer() {
        const img = document.createElement("img");
        img.src = this.img;
        img.classList.add("widget-card-img", "hide-mobile");
        return img;
    }

    createContainerContent() {
        const div = document.createElement("div");
        div.classList.add("p-v-10")
        const slot = document.createElement("slot");
        slot.setAttribute("name", this.activeTab)
        div.appendChild(slot);

        return div;
    }
}