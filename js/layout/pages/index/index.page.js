import * as LAZR from '../../../lazR/lazR.js';

export const renderPage = () => {

    const mainTheme = new Audio('./medias/music/main-theme.ogg');
    mainTheme.play();

    /* --------------------------------------------------------------------- */
    const pageTitle = LAZR.APP_DATA.getAppName();
    LAZR.DOM.setHTMLTitle(pageTitle);

    const page = LAZR.DOM.createElement('div', 'indexPage', 'page', `
        <h1>${pageTitle}</h1>`);

    /* --------------------------------------------------------------------- */
    
    return page;
}
