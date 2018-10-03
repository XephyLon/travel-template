
class StickyNavbar {
  constructor(element, addedElem) {
    this.elem = document.querySelector(element)
    this.addedElement = addedElem
    this.offset = this.elem.offsetTop
    this.stick()
  }

  stick() {
    if (window.pageYOffset >= this.offset + 1) {
      this.elem.classList.add(this.addedElement)
    } else {
      this.elem.classList.remove(this.addedElement)
    }
  }
}

export default StickyNavbar;
