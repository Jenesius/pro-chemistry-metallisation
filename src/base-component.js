export default class BaseComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {}
}