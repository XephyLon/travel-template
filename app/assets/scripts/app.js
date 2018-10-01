const stickyNavbar = require('./modules/sticky');
const AOS = require('aos');

AOS.init();


window.onscroll = () => {
  stickyNavbar('.site-header', 'primary-nav--sticky');
  stickyNavbar('.site-header__logo', 'site-header__logo--sticky');
};
