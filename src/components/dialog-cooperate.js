import CloseCooperateDialog from "../commands/close-cooperate-dialog.js";

const template = document.createElement("template");

template.innerHTML = `
  <dialog id="dialog">
    <button type="button" class="dialog-close-button" aria-label="Закрыть">
      <img src="/assets/img/icon/close.svg" alt="Закрыть"/>
    </button>
    
    <div class = "padding-b-40">
      <h3 class="text-lg text-bold text-uppercase color-light text-center">сотрудничество</h3>
      <p class="text-md color-light text-center">
        Пожалуйста, заполните простую форму, специалист перезвонит вам в рабочее время
      </p>
    </div>

    <form method="dialog" class="flex-column gap-40 align-center text-center">
      <div class="flex-column gap-10">
        <label for="phone" class="text-center text-md color-light text-bold">Номер для связи:</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          class="text-lg text-center"
          required
          minlength="8"
          maxlength="15"
          placeholder="+7 (000) 000-00-00"
        />
      </div>

      <button type="submit" class="button-submit button button-style-primary text-bold button-size-lg flex-grow">
        Подтвердить
      </button>

      <p class="text-md text-bold color-light">
        Отправляя форму, вы соглашаетесь с условиями
        <a href="#" class="color-primary text-underline">Пользовательского соглашения</a>
        и обработкой персональных данных
      </p>

      <img src="/assets/img/logo-full.svg" alt="Логотип" class="dialog-logo"/>
    </form>
  </dialog>
`;

export default class DialogCooperate extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setupEvents();
    }
    
    render() {
        this.appendChild(template.content.cloneNode(true));
    }
    
    setupEvents() {
        const dialog = this.querySelector("#dialog");
        const closeButton = this.querySelector(".dialog-close-button");
        
        // Закрытие при клике на фон
        dialog.addEventListener("mousedown", (event) => {
            if (event.target === dialog) {
                dialog.close();
            }
        });
        
        // Закрытие при клике на кнопку
        closeButton.addEventListener("click", () => {
            new CloseCooperateDialog().execute();
        });
    }
}
