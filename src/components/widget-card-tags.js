export default class WidgetCardTags extends HTMLElement {
    get array() {
        const value = this.getAttribute("array");
        try {
            return JSON.parse(value);
        } catch (e) {
            return []
        }
    }
    connectedCallback() {
        this.render()
    }
    render() {
        this.array.forEach(title => {
            const el = document.createElement("widget-card-tag");
            el.setAttribute("title", title);
            this.appendChild(el)
        })
        this.classList.add("flex", "gap-10", "flex-wrap")
    }
}