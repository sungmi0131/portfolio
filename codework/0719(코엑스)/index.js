$('li.story').click(function(){
    lineshow()
})

$('#sec1 a.close').click(function(){
    linehide()
})
function lineshow(){
   $('.top').animate({ 'width': '100%' }, 500, function () {
    $('.right').animate({ 'height': '100%' }, 500, function () {
        $('.bottom').animate({ 'width': '100%' }, 500, function () {
            $('.left').animate({ 'height': '100%' }, 500, function () {
                $('#sec1 figure').fadeIn()
            })
        })
    })
}) 
}


function linehide(){
    $('.top').animate({ 'width': '0%' })
    $('.right').animate({ 'height': '0%' })
    $('.bottom').animate({ 'width': '0%' })
    $('.left').animate({ 'height': '0%' }, 500, function(){
        $('#sec1 figure').fadeOut()
    })
}







