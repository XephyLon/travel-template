//TODO: REWRITE AS AN ES6 CLASS.

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

// function StickyNavbar(element, addedElem) {
//   let elem = document.querySelector(element);
//   let offset = elem.offsetTop;
//   if (window.pageYOffset >= offset + 1) {
//     elem.classList.add(addedElem);
//   } else {
//     elem.classList.remove(addedElem);
//   }
// }

export default StickyNavbar;
