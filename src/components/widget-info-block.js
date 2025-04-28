const template = document.createElement("template");

template.innerHTML = `
  <section class="widget-info-block padding-v-50">
    <p class="text-right text-md text-bold m-b-23 text-color-auto">
      Рекламно-производственная компания Тори-Групп // <span class="color-primary">2025</span>
    </p>
    <h1 class="widget-info-block-title title-lg text-domione m-b-10 text-color-auto"></h1>
    <p class="widget-info-block-text text-lg text-bold text-color-auto"></p>
    <img class="widget-info-block-img" src="#" alt="Информационная иконка" />
  </section>
`;

export default class WidgetInfoBlock extends HTMLElement {
    connectedCallback() {
        this.append(template.content.cloneNode(true));
        this.#renderTitle();
        this.#renderInfo();
    }
    
    get title() {
        return this.getAttribute("title") || "";
    }
    
    get info() {
        return this.getAttribute("info") || "";
    }
    
    get icon() {
        return this.getAttribute("icon") || "";
    }
    
    #renderTitle() {
        const titleElement = this.querySelector(".widget-info-block-title");
        // Заменяет *X* на <span> для выделения
        titleElement.innerHTML = this.title.replace(/\*(.*?)\*/g, '<span class="color-primary">$1</span>');
    }
    
    #renderInfo() {
        const textElement = this.querySelector(".widget-info-block-text");
        const imageElement = this.querySelector(".widget-info-block-img");
        
        if (this.info) {
            textElement.textContent = this.info;
        } else {
            textElement.remove();
        }
        
        if (this.icon) {
            imageElement.src = this.icon;
            imageElement.alt = "Информационная иконка";
            this.#addHoverEffect(imageElement);
        } else {
            imageElement.remove();
        }
    }
    
    #addHoverEffect(element) {
        element.addEventListener("mousemove", (e) => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;
            
            const distance = 10;
            const angle = Math.atan2(dy, dx);
            const offsetX = -Math.cos(angle) * distance;
            const offsetY = -Math.sin(angle) * distance;
            
            element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
        
        element.addEventListener("mouseleave", () => {
            element.style.transform = "translate(0, 0)";
        });
    }
}
