const template = document.createElement("template");
template.innerHTML =
`
<style>
.widget-loader {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: var(--gray);
    z-index: 2;
}
.widget-loader-process-container {
    max-width: 1072px;
    width: 90%;
    display: grid;
}
.widget-loader-process {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    padding: 20px;
}
.widget-loader-process>div {
    background-color: var(--base-color);
}
.widget-loader-process>div:nth-child(1) {
    --base-color: #F5F5F5;
}
.widget-loader-process>div:nth-child(2) {
    --base-color: #DBDBDB;
}
.widget-loader-process>div:nth-child(3) {
    --base-color: #B8B8B8;
}
.widget-loader-process>div:nth-child(4) {
    --base-color: #C66B08;
}
.widget-loader-process>div:nth-child(5) {
    --base-color: #F17E01;
}

.blink {
    animation-name: blink;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
}
@keyframes blink {
  0% {
    background-color: var(--base-color, currentColor); /* Начальный цвет из переменной */
  }
  100% {
    background-color: var(--gray);
  }
}
</style>
    <img src = "/assets/img/logo-full.svg" alt = "logo-full">
    
    <div class="widget-loader-process-container flex gap-40">
        <div class = "widget-loader-process main-border">
            <div style = "height: 120px" class = "blink"></div>
        </div>
        <div class = "flex justify-between">
            <p class = "text-domione title-sm color-light">Загрузка</p>
            <p class = "widget-loader-percent text-domione title-sm color-light"></p>
        </div>
    </div>
`

export default class WidgetLoader extends HTMLElement {
    timeOfLoading = 7_500
    countStep = 0;
    connectedCallback() {
        this.render()
        this.next();
    }

    next() {
        this.countStep++;
        this.updateProcess(this.countStep);



        if (this.countStep === 100) return;

        setTimeout(this.next.bind(this), this.timeOfLoading / 100);
    }

    render() {
        this.classList.add("widget-loader", "grid", "gap-100")
        this.append(template.content.cloneNode(true))
    }
    updateProcess(v) {
        const ref = this.querySelector(".widget-loader-percent");
        ref.innerText = String(v).padStart(2, "0") + "%"

        if (v % 20 === 0) {
            this.querySelector(".blink").classList.remove("blink");
            if (v === 100) return this.finish()
            this.querySelector(".widget-loader-process").append(document.createElement("div"))
            this.querySelector(`.widget-loader-process>div:nth-child(${(v / 20) + 1})`).classList.add("blink");
        }
    }
    finish() {
        document.querySelector(".widget-loader").remove();
    }
}