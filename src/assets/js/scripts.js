﻿// Class IE
(function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function s(e,t){var s=n(e,t)?i:r;s(e,t)}var n,r,i;if("classList"in document.documentElement){n=function(e,t){return e.classList.contains(t)};r=function(e,t){e.classList.add(t)};i=function(e,t){e.classList.remove(t)}}else{n=function(e,n){return t(n).test(e.className)};r=function(e,t){if(!n(e,t)){e.className=e.className+" "+t}};i=function(e,n){e.className=e.className.replace(t(n)," ")}}var o={hasClass:n,addClass:r,removeClass:i,toggleClass:s,has:n,add:r,remove:i,toggle:s};if(typeof define==="function"&&define.amd){define(o)}else{e.classie=o}})(window)
// Word Rotator
;(function(e){e.fn.wordsrotator=function(t){var n={autoLoop:true,randomize:false,stopOnHover:false,changeOnClick:false,words:null,animationIn:"flipInY",animationOut:"flipOutY",speed:2e3};var r=e.extend({},n,t);var i;var s=[];return this.each(function(){var t=e(this);var n=e("#"+t.attr("id"));var o=[];if(r.words||r.words instanceof Array){o=e.extend(true,[],r.words);if(r.randomize)s=e.extend(true,[],o);i=0;if(r.randomize)i=Math.floor(Math.random()*o.length);n.html(o[i]);var u=function(){n.html("<span class='wordsrotator_wordOut'><span>"+o[i]+"</span></span>");if(r.randomize){o.splice(i,1);if(o.length==0)o=e.extend(true,[],s);i=Math.floor(Math.random()*o.length)}else{if(o.length==i+1)i=-1;i++}e("<span class='wordsrotator_wordIn'>"+o[i]+"</span>").appendTo(n);n.wrapInner("<span class='wordsrotator_words' />");n.find(".wordsrotator_wordOut").addClass("animated "+r.animationOut);n.find(".wordsrotator_wordIn").addClass("animated "+r.animationIn)};n.on("click",function(){if(r.changeOnClick){u();return false}});if(r.autoLoop){var a=setInterval(u,r.speed);if(r.stopOnHover){n.hover(function(){window.clearInterval(a)},function(){a=setInterval(u,r.speed)})}}}})}})(jQuery)
// GN MENU
;(function(e){"use strict";function t(){var t=false;(function(e){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))t=true})(navigator.userAgent||navigator.vendor||e.opera);return t}function n(e,t){this.el=e;this._init()}n.prototype={_init:function(){this.trigger=this.el.querySelector("a.gn-icon-menu");this.menu=this.el.querySelector("nav.gn-menu-wrapper");this.isMenuOpen=false;this.eventtype=t()?"touchstart":"click";this._initEvents();var e=this},_initEvents:function(){var e=this;if(!t()){this.trigger.addEventListener("mouseover",function(t){e._openIconMenu()});this.trigger.addEventListener("mouseout",function(t){e._closeIconMenu()});this.menu.addEventListener("mouseover",function(t){e._openMenu();document.addEventListener(e.eventtype,e.bodyClickFn)})}this.trigger.addEventListener(this.eventtype,function(t){t.stopPropagation();t.preventDefault();if(e.isMenuOpen){e._closeMenu();document.removeEventListener(e.eventtype,e.bodyClickFn)}else{e._openMenu();document.addEventListener(e.eventtype,e.bodyClickFn)}});this.menu.addEventListener(this.eventtype,function(e){e.stopPropagation()})},_openIconMenu:function(){classie.add(this.menu,"gn-open-part")},_closeIconMenu:function(){classie.remove(this.menu,"gn-open-part")},_openMenu:function(){if(this.isMenuOpen)return;classie.add(this.trigger,"gn-selected");this.isMenuOpen=true;classie.add(this.menu,"gn-open-all");$("#main-content").slideUp();this._closeIconMenu()},_closeMenu:function(){if(!this.isMenuOpen)return;classie.remove(this.trigger,"gn-selected");this.isMenuOpen=false;classie.remove(this.menu,"gn-open-all");$("#main-content").slideDown();this._closeIconMenu()}};e.gnMenu=n})(window)
// Script Font
;(function(e){e.fn.fontSizer=function(t){defaults={action:"up",increment:1,max:30,min:8,widget:{css:["mas","menos"]},headers:{},debug:false},this.click(function(){if(t["elements"]=="")return;elements=t["elements"];var n=e.trim(t["action"]==undefined?defaults.action:t["action"]);var r=parseInt(t["increment"]==undefined?defaults.increment:t["increment"]);var i=parseInt(t["max"]==undefined?defaults.max:t["max"]);var s=parseInt(t["min"]==undefined?defaults.min:t["min"]);var o=/px$/;if(e(elements).children().size()==0){tamanno=e(elements).css("font-size");if(n=="up"){new_tamanno=parseInt(tamanno.replace(o,""))+r;if(new_tamanno>i){return}}else{new_tamanno=parseInt(tamanno.replace(o,""))-r;if(new_tamanno<s){return}}e(elements).css("font-size",new_tamanno+"px")}else{e(elements).children().each(function(){tamanno=e(this).css("font-size");if(n=="up"){new_tamanno=parseInt(tamanno.replace(o,""))+r;if(new_tamanno>i){return}}else{new_tamanno=parseInt(tamanno.replace(o,""))-r;if(new_tamanno<s){return}}e(this).css("font-size",new_tamanno+"px")})}})}})(jQuery)
//FontSizer
$(document).ready(function(){$("#aumentar").fontSizer({action:"up",elements:".contenttext",max:36});$("#disminuir").fontSizer({action:"down",elements:".contenttext"})})
//RUT
;(function(e){jQuery.fn.Rut=function(t){var n={digito_verificador:null,on_error:function(){},on_success:function(){},validation:true,format:true,format_on:"change"};var r=e.extend(n,t);return this.each(function(){if(n.format){jQuery(this).bind(n.format_on,function(){jQuery(this).val(jQuery.Rut.formatear(jQuery(this).val(),n.digito_verificador==null))})}if(n.validation){if(n.digito_verificador==null){jQuery(this).bind("blur",function(){var e=jQuery(this).val();if(jQuery(this).val()!=""&&!jQuery.Rut.validar(e)){n.on_error()}else if(jQuery(this).val()!=""){n.on_success()}})}else{var e=jQuery(this).attr("id");jQuery(n.digito_verificador).bind("blur",function(){var t=jQuery("#"+e).val()+"-"+jQuery(this).val();if(jQuery(this).val()!=""&&!jQuery.Rut.validar(t)){n.on_error()}else if(jQuery(this).val()!=""){n.on_success()}})}}})}})(jQuery);jQuery.Rut={formatear:function(e,t){var n=new String(e);var r="";n=jQuery.Rut.quitarFormato(n);if(t){var i=n.charAt(n.length-1);n=n.substring(0,n.length-1)}while(n.length>3){r="."+n.substr(n.length-3)+r;n=n.substring(0,n.length-3)}r=n+r;if(r!=""&&t){r+="-"+i}else if(t){r+=i}return r},quitarFormato:function(e){var t=new String(e);while(t.indexOf(".")!=-1){t=t.replace(".","")}while(t.indexOf("-")!=-1){t=t.replace("-","")}return t},digitoValido:function(e){if(e!="0"&&e!="1"&&e!="2"&&e!="3"&&e!="4"&&e!="5"&&e!="6"&&e!="7"&&e!="8"&&e!="9"&&e!="k"&&e!="K"){return false}return true},digitoCorrecto:function(e){largo=e.length;if(largo<2){return false}if(largo>2){rut=e.substring(0,largo-1)}else{rut=e.charAt(0)}dv=e.charAt(largo-1);jQuery.Rut.digitoValido(dv);if(rut==null||dv==null){return 0}dvr=jQuery.Rut.getDigito(rut);if(dvr!=dv.toLowerCase()){return false}return true},getDigito:function(e){var t="0";suma=0;mul=2;for(i=e.length-1;i>=0;i--){suma=suma+e.charAt(i)*mul;if(mul==7){mul=2}else{mul++}}res=suma%11;if(res==1){return"k"}else if(res==0){return"0"}else{return 11-res}},validar:function(e){e=jQuery.Rut.quitarFormato(e);largo=e.length;if(largo<2){return false}for(i=0;i<largo;i++){if(!jQuery.Rut.digitoValido(e.charAt(i))){return false}}var t="";for(i=largo-1,j=0;i>=0;i--,j++){t=t+e.charAt(i)}var n="";n=n+t.charAt(0);n=n+"-";cnt=0;for(i=1,j=2;i<largo;i++,j++){if(cnt==3){n=n+".";j++;n=n+t.charAt(i);cnt=1}else{n=n+t.charAt(i);cnt++}}t="";for(i=n.length-1,j=0;i>=0;i--,j++){t=t+n.charAt(i)}if(jQuery.Rut.digitoCorrecto(e)){return true}return false}}
//Finales
$(document).ready(function(){$(".panel-heading span.clickable").click();$(".panel div.clickable").click();$(".contentFormInterior").hide();$(".hidden-show").show();$(".hidden-show").click(function(){$(".contentFormInterior").slideToggle()});$(".gn-icon").click(function(){if($(".contentNexusMenu").css("position")=="static"||$(".contentNexusMenu").css("position")=="relative"){$(".contentNexusMenu").css({position:"fixed",width:"100%",top:"0",height:"100%","z-index":"999999","background-color":"#ccc"})}else{$(".contentNexusMenu").css({position:"relative",width:"100%",top:"0",height:"100%","z-index":"999999"})}})
$(".gn-icon").click(function() {
        if ($(".contentNexusMenu").css("position") == "static" || $(".contentNexusMenu").css("position") == "relative") {
            $('html').removeClass("no-scroll");
        } else {
            $('html').addClass("no-scroll");
        }
    })
});
$("#formato_rut").Rut({format_on:"keyup"});$("#formato_rut_mobile").Rut({format_on:"keyup"});$(document).on("click",".panel-heading span.clickable",function(e){var t=$(this);if(!t.hasClass("panel-collapsed")){t.parents(".panel").find(".panel-body").slideUp();t.addClass("panel-collapsed");t.find("i").removeClass("glyphicon-minus").addClass("glyphicon-plus")}else{t.parents(".panel").find(".panel-body").slideDown();t.removeClass("panel-collapsed");t.find("i").removeClass("glyphicon-plus").addClass("glyphicon-minus")}});$(document).on("click",".panel div.clickable",function(e){var t=$(this);if(!t.hasClass("panel-collapsed")){t.parents(".panel").find(".panel-body").slideUp();t.addClass("panel-collapsed");t.find("i").removeClass("glyphicon-minus").addClass("glyphicon-plus")}else{t.parents(".panel").find(".panel-body").slideDown();t.removeClass("panel-collapsed");t.find("i").removeClass("glyphicon-plus").addClass("glyphicon-minus")}});$("#myWords").wordsrotator({autoLoop:true,randomize:false,stopOnHover:false,changeOnClick:false,animationIn:"lightSpeedIn",animationOut:"flipOutY",speed:5e3,words:["Más protección social<br> para la familia chilena","Este Aporte beneficiará a más de<br> 1 millón 600 mil familias","Todos los años,<br> un apoyo a la familia"]})
// Call
new gnMenu( document.getElementById( 'gn-menu' ) );