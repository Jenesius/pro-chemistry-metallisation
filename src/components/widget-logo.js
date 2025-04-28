const template = document.createElement("template");
template.innerHTML =
`
<style>
.swap-path {
    fill: #fff;
}
.dark {
.swap-path {
    fill: var(--dark)
}
}
</style>
<svg width="54" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.6572 0L11.8077 8.80199L9.52151 17.4086L42.371 8.60662L44.6572 0Z" class = "swap-path"/>
<path d="M7.04682 10.0776L5.46004 10.5028L3.17384 19.1094L4.76061 18.6843L7.04682 10.0776Z" class = "swap-path"/>
<path d="M3.87298 10.9281L2.2862 11.3533L0 19.9599L1.58678 19.5348L3.87298 10.9281Z" class = "swap-path"/>
<path d="M10.2207 9.22723L8.63388 9.65241L6.34767 18.259L7.93445 17.8339L10.2207 9.22723Z" class = "swap-path"/>
<path d="M53.3467 9.35802L33.0784 14.7631L30.8658 23.0099L43.0607 19.6966L38.7518 35.9889L22.2279 40.4879C18.8091 41.404 12.0555 38.7063 13.7569 30.3774C14.9704 25.8634 15.6082 23.483 16.7775 19.119L16.7776 19.1189L8.51621 21.466L6.135 30.3528C6.03673 31.2676 5.98904 32.4588 5.98904 32.4588C6.39424 46.0462 19.303 48.9256 24.1414 47.6291L44.6128 42.1438L51.1423 17.7007L53.3467 9.35802Z" fill="#F17E01"/>
<path d="M35.8312 33.0687L22.0857 36.784C19.2292 37.5494 16.2308 34.6109 17.3847 30.3803L22.0691 13.9702L30.4799 11.7165L25.7265 28.1545L37.9999 24.9754L35.8312 33.0687Z" class = "swap-path"/>
</svg>

`

export default class WidgetLogo extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        this.append(template.content.cloneNode(true))
    }
}