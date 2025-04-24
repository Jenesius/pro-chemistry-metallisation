const template = document.createElement("template");

template.innerHTML =
`    <div class = "back-dark section-radius section-footer">
        <div class = "wrap  color-light">
            <h1 class = "text-domione title-lg m-b-100">К<span class = "color-primary">о</span>нтакты</h1>
            <div class = "m-b-100 flex gap-40 flex-wrap">
            
                <p class = "title-md text-uppercase">начнём с простого:</p>
                <div class = "flex gap-20 align-center">
                    <a href = "#">
                        <widget-telegram-message></widget-telegram-message>                
                    </a>
                    <div>
                        <a href = "#">
                            <img src = "/assets/img/logo-whatsapp.svg" alt = "logo-whats-app" />
                        </a>
                    </div>
                </div>
                
            </div>
            <div class = "flex gap-50 m-b-50 flex-wrap">
                <widget-contact title = "офис/производство" phone = "+7 812 927-22-20" email = "info@reklama-v-pitere.ru"></widget-contact>
                <widget-contact title = "мобильный" phone = "+7 (911) 927-22-20" email = "9272220@gmail.com"></widget-contact>
            </div>

            <div class = "text-lg flex-column gap-10 m-b-35">
                <p class = "text-uppercase">адрес:</p>
                <p>г. Санкт-Петербург, ул. Автобусная 5. Пропусктной режим с 9:00 до 20:00 Пн-Пт.</p>
                <p>Рекламно-производственная компания Тори-Групп (Tori-Group)</p>
                <p>Изготовление наружной и интерьерной рекламы в СП-б и Ленинградской области</p>
            </div>
            <div class = "flex justify-between align-center">
                <widget-footer-navigation></widget-footer-navigation>
                <a href = "https://taplink.cc/prowebndesgn"> <widget-logo-design></widget-logo-design>  </a>
            </div>
        </div>
    </div>`

export default class WidgetFooter extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        this.append(template.content.cloneNode(true))
    }
}