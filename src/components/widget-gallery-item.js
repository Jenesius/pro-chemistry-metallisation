const template = document.createElement('template');
template.innerHTML = `
<p class = "color-light back-gray text-lg"></p>
`

export default class WidgetGalleryItem extends HTMLElement {
    get title() { return this.getAttribute("title") }
    get img() { return this.getAttribute("img") }
    connectedCallback() {
        this.render()
    }

    render() {
        this.append(template.content.cloneNode(true))
        this.style.backgroundImage = 'url(' + this.img + ')';
        this.querySelector("p").innerText = this.title

        this.classList.add("widget-gallery-item")
    }
}