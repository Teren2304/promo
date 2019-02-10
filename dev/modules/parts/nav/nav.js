function Nav(){
  this._nav = $('.nav');
  this._parent = $('.header');
  this._navHeight = this._nav.outerHeight();
  this._navDefaultClass = 'nav--default';
  this._navFixedClass = 'nav--fixed';

  this.stickyMenu = function(){
    if ($(window).scrollTop() > 0 && this._nav.hasClass(this._navDefaultClass)) {
      this._nav.removeClass(this._navDefaultClass).addClass(this._navFixedClass);
      this._parent.css('padding-top', this._navHeight);
    }
    else if($(window).scrollTop() <= 0 && this._nav.hasClass(this._navFixedClass)){
      this._nav.removeClass(this._navFixedClass).addClass(this._navDefaultClass);
      this._parent.css('padding-top', 0);
    }
  }

  this.showToggle = function(element){
    $('.menu__item .link').removeClass('link--active');
    $(element).addClass('link--active');
    if ($(element).next().hasClass('show')) {
      $(element).next().hide(200).removeClass('show');
    }
    else{
      $('.toggle').not("show").hide().removeClass('show');
      $(element).next().show(200).addClass('show');
    }
  }
}

var nav = new Nav();
$(window).scroll(function(){
  nav.stickyMenu();
});
nav.stickyMenu();

$('.menu__item--toggle').click(function(){
  nav.showToggle(this);
});

$('.toggle__item').click(function(){
  $('.menu__item .link').removeClass('link--active');
  $('.toggle').hide().removeClass('show');
});

/*$('body').not('menu__item--toggle').click(function(){
    if ($('.toggle').hasClass('show')) {
      $('.toggle').removeClass('show').hide();
    }
});*/