
//#search-from
//#search-where
//#search-date-from
//#search-date-to

//.search-night-from
//.search-night-to
//.search-rate
//.search-food
//.search-adults
//.search-children



function Search(searchFrom, searchwWere, searchDateFrom, searchDateTo, searchNightFrom, searchNightTo, searchRate, searchFood, searchAdults, searchChildren){
	this.searchFrom = searchFrom;
	this.searchwWere = searchwWere;
	this.searchDateFrom = searchDateFrom;
	this.searchDateTo = searchDateTo;
	this.searchNightFrom = searchNightFrom;
	this.searchNightTo = searchNightTo;
	this.searchRate = searchRate;
	this.searchFood = searchFood;
	this.searchAdults = searchAdults;
	this.searchChildren = searchChildren;

	this.listFrom = [
		{
			country: "Украина",
			city: "Киев"
		},
		{
			country: "Россия",
			city: "Харьков"
		},
		{
			country: "Россия",
			city: "Хача"
		},
		{
			country: "Украина",
			city: "Днепр"
		},
		{
			country: "Украина",
			city: "Львов"
		}
	];
	this.listTo = [
		{
			country: "Украина",
			city: "Киев"
		},
		{
			country: "Украина",
			city: "Харьков"
		}
	];


	this.fieldRate = $('.search-rate');
	this.fieldFood = $('.search-food');
	this.fieldAdults = $('.search-adults');
	this.fieldChildren = $('.search-children');
	this.fieldNightFrom = $('.search-night-from');
	this.fieldNightTo = $('.search-night-to');

	this.fieldSearchFrom = $('#search-date-from');
	this.fieldSearchTo = $('#search-date-to');


	this.setData = function(){
		this.getDataFromTo('from');
		this.getDataFromTo('where');

		this.fieldAdults.text(this.searchAdults);
		this.fieldChildren.text(this.searchChildren);
		this.fieldNightFrom.text(this.searchNightFrom);
		this.fieldNightTo.text(this.searchNightTo);
		this.fieldFood.text(this.searchFood);
		this.fieldRate.text(this.searchRate);

		this.fieldSearchFrom.val(this.date('today')).attr('min', this.date('today'));
		this.fieldSearchTo.val(this.date('next')).attr('min', this.date('today'));

		this.textForAdults();
		this.textForChildren();
	}

	this.disabled = function(elements, element, value, action){
		if (action == 'increment') {
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
	}
	/* Check increment, decrement button on min, max value */

	this.textForAdults = function(){
		var text;
		if (this.searchAdults == 1) {
			text = " взрослый, ";
		}
		else{
			text = " взрослых, ";
		}
		$('.search-adults-text').append(text)
	}
	/* Insert text for adults */

	this.textForChildren = function(){
		var text;
		if (this.searchChildren == 0) {
			text = "без детей";
			$('.search-children-text').text('');
		}
		else if(this.searchChildren == 1){
			text = " ребенок";
		}
		else{
			text = " детей";
		}
		$('.search-children-text').append(text)
	}
	/* Insert text for children */

	this.increment = function(max, item, element){
		if (item == 'nightFrom') {
			if (this.searchNightFrom < max) {
				this.searchNightFrom ++;
				this.fieldNightFrom.text(this.searchNightFrom);
			}
			this.disabled(this.searchNightFrom, element, max, 'increment');
		}
		else if (item == 'nightTo') {
			if (this.searchNightTo  < max) {
				this.searchNightTo ++;
				this.fieldNightTo.text(this.searchNightTo);
			}
			this.disabled(this.searchNightTo, element, max, 'increment');
		}
		else if (item == 'adults') {
			if (this.searchAdults  < max) {
				this.searchAdults ++;
				this.fieldAdults.text(this.searchAdults)
			}
			this.disabled(this.searchAdults, element, max, 'increment');
			
			this.textForAdults();
		}
		else if (item == 'children') {
			if (this.searchChildren  < max) {
				this.searchChildren ++;
				this.fieldChildren.text(this.searchChildren);
				var html = '<div class="inner" id="child'+this.searchChildren+'">'+
				              '<div class="flex-container align-middle align-justify">'+
				                '<p class="font">'+this.searchChildren+' ребенок: </p>'+
				                  '<select class="select inner__select child'+this.searchChildren+'">'+
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
				              '</div>'+
				            '</div>';  
			    $('.dropdown__block--who .wrapper').append(html);
			}
			this.textForChildren();
			this.disabled(this.searchChildren, element, max, 'increment');
		}
	};
	/* Increment */

	this.decrement = function(min, item, element){
		if (item == 'nightFrom') {
			if (this.searchNightFrom  > min) {
				this.searchNightFrom --;
				this.fieldNightFrom.text(this.searchNightFrom);
			}
			this.disabled(this.searchNightFrom, element, min, 'decrement');
		}
		else if (item == 'nightTo') {
			if (this.searchNightTo  > min) {
				this.searchNightTo --;
				this.fieldNightTo.text(this.searchNightTo);
			}
			this.disabled(this.searchNightTo, element, min, 'decrement');
		}
		else if (item == 'adults') {
			if (this.searchAdults  > min) {
				this.searchAdults --;
				this.fieldAdults.text(this.searchAdults)
			}
			this.textForAdults();
			this.disabled(this.searchAdults, element, min, 'decrement');
		}
		else if (item == 'children') {
			if (this.searchChildren  > min) {
				$('.dropdown__block--who .wrapper #child' + this.searchChildren).remove();
				this.searchChildren --;
				this.fieldChildren.text(this.searchChildren)
			}
			this.textForChildren();
			this.disabled(this.searchChildren, element, min, 'decrement');
		}
	};
	/* Decrement */

	this.checkbox = function (item, name, value){
		if (item == 'add') {
			if (name == 'food') {
				this.searchFood.push(value);
				this.fieldFood.text(this.searchFood);

				if (true) {}
			}
			else{
				this.searchRate.push(value);
				this.fieldRate.text(this.searchRate);
			}
		}
		else{
			if (name == 'food') {
				this.searchFood.splice(this.searchFood.indexOf(value), 1);
				this.fieldFood.text(this.searchFood);
			}
			else{
				this.searchRate.splice(this.searchRate.indexOf(value), 1);
				this.fieldRate.text(this.searchRate);
			}
		}	
	}
	/* Action for rate and food checkbox */

	this.getDataFromTo = function(list){
		var html = ''
		$((list == 'from') ? this.listFrom : this.listTo).each(function(index, item){
			html += '<div class="inner choose">'+
						'<div class="icon icon--plane">'+
							'<p class="font choose__text">'+ item.country +'</p>'+
							'<p class="font font--sm choose__text">'+ item.city +'</p>'+
						'</div>'+
					'</div>';
		});
		if (list == 'from') {
			$('.dropdown__block--from .box-shadow').append(html);
		}
		else{
			$('.dropdown__block--where .box-shadow').append(html);
		}
	}

	this.searchData = function(value){
		$('#dropdown__from .inner').each(function(){
			var found = false;
			//console.log($(this).find('p:last-child').text())
			if($(this).find('p:last-child').text().toLowerCase().indexOf(value.toLowerCase()) >= 0){
				found = 'true';
				console.log(this)
			}
			if (found == 'true') {
				//$('.choose--nothing').hide();
				$(this).show();
			}
			else{
				$('.choose--nothing').show();
				$(this).hide();
			}
		});
	}

	this.dropdown = function(){

	}

	this.date = function(date){
		var now = new Date(),
	   		day = now.getDate(),
	   		month = now.getMonth() + 1,
	   		year = now.getFullYear(),
	   		next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7),
	   		nextDay = next.getDate(),
	   		nextMonth = next.getMonth() + 1,
	   		nextYear = next.getFullYear();

	    if (month < 10){ 
	        month = "0" + month;
	    }
	    if (day < 10){
	        day = "0" + day;
	    }
	    if (nextDay < 10){ 
	        nextDay = "0" + nextDay;
	    }
	    if (nextMonth < 10){
	        nextMonth = "0" + nextMonth;
	    }

	    if (date == 'today') {
	    	return year + '-' + month + '-' + day;	
	    }
	    else{
	    	return nextYear + '-' + nextMonth + '-' + nextDay;	
	    }
	}
	/* Date for input  */
}

var searchFrom = '';
var searchwWere = '';
var searchDateFrom = '';
var searchDateTo = '';
var searchNightFrom = 6;
var searchNightTo = 12;
var searchRate = [4, 5];
var searchFood = ['ai', 'uai'];
var searchAdults = 2;
var searchChildren = 0;

var search = new Search(searchFrom, searchwWere, searchDateFrom, searchDateTo, searchNightFrom, searchNightTo, searchRate, searchFood, searchAdults, searchChildren);
search.setData();


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

$('.dropdown__block .checkbox').change(function(){
	var value = $(this).val();
		name = $(this).attr("name")
	if ($(this).is(':checked')){
		search.checkbox('add', name, value)
	} 
	else {
		search.checkbox('delete', name, value)
	}
});

$('.dropdown').click(function(){
	$(this).next('.dropdown__block').slideToggle();
});
$('.dropdown__block .button--primary').click(function(){
	$(this).parent('.dropdown__block').slideToggle();
});


$('#search-from').keyup(function(){
	search.searchData($(this).val());
});