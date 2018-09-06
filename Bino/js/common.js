$('.sl').slick({
   speed: 1000,
   prevArrow: ".arrow-left",
   nextArrow: ".arrow-right",
   responsive: [
     	{
      		breakpoint: 770,
      		settings: {
        		prevArrow: false,
        		nextArrow: false,
        		autoplay: true,
        		autoplaySpeed: 3000,
      		}
      	}]
  });

jQuery(document).ready(function($) {
  $('.burger').click(function() {
    if(!$('.burger').hasClass('cross'))
      $('.burger').addClass('cross');
    else
      $('.burger').removeClass('cross');
  });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
 
$(document).ready(function(){
	$(".btn-top").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});