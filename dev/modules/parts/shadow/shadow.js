function Dialog(popup, shadow, shadowBlock, popupBlock){
	this._shadowBlock = shadowBlock;
	this._popupBlock = popupBlock;
	this._shadow = shadow;
	this._popup = popup;
	this._changeDialog = function(){
		this._shadow = this._shadow == true ? false : true
		this._popup = this._popup == true ? false : true
		if (this._shadow == true && this._popup == true) {
			this._shadowBlock.show();
			this._popupBlock.show();
			$('html, body').css('overflowY', 'hidden'); 
		}
		else{
			this._shadowBlock.hide();
			this._popupBlock.hide();
			$('html, body').css('overflowY', 'auto'); 
		}
	}
	this.showDialog = function(popup){
		this._popupBlock = $(popup);
		this._changeDialog();
	}
	this.closeDialog = function(){
		this._changeDialog();
	}
}

var shadowBlock = $('.shadow'),
	popupBlock = $('.popup'),
	dialog = new Dialog(false, false, shadowBlock, popupBlock);

$('.popup__show').click(function(){
	var attr = $(this).attr('data');
	if ($(attr).hasClass('popup')) {
		dialog.showDialog(attr);
	}
});

$('.popup__close').click(function(){
	dialog.closeDialog();
});
