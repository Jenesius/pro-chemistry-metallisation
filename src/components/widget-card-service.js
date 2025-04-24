const template = document.createElement('template');

template.innerHTML = `

<div class = "card flex-column padding-40" >
    <div class = "card-tool">
        <img src = "/assets/img/icon/arrow.svg" alt = "card's arrow"/>
    </div>
    <div class = "card-service-extend-image m-b-10">
        <img src = "assets/img/background/letters.png" alt = "card's letters"/>
    </div>
    <p class = "title-md text-bold text-uppercase card-title">буквы</p>
    <p class = "text-lg text-bold m-b-35 card-info">Объёмные / Световые / Неоновые / Хром</p>
    <div class = "card-service-footer">
        <button class = "button-size-md button-style-default">Рассчитать стоимость</button>
        <p class = "text-lg card-footer-label text-bold">от 100 ₽/см</p>
    </div>
    <a href = "#" class = "card-service-link"></a>
</div>
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
        const title = this.getAttribute("title");
        const buttonLabel = this.getAttribute("button-label");
        const info = this.getAttribute("info");
        const backgroundImage = this.getAttribute("background-image");
        const type = this.getAttribute("type");
        const backgroundColor = this.getAttribute("background-color");


        const node = template.content.cloneNode(true);
        this.append(node);
        this.querySelector(".card-title").innerText = title;
        this.querySelector(".card-footer-label").innerText = buttonLabel;
        this.querySelector(".card-info").innerText = info;

        this.querySelector(".card").style.backgroundImage = `url(${backgroundImage})`;
        this.querySelector(".card").style.backgroundColor = backgroundColor;
        this.querySelector(".card").classList.add("card-" + type);

        this.style.display =  "inherit";


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


