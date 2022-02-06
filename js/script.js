import SmoothScroll from './modules/smoothScroll.js';
import Accordion from './modules/accordionAnimate.js';
import TabNav from './modules/tabNavigator.js';
import Modal from './modules/modal.js';

import initAnimationScroll from './modules/animationOnScroll.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdownMenu.js';
import initMenuMobile from './modules/menuMobile.js';
import initHours from './modules/hours.js';
import initFetchAnimais from './modules/fetchAnimais.js';
import initFetchBitcoin from './modules/fetchBitcoin.js';

const smoothScroll = new SmoothScroll('[data-anime="menu"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

initAnimationScroll();
initTooltip();
initDropdownMenu();
initMenuMobile();
initHours();
initFetchAnimais();
initFetchBitcoin();
