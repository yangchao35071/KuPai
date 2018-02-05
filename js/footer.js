let footer = $('.footer_left').eq(0);
let dl = footer.find('dl');
$(window).resize(function(){
    if($(this).width()>767){
        dl.find('dd').css({'display':'block'});
    } else {
        dl.find('dd').css({ 'display': 'none' });        
    }
})
dl.click(function () {
    $(this).find('dd').slideToggle(() => {
        if ($(this).find('dt span').html() == '+') {
            $(this).find('dt span').html('-');
            $(this).find('dt').css({ 'border-bottom': '1px dashed #ccc' });
        } else {
            $(this).find('dt span').html('+');
            $(this).find('dt').css({ 'border-bottom': '0' });
        }
    });
})