let selector, elems, makeActive

selector = '.sidebar-nav li'

elems = document.querySelectorAll(selector)

makeActive = function () {

    for (let i = 0; i < elems.length; i++) {

        elems[i].classList.remove('active')

    }

    this.classList.add('active')

}

for (let i = 0; i < elems.length; i++) {

    elems[i].addEventListener('mousedown', makeActive)

}
