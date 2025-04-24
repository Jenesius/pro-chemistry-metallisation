

export default class WidgetGallery extends HTMLElement {

    get array() {
        try {
            return JSON.parse(this.getAttribute("array"))
        } catch (e) {
            return []
        }
    }
    connectedCallback() {
        this.render()
    }

    render() {
        this.array.forEach(
            item => {
                const el = document.createElement("widget-gallery-item");
                el.setAttribute("title", item.title)
                el.setAttribute("img", item.img)
                this.append(el)
            }
        )
        this.classList.add("widget-gallery")
    }
}