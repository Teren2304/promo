function More(){
	Store.call(this);
	
	this.offset = 5;
	this.loadMore = function(element, list, count){
		var active,
			select,
			html = '';
		if (list == 'ukraine') {
			active = this.from[0].city;
		}
		else if(list == 'russia'){
			active = this.from[1].city;
		}
		else if(list == 'belarus'){
			active = this.from[2].city;
		}
		else if(list == 'kazahstan'){
			active = this.from[3].city;
		}
		if (count * this.offset >= active.length) {
			$(element).hide();
		}
		select = active.slice((count - 1) * this.offset, count * this.offset);
		$(select).each(function(index, item) {
			html += '<li>'+
						'<a class="font font--white link" href="#">'+item+'</a>'+
					'</li>';
			
		});
		$(element).prev("ul").append(html);
		$(element).attr('count', ++count);
		html = '';
	}
}

var more = new More();
more.loadMore($('#ukraine'), $('#ukraine').attr('id'), $('#ukraine').attr('count'));
more.loadMore($('#russia'), $('#russia').attr('id'), $('#russia').attr('count'));
more.loadMore($('#belarus'), $('#belarus').attr('id'), $('#belarus').attr('count'));
more.loadMore($('#kazahstan'), $('#kazahstan').attr('id'), $('#kazahstan').attr('count'));

$('.more').click(function(){
	var count = $(this).attr('count');
	var list = $(this).attr('id');
	more.loadMore(this, list, +count);
});
