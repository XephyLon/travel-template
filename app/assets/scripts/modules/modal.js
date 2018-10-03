function Modal() {
    let button = document.querySelectorAll('.btn');
    let modal = document.querySelector('.modal');
    let close = document.querySelector('.modal__close');

    for (var i = 0; i < button.length; i++) {
        button[i].onclick = () => {
            modal.style.opacity = 1;
            modal.style.zIndex = 11;
        };
    }

    close.onclick = () => {
        modal.style.opacity = 0;
        modal.style.zIndex = -10;
    }

    window.onclick = (event) => {
        if(event.target == modal) {
            modal.style.opacity = 0;
            modal.style.zIndex = -10;
        }
    }
}

export default Modal