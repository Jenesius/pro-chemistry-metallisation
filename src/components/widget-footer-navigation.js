const footerNavigationElement = document.createElement("template");
footerNavigationElement.innerHTML = ``

export default class WidgetFooterNavigation extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    array = [
        { label: "Политика конфиденциальности", link: "/privacy" },
        { label: "Реквизиты", link: "/requisite" },
        { label: "Мегахром.рф", link: "https://мегахром.рф" },
        { label: "Reklama-v-pitere.ru", link: "https://reklama-v-pitere.ru/" },
    ]

    render() {
        const root = document.createElement("ul");
        root.classList.add("widget-footer-navigation-item");
        root.innerHTML = this.array.map(
            data => `<li><a href = "${data.link}" class = "text-lg color-light text-underline footer-navigation-element">${data.label}</a></li>`
        ).join("")
        this.append(root)
    }
}

