import SmoothScroll from './modules/smoothScroll.js';
import initAnimationScroll from './modules/animationOnScroll.js';
import initAccordion from './modules/accordionAnimate.js';
import initTabNav from './modules/tabNavigator.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdownMenu.js';
import initMenuMobile from './modules/menuMobile.js';
import initHours from './modules/hours.js';
import initFetchAnimais from './modules/fetchAnimais.js';
import initFetchBitcoin from './modules/fetchBitcoin.js';

const smoothScroll = new SmoothScroll('[data-anime="menu"] a[href^="#"]');
smoothScroll.init();

initAnimationScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initHours();
initFetchAnimais();
initFetchBitcoin();
