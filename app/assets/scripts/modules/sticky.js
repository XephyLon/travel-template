function stickyNavbar(element, addedElem) {
  let elem = document.querySelector(element);
  let offset = elem.offsetTop;
  if (window.pageYOffset >= offset + 1) {
    elem.classList.add(addedElem);
  } else {
    elem.classList.remove(addedElem);
  }
}

module.exports = stickyNavbar;
