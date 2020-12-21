//字体慢慢浮现

window.addEventListener('scroll', mySroll, false);
function mySroll() {
    const show = document.querySelectorAll('.show');
    fadeInTwo(show)
    const firstbox = document.querySelector('.first-box');
    veilScroll(firstbox, 'blackOut1');
    fixedScrollTwo(firstbox, 'fixedBanner1', -1, 'box-2');



    const secondbox = document.querySelector('.box-2');
    veilScroll(secondbox, 'blackOut2');
    fixedScrollTwo(secondbox, 'fixedBanner2', -2, 'fixde-2');


    const thirdbox = document.querySelector('.content');
    veilScroll(thirdbox, 'blackOut3');
    fixedScrollTwo(thirdbox, 'img1', -3, 'fixed-3');

}

//最后点击回到顶部
$('#imgtotop').click(function (e) {
    var valOfScroll = $("#one").offset().top;
    $("html,body").animate({
        scrollTop: 0
    }, 600);
})