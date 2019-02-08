function More(){
	this.city = [
		{country: "Турция", city: "Алания"},
		{country: "Турция", city: "Ани"},
		{country: "Турция", city: "Анкара"},
		{country: "Турция", city: "Анталия"},
		{country: "Турция", city: "Белек"},
		{country: "Турция", city: "Бодрум"},
		{country: "Турция", city: "Бурса"},
		{country: "Турция", city: "Ван"},
		{country: "Турция", city: "Газиантеп"},
		{country: "Турция", city: "Давраз"},
		{country: "Турция", city: "Даламан"},
		{country: "Турция", city: "Дидим"},
		{country: "Турция", city: "Диярбакир"},
		{country: "Турция", city: "Догубаязит"},
		{country: "Турция", city: "Измир"},
		{country: "Турция", city: "Изник"},
		{country: "Турция", city: "Кангал"},
		{country: "Турция", city: "Каппадокия"},
		{country: "Турция", city: "Карс"},
		{country: "Турция", city: "Карталкая"},
		{country: "Турция", city: "Картепе"},
		{country: "Турция", city: "Кахта"},
		{country: "Турция", city: "Каш"},
		{country: "Турция", city: "Кемер"},
		{country: "Турция", city: "Кушадасы"},
		{country: "Турция", city: "Кызкалеси"},
		{country: "Турция", city: "Мардин"},
		{country: "Турция", city: "Мармарис"},
		{country: "Турция", city: "Оздере"},
		{country: "Турция", city: "Паландокен"},
		{country: "Турция", city: "Памуккале"},
		{country: "Турция", city: "Пергам"},
		{country: "Турция", city: "Самсун"},
		{country: "Турция", city: "Сарыгерме"},
		{country: "Турция", city: "Сарыкамыш"},
		{country: "Турция", city: "Сафранболу"},
		{country: "Турция", city: "Сиде"},
		{country: "Турция", city: "Силифке"},
		{country: "Турция", city: "Стамбул"},
		{country: "Турция", city: "Трабзон"},
		{country: "Турция", city: "Троя"},
		{country: "Турция", city: "Улудаг"},
		{country: "Турция", city: "Фетхие"},
		{country: "Турция", city: "Чанаккале"},
		{country: "Турция", city: "Чешме"},
		{country: "Турция", city: "Шанлыурфа"},
		{country: "Турция", city: "Эрзурум"},
		{country: "Турция", city: "Эфес"}
	];


	this.loadMore = function(element, count){
		var select = this.city.slice(0, count);
		var html = '';
		$(select).each(function(index, item) {
			html += '<li>'+
						'<a class="font font--white link" href="#">'+item.city+'</a>'+
					'</li>';
			
		});
		$(element).prev("ul").append(html);
		html = '';
	}
}

var more = new More();
$('.more').click(function(){
	more.loadMore(this, 10);
})