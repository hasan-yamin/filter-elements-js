let btns = document.querySelectorAll('#myBtnContainer button')

btns.forEach((btn) => {
  btn.addEventListener('click', function () {
    // remove class active fromm last active
    var current = document.getElementsByClassName('active')
    current[0].classList.remove('active')

    // get all elements will be filtered
    let allElm = document.querySelectorAll('.container .filterDiv')

    // check type of sellected btn
    if (btn.getAttribute('data-tp')==='all') {
      // add show class to all elements
      allElm.forEach((elm) => {
        elm.classList.add('show')
      })
    } else {
      // show class will be added to current type of filter
      allElm.forEach((elm) => {
        if (elm.classList.contains(btn.getAttribute('data-tp'))) {
          elm.classList.add('show')
        } else {
          elm.classList.remove('show')
        }
      })
    }
    // add class active to current btn
    btn.classList.add('active')
  })
})
