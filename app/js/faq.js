const btn = document.querySelectorAll('.faq__item');
btn.forEach((item) => {
    item.addEventListener('click', function () {
        this.classList.toggle('faq__item--active');
    });
});
