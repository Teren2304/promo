function Toggle(){
	Store.call(this);
	this.loadMore = function(element, list){
		var active,
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

		$(active).each(function(index, item) {
			html += '<li class="toggle__item">'+
						'<a href="#" class="font text-ellipsis">'+item+'</a>'+
					'</li>';
		});
		$(element).append(html);
		html = '';
	}
}

var toggle = new Toggle();
toggle.loadMore($('#toggleUkraine'), 'ukraine');
toggle.loadMore($('#toggleRussia'), 'russia');
toggle.loadMore($('#toggleKazahstan'), 'kazahstan');
toggle.loadMore($('#toggleBelarus'), 'belarus');