import stickyNavbar from './modules/sticky';
import AOS from 'aos';
import navburger from './modules/navburger';

navburger();

AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false // if true, will add content of `data-aos` as classes on scroll
});


window.onscroll = () => {
  stickyNavbar('.site-header', 'primary-nav--sticky');
  stickyNavbar('.site-header__logo', 'site-header__logo--sticky');
};
