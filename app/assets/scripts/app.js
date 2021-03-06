import SmoothScroll from 'smoothscroll-polyfill';
import AOS from 'aos';
import StickyNavbar from './modules/sticky';
import NavBurger from './modules/navburger';
import Modal from './modules/modal';

SmoothScroll.polyfill();

let burgerIcon = new NavBurger();

AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false
});


window.onscroll = () => {
  new StickyNavbar('.site-header', 'primary-nav--sticky');
  new StickyNavbar('.site-header__logo', 'site-header__logo--sticky');
};

Modal();


// TODO: DEPLOY.
