import BaseComponent from "../base-component.js";

const template = document.createElement('template');
template.innerHTML = `
<span class = "text-uppercase text-lg text-bold text-nowrap"></span>
<img src = "./assets/img/logo-telegram.svg" alt = "logo-telegram"/>
`

export default class WidgetTelegramMessage extends BaseComponent {
    get title () { return this.getAttribute("title") || "связаться с нами" }
    render() {
        this.append(template.content.cloneNode(true));
        this.querySelector("span").innerText = this.title;
        this.classList.add("telegram-link", "flex", "gap-20", "padding-4", "radius-30", "align-center", "cursor-pointer");
    }
}