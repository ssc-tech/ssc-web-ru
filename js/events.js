$('.menu-btn').on('click', function (menuBtnClick) {
    menuBtnClick.preventDefault();
    $(this).toggleClass('menu-btn-open');
    $('.menu-block').toggleClass('menu-block-open');
});