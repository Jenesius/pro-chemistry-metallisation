const template = document.createElement("template");
template.innerHTML =
`
  <img src = "#" alt = "widget-tag-info" />
  <p></p>
`
export default class WidgetTagInfo extends HTMLElement {
    get icon() {
        return this.getAttribute('icon')
    }
    get title() {
        return this.getAttribute('title')
    }
    get description() {
        return this.getAttribute("description")
    }
    
    connectedCallback() {
        this.render()
    }
    render() {
        this.append(template.content.cloneNode(true));
        this.classList.add("back-dark", "flex-column", "widget-tag-info");
        
        
        const refImg = this.querySelector("img");
        refImg.src = `/assets/img/icon/${this.icon}.svg`;
        refImg.width = 48
        
        const refTitle = this.querySelector("p");
        refTitle.classList.add("text-lg", "color-light")
        const span = document.createElement("span");
        span.innerText = this.title;
        span.classList.add("text-bold");
        refTitle.append(
            span,
            " - " + this.description
        )
        
    }
}