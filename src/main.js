import WidgetCardService from "./components/widget-card-service";
import WidgetLogoDesign from "./components/widget-logo-design.js";
import WidgetContact from "./components/widget-contact.js";
import WidgetTelegramMessage from "./components/widget-telegram-message.js";
import WidgetFooterNavigation from "./components/widget-footer-navigation.js";
import WidgetFooter from "./components/widget-footer.js";
import WidgetHeader from "./components/widget-header.js";
import WidgetInfoBlock from "./components/widget-info-block.js";
import WidgetAdvantages from "./components/widget-advantages.js";
import WidgetAdvantagesItem from "./components/widget-advantages-item.js";
import WidgetList from "./components/widget-list.js";
import WidgetCardProduct from "./components/widget-card-product.js";
import WidgetCardTag from "./components/widget-card-tag.js";
import WidgetCardIcons from "./components/widget-card-icons.js";
import WidgetCardTags from "./components/widget-card-tags.js";
import WidgetCardTabs from "./components/widget-card-tabs.js";
import WidgetGallery from "./components/widget-gallery.js";
import WidgetGalleryItem from "./components/widget-gallery-item.js";
import WidgetLoader from "./components/widget-loader.js";
import WidgetLogo from "./components/widget-logo.js";
import LoadingController from "./loading-controller.js";
import WidgetTagInfo from "./components/widget-tag-info.js";
import WidgetListTagInfo from "./components/widget-list-tag-info.js";
import DialogCooperate from "./components/dialog-cooperate.js";

customElements.define("widget-advantages", WidgetAdvantages);
customElements.define("widget-advantages-item", WidgetAdvantagesItem);

customElements.define('widget-card-service', WidgetCardService);
customElements.define('widget-logo-design', WidgetLogoDesign);
customElements.define('widget-contact', WidgetContact);
customElements.define("widget-telegram-message", WidgetTelegramMessage);
customElements.define("widget-footer-navigation", WidgetFooterNavigation);
customElements.define("widget-footer", WidgetFooter);
customElements.define("widget-header", WidgetHeader);
customElements.define("widget-info-block", WidgetInfoBlock);
customElements.define("widget-list", WidgetList);
customElements.define("widget-card-product", WidgetCardProduct);
customElements.define("widget-card-tag", WidgetCardTag);
customElements.define("widget-card-tags", WidgetCardTags);
customElements.define("widget-card-icons", WidgetCardIcons);
customElements.define("widget-card-tabs", WidgetCardTabs);

customElements.define("widget-gallery", WidgetGallery);
customElements.define("widget-gallery-item", WidgetGalleryItem);
customElements.define("widget-loader", WidgetLoader);
customElements.define("widget-logo", WidgetLogo);
customElements.define("widget-tag-info", WidgetTagInfo);
customElements.define("widget-list-tag-info", WidgetListTagInfo);
customElements.define("dialog-cooperate", DialogCooperate);

const dialog = document.createElement("dialog-cooperate")
document.body.append(dialog);
dialog.addEventListener("submit", () => {
    console.log('+++')
})

const loadingController = new LoadingController();

if (loadingController.shouldLoad())
    document.body.append(document.createElement("widget-loader"))