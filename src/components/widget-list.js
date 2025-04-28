const template = document.createElement("template");
template.innerHTML =
`
<style>
    .widget-list {
        grid-template-columns: minmax(0, 1fr);
        padding: 131px 0;
        display: grid;
        gap: 30px;
    }
</style>
<div class = "widget-list">
    <slot name = "title"></slot>
        <slot></slot>
</div>
`

export default class WidgetList extends HTMLElement {

    connectedCallback() {
        this.render()
    }

    render() {
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = template.cloneNode(true).innerHTML;

        // this.append(template.content.cloneNode(true))
    }
}