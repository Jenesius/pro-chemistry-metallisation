export default class WidgetCardTabs extends HTMLElement {

    get activeTab() {
        return this.getAttribute("active-tab");
    }
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

    handleClick(tab) {
        const event = new CustomEvent("open", {
            detail: tab
        });
        this.dispatchEvent(event)
    }

    render() {
        this.classList.add("flex", "gap-30", "p-v-10", "flex-wrap");

        this.array.forEach(tab => {
            const el = document.createElement("p");
            el.classList.add("text-md", "text-underline", "color-light", "cursor-pointer");
            if (tab.code === this.activeTab) el.classList.add("text-bold", "color-primary");
            el.innerText = tab.title
            el.addEventListener("click", this.handleClick.bind(this, tab));
            this.append(el)
        })
    }
}