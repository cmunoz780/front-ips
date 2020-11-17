function botonesCheckboxAccesibilidad(){
	var elemDetonadores = jQuery(".menu-accesibilidad .modulo-accesibilidad .btn-acce").not("#restaurar"),
		cerrar = jQuery(".menu-accesibilidad .btn_cerrar.cerrar");
	elemDetonadores.attr("data-bloqueado", "0");
	elemDetonadores.on("click", function(){
		var este = jQuery(this),
			retraso = este.closest(".modulo-accesibilidad").index() == 3 && este.find("input[type=checkbox]").is(":checked") == false ? 4500 : 0;
		if(este.attr("data-bloqueado") == "0"){
			este.attr("data-bloqueado","1");
			este.parent().find("input[type=checkbox]").on("click", function(e){e.stopPropagation()});
			este.parent().find("input[type=checkbox]").trigger("click");
			setTimeout(
				function()
				{
					este.attr("data-bloqueado","0");
				},
				1500 + retraso
			);
			setTimeout(
				function(){
					if(este.hasClass("activado")){
						este.removeClass("activado");
						este.remove(".simbolo-activado");
						if( este.closest(".modulo-accesibilidad").index() == 3){
							jQuery(".check-grises").removeClass("check-grises");
						}
					} else {
						este.addClass("activado");
						if( este.closest(".modulo-accesibilidad").index() == 3){
							este.append("<div class='simbolo-activado check-grises'></div>");
						} else {
							if(este.attr("style").length > 27){
								este.append("<div class='simbolo-activado check-grises'></div>");
							} else {
								este.append("<div class='simbolo-activado'></div>");
							}
						}
					}
				}, retraso
			);
		}
	});
	cerrar.on("click", function(){
		jQuery("button[data-target='#accesibilidad']").trigger("click");
	});
	//cargar el check por defecto si se cumple una condición referente a que se activó el estado anteriormente
	if(elemDetonadores.eq(1).css("text-decoration") == "underline"){
		elemDetonadores.eq(1).addClass("activado");
		if(elemDetonadores.eq(0).attr("style") != undefined){
			elemDetonadores.eq(1).append("<div class='simbolo-activado check-grises'></div>");
		} else {
			elemDetonadores.eq(1).append("<div class='simbolo-activado'></div>");
		}
	}
	if(elemDetonadores.eq(0).attr("style") != undefined){
		elemDetonadores.eq(0).addClass("activado");
		elemDetonadores.eq(0).append("<div class='simbolo-activado check-grises'></div>");
	}
}

jQuery(document).ready(function(){
	botonesCheckboxAccesibilidad();
});

// SCROLL ON TOP
$(document).ready(function(){

    // hide #back-top first
    $("#back-top").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1200);
            return false;
        });
    });

});