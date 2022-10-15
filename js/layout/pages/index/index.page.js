import * as LAZR from '../../../lazR/lazR.js';

export const renderPage = () => {

    if (LAZR.STORAGE.getUserSetting('enableMusic').isActive) {
        const mainTheme = new Audio('./medias/music/main-theme.ogg');
        mainTheme.play();
        mainTheme.loop = true;
    }

    /* --------------------------------------------------------------------- */
    const pageTitle = LAZR.APP_DATA.getAppName();
    LAZR.DOM.setHTMLTitle(pageTitle);

    const page = LAZR.DOM.createElement('div', 'indexPage', 'page', `
        <h1 style="margin-left: var(--horizontal-padding)">${pageTitle}</h1>`);

    /* --------------------------------------------------------------------- */
    
    return page;
}
