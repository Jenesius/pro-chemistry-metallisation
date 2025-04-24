const template = document.createElement("template")

export default class WidgetCardIcons extends HTMLElement {

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
        this.classList.add("flex", "gap-30");
        this.array.forEach(icon => {
            const el = document.createElement("img");
            el.setAttribute("src", `/assets/img/icon/${icon}.svg`);
            this.appendChild(el)
        })
    }
}