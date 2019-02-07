function View(){
	this.active = 0;
	this.viewBlock = $('.view__item');
	this.proposalBlock = $('#proposal .row');

	this.changeView = function(active){
		this.proposalBlock.removeClass(this.active);
		this.active = active;
		this.proposalBlock.addClass(this.active);
	}

	this.select = function(active, element){
		this.changeView(active);
		this.viewBlock.removeClass('view__item--active');
		$(element).addClass('view__item--active');
	}
}
var view = new View();
view.changeView('th');

$('.view__item').click(function(){
	var attr = $(this).attr('data')
	view.select(attr, this);
});