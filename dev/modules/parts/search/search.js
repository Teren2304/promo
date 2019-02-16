function Data(){
	Store.call(this);

	this.countryFrom = "Все страны";
	this.countryWhere = "Все страны";
	this.cityFrom = "";
	this.cityWhere = "";
	this.dateFrom = '';
	this.dateWhere = '';
	this.nightFrom = 7;
	this.nightWhere = 10;
	this.rateHotel = [4, 5];
	this.foodHotel = ['AI', 'UAI'];
	this.adults = 2;
	this.children = 0;
	this.childrenAgeFirst = 0;
	this.childrenAgeSecond = 0;
	this.childrenAgeThird = 0;

	this.fieldFrom = $('.search-from');
	this.fieldWhere = $('.search-where');
	this.fieldDateFrom = $('.search-date-from');
	this.fieldDateWhere = $('.search-date-to');
	this.fieldNightFrom = $('.search-night-from');
	this.fieldNightWhere = $('.search-night-to');
	this.fieldRate = $('.search-rate');
	this.fieldFood = $('.search-food');
	this.fieldAdults = $('.search-adults');
	this.fieldChildren = $('.search-children');
	this.fieldChildrenAgeFirst = $('.child1');
	this.fieldChildrenAgeSecond = $('.child2');
	this.fieldChildrenAgeThird = $('.child3');





	this.DrawData = function(rule){
		if (rule) {
			this.dateFrom = this.date('today');
			this.dateWhere = this.date('next');

			this.fieldDateFrom.attr("min", this.date('today'));
			this.fieldDateWhere.attr("min", this.date('today'));
		}
		this.fieldFrom.find("span:first-child").text(this.countryFrom);
		this.fieldFrom.find("span:last-child").text(this.cityFrom);
		this.fieldWhere.find("span:first-child").text(this.countryWhere);
		this.fieldWhere.find("span:last-child").text(this.cityWhere);
		this.fieldDateFrom.val(this.dateFrom);
		this.fieldDateWhere.val(this.dateWhere);
		this.fieldNightFrom.text(this.nightFrom);
		this.fieldNightWhere.text(this.nightWhere);
		this.fieldRate.text(this.rateHotel);
		this.fieldFood.text(this.foodHotel);
		this.fieldAdults.text(this.adults);
		this.fieldChildren.text(this.children);
		this.fieldChildrenAgeFirst.val(this.childrenAgeFirst);
		this.fieldChildrenAgeSecond.val(this.childrenAgeSecond);
		this.fieldChildrenAgeThird.val(this.childrenAgeThird);


		this.loadCountry('from');
		this.loadCountry('where');
		//this.loadCity('from', this.findActiveCountry('from'), this.countryFrom);
		//this.loadCity('where', this.findActiveCountry('where'), this.countryWhere);
		this.loadCity('from', 0, this.countryFrom);
		this.loadCity('where', 0, this.countryWhere);
		this.textForAdults();
		this.textForChildren();
	}
}

function Search(){
	Data.call(this);

	this.send = function(){
		console.log(this.countryFrom);
		console.log(this.countryWhere);
		console.log(this.cityFrom);
		console.log(this.cityWhere);
		console.log(this.dateFrom);
		console.log(this.dateWhere);
		console.log(this.nightFrom);
		console.log(this.nightWhere);
		console.log(this.rateHotel);
		console.log(this.foodHotel);
		console.log(this.adults);
		console.log(this.children);
		console.log(this.childrenAgeFirst);
		console.log(this.childrenAgeSecond);
		console.log(this.childrenAgeThird);
	}

	this.checkFromMax= function(max){
		if (this.nightFrom < max) {
			$('.search-night-from').prev().removeClass('disabled');
		}
		else{
			this.disabled(this.nightFrom, $('.search-night-from').next(), max, 'increment');
		}
	}

	this.checkToMax = function(max){
		if (this.nightWhere < max) {
			$('.search-night-to').prev().removeClass('disabled');
		}
		else{
			this.disabled(this.nightWhere, $('.search-night-to').next(), max, 'increment');
		}
	}

	this.checkFromMin = function(min){
		if (this.nightFrom < min) {
			$('.search-night-from').prev().removeClass('disabled');
		}
		else{
			this.disabled(this.nightFrom, $('.search-night-from').prev(), min, 'decrement');
		}
	}

	this.checkToMin = function(min){
		if (this.nightWhere < min) {
			$('.search-night-to').prev().removeClass('disabled');
		}
		else{
			this.disabled(this.nightWhere, $('.search-night-to').prev(), min, 'decrement');
		}
	}

	this.increment = function(max, item, element){
		if (item == 'nightFrom') {
			this.nightFrom ++;
			this.fieldNightFrom.text(this.nightFrom);
			this.checkFromMax(max);
			if (this.nightFrom > this.nightWhere) {
				this.nightWhere = this.nightFrom;
				this.fieldNightWhere.text(this.nightWhere);
				this.checkToMax(max);
			}
		}
		else if (item == 'nightTo') {
			this.nightWhere++;
			this.fieldNightWhere.text(this.nightWhere);
			this.checkToMax(max);
		}
		else if (item == 'adults') {
			if (this.adults  < max) {
				this.adults ++;
				this.fieldAdults.text(this.adults)
			}
			this.textForAdults();
			this.disabled(this.adults, element, max, 'increment');	
		}
		else if (item == 'children') {
			if (this.children  < max) {
				this.children ++;
				this.fieldChildren.text(this.children);
				var html = '<div class="inner" id="child'+this.children+'">'+
				                '<p class="font">'+this.children+' ребенок: </p>'+
				                  '<select class="select inner__select child'+this.children+'">'+
				                    '<option value="0">До года</option>'+
				                    '<option value="1">1 год</option>'+
				                    '<option value="2">2 года</option>'+
				                    '<option value="3">3 года</option>'+
				                    '<option value="4">4 года</option>'+
				                    '<option value="5">5 лет</option>'+
				                    '<option value="6">6 лет</option>'+
				                    '<option value="7">7 лет</option>'+
				                    '<option value="8">8 лет</option>'+
				                    '<option value="9">9 лет</option>'+
				                    '<option value="10">10 лет</option>'+
				                    '<option value="11">11 лет</option>'+
				                    '<option value="12">12 лет</option>'+
				                  '</select>'+
				            '</div>';  
			    $('.dropdown__block--who .wrapper').append(html);
			}
			this.textForChildren();
			this.disabled(this.children, element, max, 'increment');
		}
	}; /* Increment */


	this.decrement = function(min, item, element){
		if (item == 'nightFrom') {
			this.nightFrom --;
			this.fieldNightFrom.text(this.nightFrom);
			this.checkFromMin(min);
		}
		else if (item == 'nightTo') {
			this.nightWhere--;
			this.fieldNightWhere.text(this.nightWhere);
			this.checkToMin(min);
			if (this.nightFrom > this.nightWhere) {
				this.nightFrom = this.nightWhere;
				this.fieldNightFrom.text(this.nightWhere);
				this.checkFromMin(min);
			}
		}
		else if (item == 'adults') {
			if (this.adults  > min) {
				this.adults --;
				this.fieldAdults.text(this.adults)
			}
			this.textForAdults();
			this.disabled(this.adults, element, min, 'decrement');
		}
		else if (item == 'children') {
			if (this.children  > min) {
				$('.dropdown__block--who .wrapper #child' + this.children).remove();
				this.children --;
				this.fieldChildren.text(this.children)
			}
			this.textForChildren();
			this.disabled(this.children, element, min, 'decrement');
		}
	}; /* Decrement */


	this.textForAdults = function(){
		var text;
		if (this.adults == 1) {
			text = " взрослый, ";
		}
		else{
			text = " взрослых, ";
		}
		$('.search-adults-text').append(text)
	}; /* Insert text for adults */

	this.textForChildren = function(){
		var text;
		if (this.children == 0) {
			text = "без детей";
			$('.search-children-text').text('');
		}
		else if(this.children == 1){
			text = " ребенок";
		}
		else{
			text = " детей";
		}
		$('.search-children-text').append(text)
	}; /* Insert text for children */


	this.disabled = function(elements, element, value, choose){
		if (choose == 'increment') {
			if (elements == value){
				$(element).addClass('disabled');
			}
			else{
				$(element).parent().find('button').removeClass('disabled');
			}
		}
		else{
			if (elements == value) {
				$(element).addClass('disabled');
			}
			else{
				$(element).parent().find('button').removeClass('disabled');
			}
		}
	}; /* Check increment, decrement button on min, max value */

	this.findActiveCountry = function(choose){
		var wrapper = (choose == 'from') ? $('.dropdown__block--from .fly__wrapper') : $('.dropdown__block--where .fly__wrapper');
		return wrapper.find('.radio--active').attr("data");
	};

	this.loadCountry = function(choose){
		var self = this,
			html = "",
			list = (choose == 'from') ? this.from : this.where,
			wrapper = (choose == 'from') ? $('.dropdown__block--from .fly__wrapper') : $('.dropdown__block--where .fly__wrapper');
		list.unshift({name: 'Все страны'});

		$.each(list, function (index, item) {
			html += '<div class="city-show">';
					if (item.name == self.countryFrom || item.name == self.countryWhere) {
						html += '<div class="radio radio--active" country="'+item.name+'" data="'+index+'">';
					}
					else{
						html += '<div class="radio" country="'+item.name+'" data="'+index+'">';
					}
					html += '<span></span>'+
					  		'<label class="font">'+item.name+'</label>'+
						'</div>'+
					'</div>';
		});
		wrapper.append(html);
	};

	this.loadCity = function(choose, data, value){
		var html = "",
			list = (choose == 'from') ? this.from : this.where,
			wrapper = (choose == 'from') ? $('.dropdown__block--from .fly__list') : $('.dropdown__block--where .fly__list');
			title = (choose == 'from') ? $('.dropdown__block--from .fly__title.last') : $('.dropdown__block--where .fly__title.last');

		wrapper.empty("");
		if (data != 0) {
			if (list[data].city.length != 0) {
				title.show();
				$.each(list[data].city, function(index, item) {
					html += '<div class="city-show">'+
								'<div class="radio" country="'+value+'" city="'+item+'">'+
									'<span></span>'+
							  		'<label class="font">'+item+'</label>'+
								'</div>'+
							'</div>';
				});
			}
			else{
				title.hide();
			}
		}
		else{
			title.hide();
		}
		wrapper.append(html);
	};

	this.checkCountry = function(choose, element){
		var block;
		if (choose == 'from') {
			$('.dropdown__block--from .fly__wrapper .radio').removeClass('radio--active');
			block = $('.search-from');
		}
		else{
			$('.dropdown__block--where .fly__wrapper .radio').removeClass('radio--active');
			block = $('.search-where');
		}
		$(element).addClass('radio--active');
		var data = $(element).attr("data");
		var country = $(element).attr("country");

		block.find('span:first-child').text(country);
		block.find('span:last-child').text('').removeClass('active');
		if (choose == 'from') {
			this.countryFrom = country;
		}
		else{
			this.countryWhere = country;
		}
		this.loadCity(choose, data, country);
	};

	this.checkCity = function(what, element){
		var activeElement,
			block,
			value_city = $(element).attr("city");
		if (what == 'from') {
			activeElement = $('.dropdown__block--from .fly__list .radio--active');
			block = $('.search-from');
		}
		else{
			activeElement = $('.dropdown__block--where .fly__list .radio--active');
			block = $('.search-where');
		}

		if ($(element).hasClass('radio--active')) {
			$(element).removeClass('radio--active');
			block.find('span:last-child').text('').removeClass('active');
		}
		else{
			if (what == 'from') {
				$('.dropdown__block--from .fly__list .radio').removeClass('radio--active');
			}
			else{
				$('.dropdown__block--where .fly__list .radio').removeClass('radio--active');
			}
			block.find('span:last-child').text(value_city).addClass('active');


			if (what == 'from') {
				this.cityFrom = value_city;
			}
			else{
				this.cityWhere = value_city;
			}

			$(element).addClass('radio--active');
		}
	};

	this.checkRateFood = function (choose, element){
		var value = $(element).attr("value");
		if ($(element).not('.radio--all').hasClass('radio--active')) {
			$(element).removeClass('radio--active');
			if (choose == 'rate') {
				this.rateHotel.splice(this.rateHotel.indexOf(value), 1);
				this.fieldRate.text(this.rateHotel);
				if (this.fieldRate.text() == '') {
					$(element).parent().parent().find('.radio--all').addClass('radio--active');
					this.fieldRate.text("Все отели");
				}
			}
			else{
				this.foodHotel.splice(this.foodHotel.indexOf(value), 1);
				this.fieldFood.text(this.foodHotel);
				if (this.fieldFood.text() == '') {
					$(element).parent().parent().find('.radio--all').addClass('radio--active');
					this.fieldFood.text("Любое питание");
				}
			}

		}
		else{
			if (value == 0) {
				$(element).parent().parent().find('.radio--active').removeClass('radio--active');
				if (choose == 'rate') {
					this.rateHotel.length = 0;
					this.fieldRate.text("Все отели");
				}
				else{
					this.foodHotel.length = 0;
					this.fieldFood.text("Любое питание");
				}
				$(element).addClass('radio--active');
				return;
			}
			$(element).addClass('radio--active');
			$(element).parent().parent().find('.radio--all').removeClass('radio--active');
			if (choose == 'rate') {
				this.rateHotel.push(value);
				this.fieldRate.text(this.rateHotel);	
			}
			else{
				this.foodHotel.push(value);
				this.fieldFood.text(this.foodHotel);
			}
		}
	}; /* Action for rate and food checkbox */


	this.date = function(date){
		var now = new Date(),
			day = now.getDate(),
			month = now.getMonth() + 1,
			year = now.getFullYear(),
			next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7),
			nextDay = next.getDate(),
			nextMonth = next.getMonth() + 1,
			nextYear = next.getFullYear();
	   	day = day < 10 ? "0" + day : day;
	   	month = month < 10 ? "0" + month : month;
	   	nextDay = nextDay < 10 ? "0" + nextDay : nextDay;
	   	nextMonth = nextMonth < 10 ? "0" + nextMonth : nextMonth;
	   	if (date == 'today') {
	   		return year + '-' + month + '-' + day;
	   	}
	   	else if(date == 'next'){
	   		return nextYear + '-' + nextMonth + '-' + nextDay;
	   	}
	   	else if(date == 'max'){
	   		return year + 2 + '-' + month + '-' + day;
	   	}
	   	//return date == 'today' ? year + '-' + month + '-' + day : nextYear + '-' + nextMonth + '-' + nextDay;	
	}

}
var search = new Search();
search.DrawData(true);


$(document).on("click", ".dropdown__block--from .fly__wrapper .radio", function(){
	search.checkCountry('from', this);
});

$(document).on("click", ".dropdown__block--where .fly__wrapper .radio", function(){
	search.checkCountry('where', this);
});

$(document).on("click", ".dropdown__block--from .fly__list .radio", function(){
	search.checkCity('from', this);
});

$(document).on("click", ".dropdown__block--where .fly__list .radio", function(){
	search.checkCity('where', this);
});

$(document).on("click", ".dropdown__block--rate .radio", function(){
	search.checkRateFood('rate', this);
});

$(document).on("click", ".dropdown__block--food .radio", function(){
	search.checkRateFood('food', this);
});

$('.dropdown__block .increment').click(function(){
	var attr = $(this).prev('.inner__title').attr('data');
	var max = $(this).attr('max');
	search.increment(max, attr, this);
});

$('.dropdown__block .decrement').click(function(){
	var attr = $(this).next('.inner__title').attr('data');
	var min = $(this).attr('min');
	search.decrement(min, attr, this);
});


$(search.fieldDateFrom).keyup(function() {
	if ($(this).val() > search.date('max')) {
		$(this).val(search.date('today'));
	}
	else if($(this).val() < search.date('today')) {
		$(this).val(search.date('today'));
	}
});

$(search.fieldDateWhere).keyup(function() {
	if ($(this).val() > search.date('max')) {
		$(this).val(search.date('next'));
	}
	else if($(this).val() < search.date('today')) {
		$(this).val(search.date('next'));
	}
});

$('.dropdown').click(function(){
	if ($(this).next('.dropdown__block').hasClass('show')) {
		$(this).next('.dropdown__block').hide(200).removeClass('show');
	}
	else{
		$('.dropdown__block').not("show").hide().removeClass('show');
		$(this).next('.dropdown__block').show(200).addClass('show');
	}
});

$('.dropdown__block .button--primary').click(function(){
	$(this).parent().parent('.dropdown__block').removeClass('show');
	$(this).parent().parent('.dropdown__block').hide();
});