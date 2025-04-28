export default class WidgetListTagInfo extends HTMLElement {
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
        this.array.forEach(tag => {
            const tabInfo = document.createElement("widget-tag-info")
            tabInfo.setAttribute("icon", tag.icon)
            tabInfo.setAttribute("title", tag.title)
            tabInfo.setAttribute("description", tag.description);
            
            this.append(tabInfo)
        })
    }
}