import { TYPES } from "../../enums/types.enum.js";

export const renderTypeImage = (type) => {
    if (type == '') return '';
    let imagePath = `./medias/images/types/${type}.svg`;
    return `
    <div class="type-image" style="background-color: var(--TYPE-${type})">
        <img src="${imagePath}" class="type-icon" />
    </div>`
}