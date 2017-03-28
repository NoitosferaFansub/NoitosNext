var podeAnimar = true;
var menuAberto = false;
var episodiosAbertos = false;

$(window).load(function(){
	$('#join-song').get(0).play();
	if (location.hash == "#home") {
		$('.logo').click();
	};
	if (location.hash == "#cartoon-network") {
		animateThis('cn', '#101010');
		jumpTo('cartoon-network');
	};
	if (location.hash == "#cartoon-hangover") {
		animateThis('ch', '#232323');
		jumpTo('cartoon-hangover');
	};
	if (location.hash == "#adult-swim") {
		animateThis('as', '#5f5f5f');
		jumpTo('adult-swim');
	};
	if (location.hash == "#outros") {
		animateThis('ot', '#838383');
		jumpTo('outros');
	};
	if (location.hash == "#extras") {
		animateThis('ex', '#9d9d9d');
		jumpTo('extras');
	};
	$('.logo').on('click', function(){
		$('.item').css({'width':''});
		$('.item.active').removeClass("active");
		$('.item').children('img').css({"height":""}, 250);
		$('.icone.arrow').css({'height':'0px'});
		$('#menu').css({'background':'#272727'});
		$('.logo').css({'background':'#272727'});
		if ($(window).width() <= 960) {
			$('.item').css({'display':'none'});
		}
		$('.main-wrapper').slideDown(300, function(){
			$('#cartoon-network').slideUp();
			$('#cartoon-hangover').slideUp();
			$('#adult-swim').slideUp();
			$('.aba-conteudo').slideUp();
			$('.hamburger.icone').css({"display":""});
			series = document.getElementsByClassName("serie");
			for (i = 0; i < series.length; i++) {
				series[i].className = series[i].className.replace(" active", "");
			}
		});
		location.hash = "#home";
	});
});

function animateThis(id, backgroundColor) {
	$('.item.'+id).addClass('active');
	$('.item.'+id).css({'display':'block'})
	$('.item.'+id).css({"box-shadow":"none"});
	$('#menu').css({'background':backgroundColor});
	$('.logo').css({'background':backgroundColor});
	if ($(window).width() <= 960) {
		$('.item').not($('.'+id)).css({'display':"none"});
	}
	$('.item').not($('.'+id)).css({'width':"0px"});
	$('.item').not($('.'+id)).children().css({"height":"0px"});
	$('.icone.arrow').css({'height':'75%'});
	$('.hamburger.icone').css({"display":"none"});
}

function showSeason(event, id) {
	$('.aba:not(.'+id+')').css({'display':'none'});
	$('.aba.'+id).fadeIn();
	$('.aba-conteudo').slideUp();
	tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
	series = document.getElementsByClassName("serie");
    for (i = 0; i < series.length; i++) {
        series[i].className = series[i].className.replace(" active", "");
    }
	event.currentTarget.className += " active";
}

function showEpisodes(id, temporada) {
	var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("aba-conteudo");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    $('#'+temporada).slideDown();
    id.currentTarget.className += " active";
}

function jumpTo(id) {
	if (podeAnimar == true) {
		podeAnimar = false;
		$('.main-wrapper').slideUp(250, function(){
			$('#'+id).slideDown();
			$('.aba').slideUp();
			$('.aba-conteudo').slideUp();
			podeAnimar = true;
		});
		location.hash = "#"+id;
		return;
	}
}

var x,left,down;

$(".season-scrollable").mousedown(function(e){
    e.preventDefault();
    down = true;
    x = e.pageX;
    left = $(this).scrollLeft();
});

$(".season-scrollable").mousemove(function(e){
    if(down){
        var newX = e.pageX;
        $(".season-scrollable").scrollLeft(left - newX + x);
    }
});

$(".season-scrollable").mouseup(function(e){down = false;});

$(".series-scrollable").mousedown(function(e){
    e.preventDefault();
    down = true;
    x = e.pageX;
    left = $(this).scrollLeft();
});

$(".series-scrollable").mousemove(function(e){
    if(down){
        var newX = e.pageX;
        $(".series-scrollable").scrollLeft(left - newX + x);
    }
});

$(".series-scrollable").mouseup(function(e){down = false;});

function abrirModal(serie, temporada, episodio) {
    $('.modal-thing.'+serie+'.'+temporada+'.'+episodio).fadeIn(250);
}

function fecharModal() {
	 $('.modal-thing').fadeOut(250);
}

$("html").on("keyup", function(e) {
	if(e.keyCode === 27) {
		fecharModal();
	}
});

function openMenu() {
	if (menuAberto == false) {
		menuAberto = true;
		$('.item').slideDown();
		return;
	}
	if (menuAberto == true) {
		menuAberto = false;
		$('.item').slideUp();
	}
}

function openEpisodes() {
	if (episodiosAbertos == false) {
		episodiosAbertos = true;
		$('.wide.episodios').slideDown();
		return;
	}
	if (episodiosAbertos == true) {
		episodiosAbertos = false;
		$('.wide.episodios').slideUp();
	}
}