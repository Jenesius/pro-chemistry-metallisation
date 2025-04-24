import BaseComponent from "../base-component.js";

const template = document.createElement('template');
template.innerHTML = `
<div class="main-border flex-column gap-20 align-center widget-advantages-telegram">
    <p class="text-lg text-bold text-color-auto">Проект-менеджер Александр</p>
    <widget-telegram-message title = "Рассчитать стоимость"></widget-telegram-message>
    <p class="text-md text-bold text-color-auto text-center">Данная кнопка откроет чат в телеграм</br> с менеджером Тори-Групп</p>
</div>
<div class="widget-advantages-list gap-40" >
    <widget-advantages-item
        img="/assets/img/background/own-production.svg"
        title="Собственное производство"
    ></widget-advantages-item>
    <widget-advantages-item
        class = "blur"
        img="/assets/img/icon/entypo_shield.svg"
        title="Гарантия качества"
    ></widget-advantages-item>
    <widget-advantages-item
        img="/assets/img/icon/healthicons_defibrilator.svg"
        title="Быстрые сроки"
    ></widget-advantages-item>
</div>
`

export default class WidgetAdvantages extends BaseComponent{

    render() {
        this.append(template.content.cloneNode(true))
        this.classList.add("text-color-auto", "m-b-140", "flex", "justify-between", "flex-wrap", "gap-40")
    }
}