function navburger() {
  let element = document.querySelector('.site-header__menu-icon');
  element.addEventListener('click', () => {
    element.classList.toggle('is-active');
  });
}

module.exports = navburger;
