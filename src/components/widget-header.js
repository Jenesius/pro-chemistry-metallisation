const template = document.createElement("template");
template.innerHTML =
`
<a href = "/">
        <img alt = "logo" src = "/assets/img/logo.svg" class = "header-logo"/>
    </a>
    
    <ul class = "flex back-dark widget-header-desktop-menu gap-5 hide-mobile">
        <li class = "text-md text-bold slow "><a href = "/" class = "color-light">Услуги</a></li>
        <li class = "text-md text-bold slow "><a href = "#" class = "color-light">О нас</a></li>
        <li class = "text-md text-bold slow "><a href = "#" class = "color-light">Вакансии</a></li>
        <li class = "text-md text-bold slow "><a href = "#" class = "color-light">Контакты</a></li>
    </ul>
    <a href = "#" class = "text-md text-bold widget-header-cooperate hide-mobile">Сотрудничать</a>
    
    
    <div class = "widget-header-mobile-button hide-desktop back-dark">
        <img src = "/assets/img/icon/menu.svg"/>
    </div>
    
    <div class = "widget-header-mobile-menu hide-desktop gap-40 hide">
        <img src = "/assets/img/icon/arrow.svg" class = "widget-header-mobile-menu-close"/>
        <div class = "flex-column gap-20">
            <a href = "#" class = "text-lg text-bold" >Услуги</a>
            <a href = "#" class = "text-lg text-bold" >О нас</a>
            <a href = "#" class = "text-lg text-bold" >Вакансии</a>
            <a href = "#" class = "text-lg text-bold" >Контакты</a>
        </div>

        <a href = "#" class = "text-lg text-bold color-light main-border">Сотрудничать</a>
    </div>
`

export default class WidgetHeader extends HTMLElement {
    get type() {
        return this.getAttribute("type")
    }
    menuStatus = false
    set isMenuDisplay(value) {
        this.menuStatus = value

        if (value) {
            this.querySelector(".widget-header-mobile-menu").classList.remove("hide");
        } else {
            this.querySelector(".widget-header-mobile-menu").classList.add("hide");
        }
    }

    connectedCallback() {
        this.render()
    }
    render() {
        this.append(template.content.cloneNode(true));
        this.classList.add("flex", "justify-between", "align-center", "padding-v-10", `widget-header-${this.type}`);

        // Обработчик для открытия menu на мобильных устройствах.
        this.querySelector(".widget-header-mobile-button").addEventListener("click", () => {
            this.isMenuDisplay = !this.menuStatus;
        })

        this.querySelector(".widget-header-mobile-menu-close").addEventListener("click", () => {
            this.isMenuDisplay = false
        })

        this.querySelector(".widget-header-cooperate").classList.add(this.type === "dark" ? "color-gray" : "color-light")
        this.querySelector(".header-logo").src = `/assets/img/logo${this.type === 'dark' ? '-dark' : ''}.svg`
    }
}