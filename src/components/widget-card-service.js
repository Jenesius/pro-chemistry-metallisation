const template = document.createElement('template');

template.innerHTML = `
<div class = "card-tool">
    <img src = "/assets/img/icon/arrow.svg" alt = "card's arrow"/>
</div>
<div class = "card-service-extend-image m-b-10">
    <img src = "" alt = "card's letters"/>
</div>
<p class = "title-md text-bold text-uppercase card-title text-color-auto"></p>
<p class = "text-lg text-bold m-b-35 card-info text-color-auto"></p>
<div class = "card-service-footer">
    <button class = "button-size-md button-style-default widget-card-service-button">Рассчитать стоимость</button>
    <p class = "text-lg card-footer-label text-bold text-color-auto"></p>
    <img src = "/assets/img/logo.svg" alt = "logo" class = "widget-card-service-logo" style="display: none"/>
</div>
<a href = "#" class = "card-service-link"></a>
`

export default class WidgetCardService extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    get href() {
        return this.getAttribute("href");
    }
    get extendImage() {
        return this.getAttribute("extend-image")
    }
    render() {
        this.classList.add("card", "flex-column", "padding-40")
        const title = this.getAttribute("title");
        const buttonLabel = this.getAttribute("button-label");
        const info = this.getAttribute("info");
        const backgroundImage = this.getAttribute("background-image");
        const sideLabel = this.getAttribute("side-label");
        const backgroundColor = this.getAttribute("background-color");

        const node = template.content.cloneNode(true);
        this.append(node);

        this.querySelector(".card-title").innerText = title;
        if (buttonLabel) {
            this.querySelector(".widget-card-service-button").innerText = buttonLabel;
        }
        if (sideLabel) this.querySelector(".card-footer-label").innerText = sideLabel;
        this.querySelector(".card-info").innerText = info;

        this.style.backgroundImage = `url(${backgroundImage})`;
        this.style.backgroundColor = backgroundColor;

        if (this.getAttribute("show-logo")) this.querySelector(".widget-card-service-logo").style.display = "block"

        this.renderExtendImage();
        this.renderLink()
    }

    renderLink() {
        const ref = this.querySelector(".card-service-link");
        ref.href = this.href;
    }
    renderExtendImage() {
        const ref = this.querySelector(".card-service-extend-image");
        if (this.extendImage) {
            this.querySelector(".card-service-extend-image img").src = this.extendImage;
        } else ref.style.display = "none";
    }

    constructor() {
        super();

        this.innerHTML = ``;
    }

}


