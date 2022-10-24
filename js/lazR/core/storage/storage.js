const STORAGE = localStorage;
const appShortName = 'pkrnd';

if (STORAGE.getItem(`${appShortName}FirstTime`) === null) {
    STORAGE.setItem(`${appShortName}FirstTime`, '0');
    let userTMP = {
        isDev: false,
        settings: [
            {
                id: 1,
                name: '',
                settings: [
                    {
                        id: 'keepScreenAwake',
                        name: `Laisser l'écran allumé lorsque l'application est en route`,
                        isActive: true
                    },
                    {
                        id: 'enableMusic',
                        name: `Musique`,
                        isActive: true
                    }
                ]
            },
            {
                id: 2,
                name: 'Advanced',
                settings: [
                    {
                        id: 'jsonWizard',
                        name: 'Enable JSON Wizard',
                        isActive: false
                    }
                ]
            }
        ]
    };
    STORAGE.setItem(`${appShortName}User`, JSON.stringify(userTMP));
}
/* ------------------------------------------------------------------------- */
export const getUser = () => {
    return JSON.parse(STORAGE.getItem(`${appShortName}User`));
}
export const setUser = (user) => {
    STORAGE.setItem(`${appShortName}User`, JSON.stringify(user));
}
export const isUserDev = () => {
    const user = getUser();
    return user.isDev;
}
/* ------------------------------------------------------------------------- */
export const getUserSetting = (id) => {
    let settingToReturn = '';
    const user = getUser();
    const settings = user.settings;
    settings.forEach(settingsGroups => {
        settingsGroups.settings.forEach(setting => {
            if (setting.id == id) {
                settingToReturn = setting;
            }
        });
    });
    return settingToReturn;
}