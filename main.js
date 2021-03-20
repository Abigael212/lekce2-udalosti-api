/*
Úkol na lekci: Vytvoř odstavec s textem “V elipse spí lev.”, 
který bude mít nastaveno style="font-size: 16px;", 
a tlačítko s nápisem “červený po kliknutí”. 
Další požadavky na prvky stránky budou:
Úkol na lekci: Písmo v odstavci po najetí myši ztuční.
*/
let odstavec = document.querySelector(".odstavec");
function ztucni(udalost) {
    udalost.target.style.fontWeight = "bold";
};

function odtucni() {
    odstavec.style.fontWeight = "normal";
};
/* skúsila som aj odtučni() prepracovať na event verziu, ale nefungovalo to... prečo?
na mousein mi to stuční, na mouseout mi to ale nevrátilo do normálu
v .html som mala: onmouseout="odtucni(event)"
v .js odtucni() som mala: udalost.target.style.fontWeight = "normal";
*/


/* 
Domácí úkol 1: Tlačítko “červené po kliknutí”
- bude odstavci přidávat/odebírat třídu, která bude barvu písma v odstavci měnit na červenou.
*/
function makeRed() {
    odstavec.classList.toggle("makeRed");
};

/*
Domácí úkol 2: přidej tlačítko “větší po kliknutí”, 
- které písmo (asi v odstavci) zvětší o jeden pixel oproti jeho aktuální velikost.
*/
function makeBigger() {
    let currentFontSize = parseInt(window.getComputedStyle(odstavec).getPropertyValue('font-size'));
    currentFontSize++;
    odstavec.style.fontSize = currentFontSize.toString() + "px";
};

/*
Domácí úkol 3: Dopracuj ovládání audio souboru
- nastavení zvuku na 0, 0.5 a 1
- vrácení se na začátek
*/

/**
 * prehrá predaný audio prvok
 * @param {string} elementSelector 
 */
function prehraj(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
};

/**
 * zastaví prehrávanie predaného audio prvku
 * @param {string} elementSelector 
 */
function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
};

/**
 * nastaví volume predaného audio prvku
 * @param {string} elementSelector 
 * @param {number} volume 
 */
function setVolume(elementSelector, volume) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = volume;
};

/**
 * fcia, ktorá vráti predaný audio prvok na začiatok
 * @param {string} elementSelector 
 */
function vrat(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.currentTime = 0;
};

