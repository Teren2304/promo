function Navigation(){
	this.scrollThis = function(element){
		$('.navigation__item').removeClass('navigation__item--active');
		$(element).addClass('navigation__item--active');
		var dest = $(element).attr('href');
		var nav = $('.nav').outerHeight() + 10;
		if(dest !== undefined && dest !== '') {
	        $('html').animate({ 
		        scrollTop: $(dest).offset().top - nav
		    }, 500);
	    }
	    return false;
	}
	this.showNavigation = function(element){
		if ($(element).hasClass('navigation--show')) {
			$(element).removeClass('navigation--show');
		}
		else{
			$(element).addClass('navigation--show');
		}
	}
}

var navigation = new Navigation();
$('.navigation__item').click(function(){
	navigation.scrollThis(this);
});

$('.navigation').click(function(){
	navigation.showNavigation(this)
});