import LoadingController from "../loading-controller.js";

const template = document.createElement("template");
template.innerHTML = `
  <style>
    .widget-loader {
      position: fixed;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background-color: var(--gray);
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 140px;
      align-items: center;
      justify-content: center;
      transition: 1s;
    }
    .widget-loader.finished {
      gap: 2000px;
      background-color: transparent;
    }
    .widget-loader-logo {
      opacity: 0;
      transition: 1s;
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
    .widget-loader-process > div {
      background-color: var(--base-color);
    }
    .widget-loader-process > div:nth-child(1) { --base-color: #F5F5F5; }
    .widget-loader-process > div:nth-child(2) { --base-color: #DBDBDB; }
    .widget-loader-process > div:nth-child(3) { --base-color: #B8B8B8; }
    .widget-loader-process > div:nth-child(4) { --base-color: #C66B08; }
    .widget-loader-process > div:nth-child(5) { --base-color: #F17E01; }

    .blink {
      animation: blink 1.5s infinite alternate-reverse;
    }

    @keyframes blink {
      0% { background-color: var(--base-color, currentColor); }
      100% { background-color: var(--gray); }
    }
  </style>

  <img src="/assets/img/logo-full.svg" alt="Логотип" class="widget-loader-logo" />

  <div class="widget-loader-process-container flex gap-40">
    <div class="widget-loader-process main-border">
      <div style="height: 120px" class="blink"></div>
    </div>
    <div class="flex justify-between">
      <p class="text-domione title-sm color-light">Загрузка</p>
      <p class="widget-loader-percent text-domione title-sm color-light"></p>
    </div>
  </div>
`;

export default class WidgetLoader extends HTMLElement {
    #loadingDuration = 7500;
    #currentStep = 0;
    #maxSteps = 100;
    
    connectedCallback() {
        this.classList.add("widget-loader", "grid", "gap-100");
        this.append(template.content.cloneNode(true));
        this.#animateLoading();
    }
    
    #animateLoading() {
        this.#currentStep++;
        this.#updateProgress(this.#currentStep);
        
        if (this.#currentStep < this.#maxSteps) {
            setTimeout(() => this.#animateLoading(), this.#loadingDuration / this.#maxSteps);
        }
    }
    
    #updateProgress(value) {
        const percentText = this.querySelector(".widget-loader-percent");
        const logo = this.querySelector(".widget-loader-logo");
        const processContainer = this.querySelector(".widget-loader-process");
        
        percentText.textContent = `${String(value).padStart(2, "0")}%`;
        
        if (value % 20 === 0) {
            const currentBlink = processContainer.querySelector(".blink");
            if (currentBlink) currentBlink.classList.remove("blink");
            
            if (value === 40) logo.style.opacity = "1";
            if (value === this.#maxSteps) {
                this.#finish();
                return;
            }
            
            const nextSegment = document.createElement("div");
            nextSegment.style.height = "120px";
            nextSegment.classList.add("blink");
            processContainer.appendChild(nextSegment);
        }
    }
    
    #finish() {
        new LoadingController().markLoaded();
        
        this.classList.add("finished");
        setTimeout(() => this.remove(), 1000);
    }
}
