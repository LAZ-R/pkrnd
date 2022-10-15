import * as LAZR from '../../lazR/lazR.js';
import * as BURGER_MENU from './burgerMenu/burgerMenu.component.js';

export const renderView = () => {
    const header = document.getElementById('header');

    const headerIndexLink = LAZR.DOM.createElement('a', '', 'header-index-link', '');
    headerIndexLink.setAttribute('href', './');

    const headerLogo = LAZR.DOM.createImgElement('headerLogo', 'header-logo', './medias/images/poke_ball_icon_512.png', 'lazr logo');
    
    headerIndexLink.appendChild(headerLogo);
    header.appendChild(headerIndexLink);
    if (LAZR.BREAKPOINTS.isPhone || LAZR.BREAKPOINTS.isTablet) {
        BURGER_MENU.renderView();
    } else {
        header.appendChild(
            LAZR.DOM.createElement('div', 'headerLinksGroup', 'header-links-group', `
                <a href="./" class="header-link">Accueil</a>
            `));
    }
}