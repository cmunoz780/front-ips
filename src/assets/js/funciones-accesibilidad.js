
//Agregados por Jerko
/*** FUNCION COOKIE ***/
(function(factory){
    if(typeof define==='function'&&define.amd){
        define(['jquery'],factory)
    }else{
        factory(jQuery)
    }
}
(function($){
    var pluses=/\+/g;
    function raw(s){
        return s
    }
    function decoded(s){
        return decodeURIComponent(s.replace(pluses,' '))
    }
    function converted(s){
        if(s.indexOf('"')===0){
            s=s.slice(1,-1).replace(/\\"/g, '"').replace(/\\\\/g, '\\')
        }try{
            return config.json?JSON.parse(s):s} catch(er){}
        }
        var config=$.cookie=function(key,value,options){
            if(value!==undefined){
                options=$.extend({},config.defaults,options);
                if(typeof options.expires==='number'){
                    var days=options.expires,t=options.expires=new Date();
                    t.setDate(t.getDate()+days)
                }
                value=config.json?JSON.stringify(value):String(value);
                return(document.cookie=[config.raw?key:encodeURIComponent(key),'=',config.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''))
            }
            var decode=config.raw?raw:decoded;
            var cookies=document.cookie.split('; ');
            var result=key?undefined:{};
            for(var i=0,l=cookies.length;i<l;i++){
                var parts=cookies[i].split('=');
                var name=decode(parts.shift());var cookie=decode(parts.join('='));
                if(key&&key===name){
                    result=converted(cookie);break
                }
                if(!key){
                    result[name]=converted(cookie)
                }
            }
            return result
        };
        config.defaults={};
        $.removeCookie=function(key,options){
            if($.cookie(key)!==undefined){
                $.cookie(key,'',$.extend({},options,{expires:-1}));
                return true
            }
            return false
        }
    })
);

/*** FUNCION COOKIE ***/
(function(factory){
    if(typeof define==='function'&&define.amd){
        define(['jquery'],factory)
    }else{
        factory(jQuery)
    }
}
(function($){
    var pluses=/\+/g;
    function raw(s){
        return s
    }
    function decoded(s){
        return decodeURIComponent(s.replace(pluses,' '))
    }
    function converted(s){
        if(s.indexOf('"')===0){
            s=s.slice(1,-1).replace(/\\"/g, '"').replace(/\\\\/g, '\\')
        }try{
            return config.json?JSON.parse(s):s} catch(er){}
        }
        var config=$.cookie=function(key,value,options){
            if(value!==undefined){
                options=$.extend({},config.defaults,options);
                if(typeof options.expires==='number'){
                    var days=options.expires,t=options.expires=new Date();
                    t.setDate(t.getDate()+days)
                }
                value=config.json?JSON.stringify(value):String(value);
                return(document.cookie=[config.raw?key:encodeURIComponent(key),'=',config.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''))
            }
            var decode=config.raw?raw:decoded;
            var cookies=document.cookie.split('; ');
            var result=key?undefined:{};
            for(var i=0,l=cookies.length;i<l;i++){
                var parts=cookies[i].split('=');
                var name=decode(parts.shift());var cookie=decode(parts.join('='));
                if(key&&key===name){
                    result=converted(cookie);break
                }
                if(!key){
                    result[name]=converted(cookie)
                }
            }
            return result
        };
        config.defaults={};
        $.removeCookie=function(key,options){
            if($.cookie(key)!==undefined){
                $.cookie(key,'',$.extend({},options,{expires:-1}));
                return true
            }
            return false
        }
    })
);

$(document).ready(function(){

    /*** RESTAURAR ACCESIBILIDAD ***/
    $("#restaurar").on("click", function(){

        location.reload();
        $.removeCookie('contraste');
        $.removeCookie('link');        

        $(".filter-check").prop("checked", false);
        $("input.underline-check").prop("checked", false);


    })

    
    /** AÑADE FONTICON AL HTML **/
   // $("#accesibilidad > :nth-child(3) ul li").append('<span class="fa fa-spinner"></span>');  
    

    /** CARGA CHECKBOX ESCALA GRISES **/
    $(".fa-spinner").hide();
    $('.filter-check').on('change',function(e){
		console.log("cambio");
        if($.cookie('contraste')===null){
            $.cookie('contraste','on');
            escalaGrises("to");
            $('a').css('box-shadow','none')
            $("body").addClass("grayscale");
            e.preventDefault();
            return false
        }else{
            if($.cookie('contraste')=='on'){
                $.cookie('contraste','off');
                escalaGrises("from");
                $('a').css('box-shadow','')
                $("body").removeClass("grayscale");        
                e.preventDefault();
                return false
            }else{
                $.cookie('contraste','on');
                $("body").css({"pointer-events":"none"});
                $(".filter-check").hide(100,function(){             
                    $(".fa-spinner").addClass("fa-spin").fadeIn(2000,function(){
                        $("body").css({"pointer-events":"auto"});                        
                        $(".fa-spinner").removeClass("fa-spin").hide();
                        //$(".filter-check").show()
                        escalaGrises("to");
                        $('a').css('box-shadow','none')
                        $("body").addClass("grayscale");
                        e.preventDefault();
                        return false
                    });
                });
            }
        }
    });

    /** CARGA CHECKBOX LINK SUBRAYADOS**/
    $('input.underline-check').on('change',function(e){
        if($.cookie('link')===null){
            $.cookie('link','on');
            
            $('a').css('text-decoration','underline');
            
            e.preventDefault();            
            return false
        }else{
            if($.cookie('link')=='on'){
                $.cookie('link','off');
                $('a').css('text-decoration','none');               
                e.preventDefault();
                return false
            }else{
                $.cookie('link','on');
                $('a').css('text-decoration','underline');                
                e.preventDefault();
                return false
            }
        }
    });

    /*** CHECKBOX GRISES Y SUBRAYADAS MARCADOS ***/
    if($.cookie('link')=='on' && $.cookie('contraste')=='on'){
        $(".filter-check").prop("checked", true);
        escalaGrises("to");
        $('a').css('box-shadow','none')
        $("body").addClass("grayscale");

        $("input.underline-check").prop("checked", true);
        $('a').css('text-decoration','underline');
        return false
    }else if($.cookie('contraste')=='on'){
        $(".filter-check").prop("checked", true);
        escalaGrises("to");
        $('a').css('box-shadow','none')
        $("body").addClass("grayscale");
        return false
    }else if($.cookie('link')=='on'){
        $("input.underline-check").prop("checked", true);
        $('a').css('text-decoration','underline');
        return false
    }

});


