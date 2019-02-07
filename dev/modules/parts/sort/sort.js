function Sort(){
	this.active = 0;
	this.sortBlock = $('.sort');
	this.sortDropdownBlock = $('.sort__dropdown');
	this.sortValueBlock = $('.sort__checked');

	this.select = function(data, attr){
		this.sortValueBlock.text(data);
		this.active = attr;
	}

	this.dropdown = function(){
		this.sortDropdownBlock.slideToggle();
	}
}
var sort = new Sort();

$('.sort').click(function(){
	sort.dropdown();
});

$('.sort__item').click(function(){
	var text = $(this).find("p").text();
	var attr = $(this).attr("data");
	sort.select(text, attr);
});