const template = document.createElement("template");
template.innerHTML = `
                <div class = "widget-contact main-border flex-column gap-10">
                    <p class = "text-lg text-bold text-uppercase contact-title"></p>
                    <a href = "#" class = "color-light title-md text-bold text-nowrap contact-phone"></a>
                    <a href = "#" class = "color-light text-lg text-bold text-right contact-email text-nowrap text-underline"></a>
                </div>
`

export default class WidgetContact extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.append(template.content.cloneNode(true));
        this.querySelector(".contact-title").innerText = this.title;

        this.renderPhone();
        this.renderEmail()
    }

    renderPhone() {
        const phoneRef = this.querySelector(".contact-phone");
        Object.assign(phoneRef, {
            innerText: this.phone,
            href: `tel:${this.phone}`,
        })
    }
    renderEmail() {
        const phoneRef = this.querySelector(".contact-email");
        Object.assign(phoneRef, {
            innerText: this.phone,
            href: `mailto:${this.email}`,
        })
    }

    get title() {
        return this.getAttribute("title")
    }
    get phone() {
        return this.getAttribute("phone")
    }
    get email() {
        return this.getAttribute("email")
    }
}