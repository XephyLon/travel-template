import stickyNavbar from './modules/sticky';
import AOS from 'aos';
import navburger from './modules/navburger';

navburger();

AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false
});


window.onscroll = () => {
  stickyNavbar('.site-header', 'primary-nav--sticky');
  stickyNavbar('.site-header__logo', 'site-header__logo--sticky');
};
