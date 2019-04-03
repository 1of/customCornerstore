import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import maintenanceMode from './global/maintenanceMode';
import carousel from './common/carousel';
import 'lazysizes';
import loadingProgressBar from './global/loading-progress-bar';
import svgInjector from './global/svg-injector';
import footerAccordion from './global/footerAccordion';
import urlUtils from './common/url-utils';
import Url from 'url';

export default class Global extends PageManager {
    onReady() {
        // Only load visible elements until the onload event fires,
        // after which preload nearby elements.
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 1;

        cartPreview(this.context.secureBaseUrl, this.context.cartId);
        quickSearch();
        currencySelector();
        foundation($(document));
        quickView(this.context);
        carousel();
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        maintenanceMode(this.context.maintenanceMode);
        loadingProgressBar();
        svgInjector();
        footerAccordion();
        console.log(urlUtils);
        console.log(Url.parce());
        $('.add-to-cart-btn').on('click', (event) => {

           // window.location.href = "http://localhost:3004/checkout.php";
          //event.preventDefault();
          console.log(urlUtils);
          console.log(urlUtils.getUrl());
         // urlUtils.goToUrl('cart.php');
          //urlUtils.goToUrl();

        });
    }
}
