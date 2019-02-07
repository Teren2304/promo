$('.faq').click(function(){
	if ($(this).children('.faq__header').hasClass('faq__header--active')) {
		$(this).children('.faq__header').removeClass('faq__header--active');
	}
	else{
		$(this).children('.faq__header').addClass('faq__header--active');
	}
	$(this).children('.faq__body').slideToggle();
});