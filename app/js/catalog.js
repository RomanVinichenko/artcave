document.querySelectorAll('.catalog__button--choose').forEach(el => {
    el.addEventListener('click', function()  {
        this.classList.toggle('catalog__button--active')
    } )
})



