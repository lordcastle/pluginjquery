(function($) {

    $.fn.tonnyvalidations = function(options) {

        var settings = $.extend({//objeto 
            //var pintura1 = {}
            mensaje: "Campo Vacio!",
            mensaje_reglas:"Formato Invalido",
            reglas: /^[A-Za-z]$/

        }, options);

        if ($(this).val() == "") {// this obtiene el valor de los id declarados en _config
            $(this).addClass("error");
            $(this).focus().after("<span class='message_error'>" + " " + "</span>"); //para no repetir el mensaje
            $(this).focus().after("<span class='message_error'>" + " " + settings.mensaje + "</span>");
            return false;
        }
        
        else if(!settings.reglas.test($(this).val()))
        {
            $(this).addClass("error");
            $(this).focus().after("<span class='message_error'>" + " " + "</span>"); //para no repetir el mensaje
            $(this).focus().after("<span class='message_error'>" + " " + settings.mensaje_reglas + "</span>");
            return false;
        }
        
       /*else if(!settings.reglas.test($(this).val()))
        {
            $(this).addClass("error");
            $(this).focus().after("<span class='message_error'>" + " " + "</span>"); //para no repetir el mensaje
            $(this).focus().after("<span class='message_error'>" + " " + settings.mensaje_reglas + "</span>");
            return false;
        }
*/

        else // si no { resetear  poniendo clase sucess}    
        {
            $(this).addClass("success");
            return false;
        }

    };
}(jQuery));
