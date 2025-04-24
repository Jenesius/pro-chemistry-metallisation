const template = document.createElement("template");
template.innerHTML = `
<section class = "widget-info-block padding-v-50">
    <p class = "text-right text-md text-bold m-b-23">Рекламно-производственная компания Тори-Групп // <span class = "color-primary">2025</span></p>
    <h1 class = "widget-info-block-title title-lg text-domione m-b-10"></h1>
    <p class = "widget-info-block-text text-lg text-bold"></p>
</section>
`;

export default class WidgetInfoBlock extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    get title() {
        return this.getAttribute("title");
    }
    get info() {
        return this.getAttribute("info")
    }
    get type() {
        return this.getAttribute("type")
    }

    render() {
        this.append(template.content.cloneNode(true));
        this.classList.add(this.type === "dark" ? "color-gray" : "color-light" );
        this.renderInfo();
        this.renderTitle()

    }

    renderTitle() {
        const ref = this.querySelector(".widget-info-block-title");
        ref.innerHTML = this.title.replace(/\*(\S)\*/g, '<span class="color-primary">$1</span>');
    }
    renderInfo() {
        if (this.info) {
            this.querySelector(".widget-info-block-text").innerText = this.info;
        } else this.querySelector(".widget-info-block-text").style.display = "none";

    }
}