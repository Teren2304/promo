function Sort(){
	this.active = 0;
	this.sortBlock = $('.sort');
	this.sortIconBlock = $('.sort__icon');
	this.sortDropdownBlock = $('.sort__dropdown');
	this.sortValueBlock = $('.sort__checked');
	this.sortIcon = 'fa-sort-amount-down';

	this.select = function(data, attr, icon, element){
		this.active = attr;
		this.sortIconBlock.removeClass(this.sortIcon);
		this.sortIconBlock.addClass(icon);
		this.sortIcon = icon;
		//$(element).addClass('sort__item--active');
		this.sortValueBlock.text(data);
		
		$('.sort__item').removeClass('sort__item--active');
		$(element).addClass('sort__item--active');
	}

	this.dropdown = function(element){
		if (this.sortDropdownBlock.hasClass('show')) {
		  this.sortDropdownBlock.hide(200).removeClass('show');
		}
		else{
		  this.sortDropdownBlock.show(200).addClass('show');
		}
	}
}
var sort = new Sort();
sort.sortIconBlock.addClass(sort.sortIcon);

$('.sort').click(function(){
	sort.dropdown();
});

$('.sort__item').click(function(){
	var text = $(this).find("p").text();
	var attr = $(this).attr("data");
	var icon = $(this).attr("icon");
	sort.select(text, attr, icon, this);
});
//sort__icon
//.fas.fa-sort-amount-down