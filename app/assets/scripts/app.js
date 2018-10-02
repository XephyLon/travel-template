import StickyNavbar from './modules/sticky';
import AOS from 'aos';
import NavBurger from './modules/navburger';

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
