/* Breakpoints */
const BREAKPOINTS = {
    PHONE_MAX_WIDTH: 767,
    TABLET_MAX_WIDTH: 1279,
    LAPTOP_MAX_WIDTH: 1919
}
export const isPhone = window.innerWidth <= BREAKPOINTS.PHONE_MAX_WIDTH
export const isTablet = window.innerWidth > BREAKPOINTS.PHONE_MAX_WIDTH && window.innerWidth <= BREAKPOINTS.TABLET_MAX_WIDTH
export const isTabletOrUp = window.innerWidth > BREAKPOINTS.PHONE_MAX_WIDTH
export const isLaptop = window.innerWidth > BREAKPOINTS.TABLET_MAX_WIDTH && window.innerWidth <= BREAKPOINTS.LAPTOP_MAX_WIDTH
export const isLaptopOrUp = window.innerWidth > BREAKPOINTS.TABLET_MAX_WIDTH
export const isDesktop = window.innerWidth > BREAKPOINTS.LAPTOP_MAX_WIDTH

export const setViewportSize = () => {
    const setDocumentHeight = () => {
        document.documentElement.style.setProperty('--doc-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', setDocumentHeight);
    setDocumentHeight();
}

export const setHTMLTitle = (pageTitle) => {
    const title = document.getElementById('title');
    title.innerHTML = pageTitle;

    const appleTitle = document.getElementById('appleTitle');
    appleTitle.setAttribute('content', pageTitle);
}

export const getElementFromHTMLString = (htmlString) => {
    var template = document.createElement('template');
    htmlString = htmlString.trim();
    template.innerHTML = htmlString;
    return template.content.firstChild;
  }
  
export const createElement = (element, id, className, innerHtml) => {
    return getElementFromHTMLString(`<${element} id="${id}" class="${className}">${innerHtml}</${element}>`)
}

export const createImgElement = (id, className, src, alt) => {
    return getElementFromHTMLString(`<img id="${id}" class="${className}" src="${src}" alt="${alt}">`)
}

/**
 * 
 * @param {HTMLElement} htmlelement 
 * @param {Integer} sensitivity 
 * @param {Function} functionForLeftSwipe 
 * @param {Function} functionForRightSwipe 
 */
 export const handleSwipe = (htmlelement, sensitivity, onLeftSwipeFunction, onRightSwipeFunction) => {
    let touchstartX = 0; 
    let touchendX = 0; 
  
    let finalSensitivity = sensitivity ? sensitivity : 111;
    
    // Ajout des Event Listener pour capter le mouvement
    
    // position au d??but du mouvement
    htmlelement.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    })
    
    // position ?? la fin du mouvement
    htmlelement.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        let difference = touchstartX - touchendX;
        // traitement si swipe gauche
        if (difference > finalSensitivity) { onLeftSwipeFunction.apply() }
        // traitement si swipe droite
        if (difference < -finalSensitivity) { onRightSwipeFunction.apply(); }
    });
  };