jQuery(document).ready(function() {

    $("#validar").click(function() {

        $(".message_error").remove();
        $("#nombre").tonnyvalidations({ 
          reglas: /^[A-Za-z]{10,50}$/,
          mensaje_reglas:"Ingrese solo de 10 a 50 letras"
        });

        $("#email").tonnyvalidations({
            mensaje: "No debe quedar vacio el campo email!",
            reglas: /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/,
            mensaje_reglas:"Ingrese un formato de correo electronico!"
        });

        $("#asunto").tonnyvalidations({
            mensaje: "Se necesita llenar el campo asunto!",
            //reglas: /^[e||n||b||s||ins]$/,
            reglas:/^[e||n||b||s||ins]$/,
            mensaje_reglas:"Ingrese solo e,n,b,s o ins!"
        });

        $("#mensaje").tonnyvalidations({
            mensaje: "Se necesita llenar el campo mensaje!"
        });
        return false;
    });

});