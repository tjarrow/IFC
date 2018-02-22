$(document).ready(function () {
    $('.menu_btn').click(function () {
        $('.panel_box').toggleClass('active');
        $(this).toggleClass('active');
    })
})