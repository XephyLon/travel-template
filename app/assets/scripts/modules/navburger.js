  //TODO: REWRITE AS A CLASS

  class NavBurger {
    constructor() {
      this.icon = document.querySelector('.site-header__menu-icon')
      this.content = document.querySelector('.site-header__menu-content')
      this.events()
    }

    events() {
      this.icon.addEventListener('click', this.toggleMenu.bind(this))
    }

    toggleMenu() {
      this.icon.classList.toggle('is-active')
      this.content.classList.toggle('site-header__menu-content--is-visible')
    }
  }