function stickyNavbar(element) {
  let elem = document.querySelector(element);
  let offset = elem.offsetTop;
  if (window.pageYOffset >= offset) {
    elem.classlist.add('primary-nav--sticky');
  } else {
    elem.classlist.remove('primary-nav--sticky');
  }
}

module.exports = stickyNavbar;
