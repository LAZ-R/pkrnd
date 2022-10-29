import * as LAZR from '../../../lazR/lazR.js';
import { renderTypeImage } from '../../../components/typeImage/typeImage.component.js';
import { TYPES } from '../../../enums/types.enum.js';

export const renderPage = () => {

    LAZR.DOM.setHTMLTitle('Tableau des types');

    const gray80Filter = LAZR.CSS.getFilterStringForHexValue(LAZR.CSS.getCssRootVariableValue('--gray-80'));

    const page = LAZR.DOM.createElement('div', 'aboutPage', 'page', `
    <h1 style="margin-left: var(--horizontal-padding)">Tableau des types</h1>
    <p style="margin-left: var(--horizontal-padding)">Tableau de multiplicateur des dégâts en fonction du type</p>
    <div class="table-container">
        <div class="table-row"><!-- line 0 - defense legend -->
            <div class="table-cell origin-cell"><span>DEF</span><span>ATK</span></div>
            <div class="table-cell">${renderTypeImage(TYPES.NOR)}</div>
            <div class="table-cell">${renderTypeImage(TYPES.FEU)}</div>
            <div class="table-cell">${renderTypeImage(TYPES.EAU)}</div>
            <div class="table-cell">${renderTypeImage(TYPES.PLA)}</div>
            <div class="table-cell">${renderTypeImage(TYPES.ELE)}</div>
            <div class="table-cell">${renderTypeImage(TYPES.GLA)}</div>
            <div class="table-cell">${renderTypeImage(TYPES.COM)}</div>
            <div class="table-cell">${renderTypeImage(TYPES.PSN)}</div>
            <div class="table-cell">${renderTypeImage(TYPES.SOL)}</div>
            <div class="table-cell">${renderTypeImage(TYPES.VOL)}</div>
            <div class="table-cell">${renderTypeImage(TYPES.PSY)}</div>
            <div class="table-cell">${renderTypeImage(TYPES.INS)}</div>
            <div class="table-cell">${renderTypeImage(TYPES.ROC)}</div>
            <div class="table-cell">${renderTypeImage(TYPES.SPE)}</div>
            <div class="table-cell">${renderTypeImage(TYPES.DRA)}</div>
        </div>
        <div class="table-row"><!-- line 1 - Normal attack -->
            <div class="table-cell">${renderTypeImage(TYPES.NOR)}</div> <!-- Type icon -->
            <div class="table-cell">1</div> <!-- vs no -->
            <div class="table-cell">1</div> <!-- vs fe -->
            <div class="table-cell">1</div> <!-- vs ea -->
            <div class="table-cell">1</div> <!-- vs pl -->
            <div class="table-cell">1</div> <!-- vs el -->
            <div class="table-cell">1</div> <!-- vs gl -->
            <div class="table-cell">1</div> <!-- vs co -->
            <div class="table-cell">1</div> <!-- vs po -->
            <div class="table-cell">1</div> <!-- vs so -->
            <div class="table-cell">1</div> <!-- vs vo -->
            <div class="table-cell">1</div> <!-- vs ps -->
            <div class="table-cell">1</div> <!-- vs in -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs ro -->
            <div class="table-cell uneffective">0</div> <!-- vs sp -->
            <div class="table-cell">1</div> <!-- vs dr -->
        </div>
        <div class="table-row"><!-- line 2 - Feu attack -->
            <div class="table-cell">${renderTypeImage(TYPES.FEU)}</div> <!-- Type icon -->
            <div class="table-cell">1</div> <!-- vs no -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs fe -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs ea -->
            <div class="table-cell very-effective">2</div> <!-- vs pl -->
            <div class="table-cell">1</div> <!-- vs el -->
            <div class="table-cell very-effective">2</div> <!-- vs gl -->
            <div class="table-cell">1</div> <!-- vs co -->
            <div class="table-cell">1</div> <!-- vs po -->
            <div class="table-cell">1</div> <!-- vs so -->
            <div class="table-cell">1</div> <!-- vs vo -->
            <div class="table-cell">1</div> <!-- vs ps -->
            <div class="table-cell very-effective">2</div> <!-- vs in -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs ro -->
            <div class="table-cell">1</div> <!-- vs sp -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs dr -->
        </div>
        <div class="table-row"><!-- line 3 - Eau attack -->
            <div class="table-cell">${renderTypeImage(TYPES.EAU)}</div> <!-- Type icon -->
            <div class="table-cell">1</div> <!-- vs no -->
            <div class="table-cell very-effective">2</div> <!-- vs fe -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs ea -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs pl -->
            <div class="table-cell">1</div> <!-- vs el -->
            <div class="table-cell">1</div> <!-- vs gl -->
            <div class="table-cell">1</div> <!-- vs co -->
            <div class="table-cell">1</div> <!-- vs po -->
            <div class="table-cell very-effective">2</div> <!-- vs so -->
            <div class="table-cell">1</div> <!-- vs vo -->
            <div class="table-cell">1</div> <!-- vs ps -->
            <div class="table-cell">1</div> <!-- vs in -->
            <div class="table-cell very-effective">2</div> <!-- vs ro -->
            <div class="table-cell">1</div> <!-- vs sp -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs dr -->
        </div>
        <div class="table-row"><!-- line 4 - Plante attack -->
            <div class="table-cell">${renderTypeImage(TYPES.PLA)}</div> <!-- Type icon -->
            <div class="table-cell">1</div> <!-- vs no -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs fe -->
            <div class="table-cell very-effective">2</div> <!-- vs ea -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs pl -->
            <div class="table-cell">1</div> <!-- vs el -->
            <div class="table-cell">1</div> <!-- vs gl -->
            <div class="table-cell">1</div> <!-- vs co -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs po -->
            <div class="table-cell very-effective">2</div> <!-- vs so -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs vo -->
            <div class="table-cell">1</div> <!-- vs ps -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs in -->
            <div class="table-cell very-effective">2</div> <!-- vs ro -->
            <div class="table-cell">1</div> <!-- vs sp -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs dr -->
        </div>
        <div class="table-row"><!-- line 5 - Electrik attack -->
            <div class="table-cell">${renderTypeImage(TYPES.ELE)}</div> <!-- Type icon -->
            <div class="table-cell">1</div> <!-- vs no -->
            <div class="table-cell">1</div> <!-- vs fe -->
            <div class="table-cell very-effective">2</div> <!-- vs ea -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs pl -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs el -->
            <div class="table-cell">1</div> <!-- vs gl -->
            <div class="table-cell">1</div> <!-- vs co -->
            <div class="table-cell">1</div> <!-- vs po -->
            <div class="table-cell uneffective">0</div> <!-- vs so -->
            <div class="table-cell very-effective">2</div> <!-- vs vo -->
            <div class="table-cell">1</div> <!-- vs ps -->
            <div class="table-cell">1</div> <!-- vs in -->
            <div class="table-cell">1</div> <!-- vs ro -->
            <div class="table-cell">1</div> <!-- vs sp -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs dr -->
        </div>
        <div class="table-row"><!-- line 6 - Glace attack -->
            <div class="table-cell">${renderTypeImage(TYPES.GLA)}</div> <!-- Type icon -->
            <div class="table-cell">1</div> <!-- vs no -->
            <div class="table-cell">1</div> <!-- vs fe -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs ea -->
            <div class="table-cell very-effective">2</div> <!-- vs pl -->
            <div class="table-cell">1</div> <!-- vs el -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs gl -->
            <div class="table-cell">1</div> <!-- vs co -->
            <div class="table-cell">1</div> <!-- vs po -->
            <div class="table-cell very-effective">2</div> <!-- vs so -->
            <div class="table-cell very-effective">2</div> <!-- vs vo -->
            <div class="table-cell">1</div> <!-- vs ps -->
            <div class="table-cell">1</div> <!-- vs in -->
            <div class="table-cell">1</div> <!-- vs ro -->
            <div class="table-cell">1</div> <!-- vs sp -->
            <div class="table-cell very-effective">2</div> <!-- vs dr -->
        </div>
        <div class="table-row"><!-- line 7 - Combat attack -->
            <div class="table-cell">${renderTypeImage(TYPES.COM)}</div> <!-- Type icon -->
            <div class="table-cell very-effective">2</div> <!-- vs no -->
            <div class="table-cell">1</div> <!-- vs fe -->
            <div class="table-cell">1</div> <!-- vs ea -->
            <div class="table-cell">1</div> <!-- vs pl -->
            <div class="table-cell">1</div> <!-- vs el -->
            <div class="table-cell very-effective">2</div> <!-- vs gl -->
            <div class="table-cell">1</div> <!-- vs co -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs po -->
            <div class="table-cell">1</div> <!-- vs so -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs vo -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs ps -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs in -->
            <div class="table-cell very-effective">2</div> <!-- vs ro -->
            <div class="table-cell uneffective">0</div> <!-- vs sp -->
            <div class="table-cell">1</div> <!-- vs dr -->
        </div>
        <div class="table-row"><!-- line 8 - Poison attack -->
            <div class="table-cell">${renderTypeImage(TYPES.PSN)}</div> <!-- Type icon -->
            <div class="table-cell">1</div> <!-- vs no -->
            <div class="table-cell">1</div> <!-- vs fe -->
            <div class="table-cell">1</div> <!-- vs ea -->
            <div class="table-cell very-effective">2</div> <!-- vs pl -->
            <div class="table-cell">1</div> <!-- vs el -->
            <div class="table-cell">1</div> <!-- vs gl -->
            <div class="table-cell">1</div> <!-- vs co -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs po -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs so -->
            <div class="table-cell">1</div> <!-- vs vo -->
            <div class="table-cell">1</div> <!-- vs ps -->
            <div class="table-cell very-effective">2</div> <!-- vs in -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs ro -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs sp -->
            <div class="table-cell">1</div> <!-- vs dr -->
        </div>
        <div class="table-row"><!-- line 9 - Sol attack -->
            <div class="table-cell">${renderTypeImage(TYPES.SOL)}</div> <!-- Type icon -->
            <div class="table-cell">1</div> <!-- vs no -->
            <div class="table-cell very-effective">2</div> <!-- vs fe -->
            <div class="table-cell">1</div> <!-- vs ea -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs pl -->
            <div class="table-cell very-effective">2</div> <!-- vs el -->
            <div class="table-cell">1</div> <!-- vs gl -->
            <div class="table-cell">1</div> <!-- vs co -->
            <div class="table-cell very-effective">2</div> <!-- vs po -->
            <div class="table-cell">1</div> <!-- vs so -->
            <div class="table-cell uneffective">0</div> <!-- vs vo -->
            <div class="table-cell">1</div> <!-- vs ps -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs in -->
            <div class="table-cell very-effective">2</div> <!-- vs ro -->
            <div class="table-cell">1</div> <!-- vs sp -->
            <div class="table-cell">1</div> <!-- vs dr -->
        </div>
        <div class="table-row"><!-- line 10 - Vol attack -->
            <div class="table-cell">${renderTypeImage(TYPES.VOL)}</div> <!-- Type icon -->
            <div class="table-cell">1</div> <!-- vs no -->
            <div class="table-cell">1</div> <!-- vs fe -->
            <div class="table-cell">1</div> <!-- vs ea -->
            <div class="table-cell very-effective">2</div> <!-- vs pl -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs el -->
            <div class="table-cell">1</div> <!-- vs gl -->
            <div class="table-cell very-effective">2</div> <!-- vs co -->
            <div class="table-cell">1</div> <!-- vs po -->
            <div class="table-cell">1</div> <!-- vs so -->
            <div class="table-cell">1</div> <!-- vs vo -->
            <div class="table-cell">1</div> <!-- vs ps -->
            <div class="table-cell very-effective">2</div> <!-- vs in -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs ro -->
            <div class="table-cell">1</div> <!-- vs sp -->
            <div class="table-cell">1</div> <!-- vs dr -->
        </div>
        <div class="table-row"><!-- line 11 - Psy attack -->
            <div class="table-cell">${renderTypeImage(TYPES.PSY)}</div> <!-- Type icon -->
            <div class="table-cell">1</div> <!-- vs no -->
            <div class="table-cell">1</div> <!-- vs fe -->
            <div class="table-cell">1</div> <!-- vs ea -->
            <div class="table-cell">1</div> <!-- vs pl -->
            <div class="table-cell">1</div> <!-- vs el -->
            <div class="table-cell">1</div> <!-- vs gl -->
            <div class="table-cell very-effective">2</div> <!-- vs co -->
            <div class="table-cell very-effective">2</div> <!-- vs po -->
            <div class="table-cell">1</div> <!-- vs so -->
            <div class="table-cell">1</div> <!-- vs vo -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs ps -->
            <div class="table-cell">1</div> <!-- vs in -->
            <div class="table-cell">1</div> <!-- vs ro -->
            <div class="table-cell">1</div> <!-- vs sp -->
            <div class="table-cell">1</div> <!-- vs dr -->
        </div>
        <div class="table-row"><!-- line 12 - Insecte attack -->
            <div class="table-cell">${renderTypeImage(TYPES.INS)}</div> <!-- Type icon -->
            <div class="table-cell">1</div> <!-- vs no -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs fe -->
            <div class="table-cell">1</div> <!-- vs ea -->
            <div class="table-cell very-effective">2</div> <!-- vs pl -->
            <div class="table-cell">1</div> <!-- vs el -->
            <div class="table-cell">1</div> <!-- vs gl -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs co -->
            <div class="table-cell very-effective">2</div> <!-- vs po -->
            <div class="table-cell">1</div> <!-- vs so -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs vo -->
            <div class="table-cell very-effective">2</div> <!-- vs ps -->
            <div class="table-cell">1</div> <!-- vs in -->
            <div class="table-cell">1</div> <!-- vs ro -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs sp -->
            <div class="table-cell">1</div> <!-- vs dr -->
        </div>
        <div class="table-row"><!-- line 13 - Roche attack -->
            <div class="table-cell">${renderTypeImage(TYPES.ROC)}</div> <!-- Type icon -->
            <div class="table-cell">1</div> <!-- vs no -->
            <div class="table-cell very-effective">2</div> <!-- vs fe -->
            <div class="table-cell">1</div> <!-- vs ea -->
            <div class="table-cell">1</div> <!-- vs pl -->
            <div class="table-cell">1</div> <!-- vs el -->
            <div class="table-cell very-effective">2</div> <!-- vs gl -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs co -->
            <div class="table-cell">1</div> <!-- vs po -->
            <div class="table-cell not-very-effective">0.5</div> <!-- vs so -->
            <div class="table-cell very-effective">2</div> <!-- vs vo -->
            <div class="table-cell">1</div> <!-- vs ps -->
            <div class="table-cell very-effective">2</div> <!-- vs in -->
            <div class="table-cell">1</div> <!-- vs ro -->
            <div class="table-cell">1</div> <!-- vs sp -->
            <div class="table-cell">1</div> <!-- vs dr -->
        </div>
        <div class="table-row"><!-- line 14 - Spectre attack -->
            <div class="table-cell">${renderTypeImage(TYPES.SPE)}</div> <!-- Type icon -->
            <div class="table-cell uneffective">0</div> <!-- vs no -->
            <div class="table-cell">1</div> <!-- vs fe -->
            <div class="table-cell">1</div> <!-- vs ea -->
            <div class="table-cell">1</div> <!-- vs pl -->
            <div class="table-cell">1</div> <!-- vs el -->
            <div class="table-cell">1</div> <!-- vs gl -->
            <div class="table-cell">1</div> <!-- vs co -->
            <div class="table-cell">1</div> <!-- vs po -->
            <div class="table-cell">1</div> <!-- vs so -->
            <div class="table-cell">1</div> <!-- vs vo -->
            <div class="table-cell uneffective">0</div> <!-- vs ps -->
            <div class="table-cell">1</div> <!-- vs in -->
            <div class="table-cell">1</div> <!-- vs ro -->
            <div class="table-cell very-effective">2</div> <!-- vs sp -->
            <div class="table-cell">1</div> <!-- vs dr -->
        </div>
        <div class="table-row"><!-- line 15 - Dragon attack -->
            <div class="table-cell">${renderTypeImage(TYPES.DRA)}</div> <!-- Type icon -->
            <div class="table-cell">1</div> <!-- vs no -->
            <div class="table-cell">1</div> <!-- vs fe -->
            <div class="table-cell">1</div> <!-- vs ea -->
            <div class="table-cell">1</div> <!-- vs pl -->
            <div class="table-cell">1</div> <!-- vs el -->
            <div class="table-cell">1</div> <!-- vs gl -->
            <div class="table-cell">1</div> <!-- vs co -->
            <div class="table-cell">1</div> <!-- vs po -->
            <div class="table-cell">1</div> <!-- vs so -->
            <div class="table-cell">1</div> <!-- vs vo -->
            <div class="table-cell">1</div> <!-- vs ps -->
            <div class="table-cell">1</div> <!-- vs in -->
            <div class="table-cell">1</div> <!-- vs ro -->
            <div class="table-cell">1</div> <!-- vs sp -->
            <div class="table-cell very-effective">2</div> <!-- vs dr -->
        </div>
    </div>
    `);
    
    

    return page;
}