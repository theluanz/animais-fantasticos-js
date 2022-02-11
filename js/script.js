import SmoothScroll from './modules/smoothScroll.js';
import Accordion from './modules/accordionAnimate.js';
import TabNav from './modules/tabNavigator.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import fetchAnimals from './modules/fetchAnimals.js';
import fetchBitcoin from './modules/fetchBitcoin.js';
import AnimationScroll from './modules/animationScroll.js';
import DropdownMenu from './modules/dropdownMenu.js';
import MenuMobile from './modules/menuMobile.js';
import OpeningHours from './modules/openingHours.js';
import SlideNav from './modules/slideNav.js';

const smoothScroll = new SmoothScroll('[data-anime="menu"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

fetchAnimals('./animaisapi.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

const animationScroll = new AnimationScroll('[data-anime="scroll"]');
animationScroll.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const openingHours = new OpeningHours('[data-wekeend]', '[data-hours]');
openingHours.init();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');
