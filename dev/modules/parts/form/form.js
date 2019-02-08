$('.field-wrapper .input').on("focus", function(){
	$(this).parent().addClass('field-wrapper--active');
});
$('.field-wrapper .input').on("focusout", function(){
	if ($(this).val() == '') {	
		$(this).parent().removeClass('field-wrapper--active');
	}
});