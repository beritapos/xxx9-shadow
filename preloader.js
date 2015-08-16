//<![CDATA[
$.fn.preloader=function(options){var defaults={delay:200,preload_parent:"a",check_timer:300,ondone:function(){},oneachload:function(image){},fadein:500};var options=$.extend(defaults,options),root=$(this),images=root.find("img").css({"visibility":"hidden",opacity:0}),timer,counter=0,i=0,checkFlag=[],delaySum=options.delay,init=function(){timer=setInterval(function(){if(counter>=checkFlag.length){clearInterval(timer);options.ondone();return}for(i=0;i<images.length;i++){if(images[i].complete==true){if(checkFlag[i]==false){checkFlag[i]=true;options.oneachload(images[i]);counter++;delaySum=delaySum+options.delay}$(images[i]).css("visibility","visible").delay(delaySum).animate({opacity:1},options.fadein,function(){$(this).parent().removeClass("preloader")})}}},options.check_timer)};images.each(function(){if($(this).parent(options.preload_parent).length==0)$(this).wrap("<a class='preloader' />");else $(this).parent().addClass("preloader");checkFlag[i++]=false});images=$.makeArray(images);var icon=jQuery("<img />",{id:'loadingicon'}).hide().appendTo("body");timer=setInterval(function(){if(icon[0].complete==true){clearInterval(timer);init();icon.remove();return}},100)}
$(window).bind("load", function() {
     $('#content-slider #slider .article').fadeIn('800');
});
$(document).ready(function(){
    $(".tombol-komentar").click(function(){
        $("#comments").slideToggle("slow");
        $("#comments-body").slideToggle("slow");
        $(this).toggleClass("active");
        return false;
    });
    $(".open-image").click(function(){
        $(".post-box-luar .post-entry-body-luar").slideToggle("slow");
        $(this).toggleClass("active");
        return false;
    });
        $('.backtotop').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 'slow');
});
        $('.sidebar-body-right #sidebar-wrapper .widget-content').hide();
        $('.sidebar-body-right #sidebar-wrapper h2:first').addClass('active').next().slideDown('slow');
        $('.sidebar-body-right #sidebar-wrapper h2').css('cursor', 'pointer').click(function() {
        if($(this).next().is(':hidden')) {
        $('.sidebar-body-right #sidebar-wrapper h2').removeClass('active').next().slideUp('slow');
        $(this).toggleClass('active').next().slideDown('slow');
        }
    });						   
$('.post-entry-body-luar span img').hover(
function(){
	$(this).stop().fadeTo('slow',0);
},
function(){
	$(this).stop().fadeTo('slow',1);
});
$(".item-thumbnail").preloader('');
});
$(document).ready(function () {
    $('.popular-posts').prepend('<a href="#prev"  class="prev"></a><a href="#next" class="next"></a>');
    $('.popular-posts ul').wrap('<div id="slider-wrapper" />');
    $('.popular-posts').wrap('<div id="slider"><div id="wrap-shadow"></div></div>');
    $('.popular-posts').addClass('wrapper');
    $('.popular-posts ul').attr('id', 'slider-inner');
    $('.popular-posts li').addClass('article');
    $('.popular-posts').find("img").attr('src', function (i, e) {
        return e.replace("s72-c", "s400")
    })
});
jQuery.fn.rdy = function (func) {
    this.length && func.apply(this);
    return this
};
jQuery.fn.placeHolder = function (default_value) {
    var el = jQuery(this);
    default_value = default_value || el.attr('placeholder');
    return this
};
jQuery(function ($) {
    if ($.browser.msie) {
        $('body').addClass('is-ie');
        if ($.browser.version == 7) $('body').addClass('is-ie7');
        if ($.browser.version == 8) $('body').addClass('is-ie8')
    }
    $('#slider').rdy(function () {
        var current = 0,
            length = Math.ceil($('#slider .article').length / 4);
        $('#slider .prev, #slider .next').click(function () {
            var i = $(this).attr('class').indexOf('next') != -1 ? 1 : -1;
            current += i;
            if (current < 0) current = length - 1;
            if (current > length - 1) current = 0;
            $('#slider-inner').animate({
                left: -720 * current
            });
            return false
        })
    })
});
//]]>
