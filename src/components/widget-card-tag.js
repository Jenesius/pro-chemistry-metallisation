
const template = document.createElement("template");
template.innerHTML =
`
<style>
.widget-card-tags {
    display: flex;
    height: 40px;
    gap: 10px;
}
.widget-card-tag {
    padding: 5px 30px;
    border-radius: 30px;
    background-color: #fff;
}
</style>
<p class = "text-lg text-nowrap color-gray widget-card-tag"></p>
`

export default class WidgetCardTag extends HTMLElement {
    get title() {
        return this.getAttribute("title");
    }
    connectedCallback() {
        this.render()
    }
    render() {
        this.append(template.content.cloneNode(true));
        this.querySelector("p").innerText = this.title;
    }
}