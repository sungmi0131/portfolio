//nav
$('li.main-menu').mouseenter(function () {
    $('ul.sub-menu').stop().slideDown()
    $('header .main-menu').addClass('on')
})

$('li.main-menu').mouseleave(function () {
    $('ul.sub-menu').stop().slideUp()
    $('header .main-menu').removeClass('on')
})


//슬라이드 
setInterval(function () {
    $('.slide-wrap').animate({ 'top': '-100%' }, function () {
        $('.slide:first').appendTo('.slide-wrap')
        $('.slide-wrap').css({ 'top': '0%' })
    })
}, 3000)


//tab

$('.tab-menu li').click(function () {
    $('.tab-menu li').removeClass('on')
    $(this).addClass('on')

    let idx = $(this).index()
    console.log(idx)
    $('.tab-contents .tab').hide()
    $('.tab-contents .tab').eq(idx).show()
})



//popup
$('li.click').click(function () {
    $('.popup').fadeIn()
})
$('a.close').click(function () {
    $('.popup').fadeOut()
})