$(document).ready(function(){$(".mobileSlider").flexslider({animation:"slide",slideshowSpeed:9000,controlNav:false,directionNav:true,prevText:"&#171;",nextText:"&#187;"});$(".flexslider").flexslider({animation:"slide",directionNav:false});$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var e=$(this.hash);e=e.length?e:$("[name="+this.hash.slice(1)+"]");if($(window).width()<768){if(e.length){$("html,body").animate({scrollTop:e.offset().top-$(".navbar-header").outerHeight(true)+1},1e3);return false}}else{if(e.length){$("html,body").animate({scrollTop:e.offset().top-$(".navbar").outerHeight(true)+1},1e3);return false}}}});$("#toTop").click(function(){$("html,body").animate({scrollTop:0},1e3)});var e;$(window).bind("scroll",function(){clearTimeout(e);e=setTimeout(t,50)});var t=function(){if($(window).scrollTop()>100){$(".tagline").fadeTo("slow",0)}else{$(".tagline").fadeTo("slow",1)}}})