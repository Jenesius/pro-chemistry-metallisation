const template = document.createElement('template');
template.innerHTML = `
    <img src = "#" />
    <p class = "text-lg text-bold text-color-auto"></p>`

export default class WidgetAdvantagesItem extends HTMLElement {
    get title() {
        return this.getAttribute("title");
    }
    get img() {
        return this.getAttribute("img");
    }

    connectedCallback() {
        this.render()
    }
    render() {
        this.append(template.content.cloneNode(true));
        this.renderImage()
        this.renderTitle()
        this.classList.add("main-border", "flex-column", "gap-20", "align-center", "widget-advantage")
    }

    renderImage() {
        const ref = this.querySelector("img")
        ref.src = this.img
    }
    renderTitle() {
        const ref = this.querySelector("p");
        ref.innerText = this.title;
    }


}