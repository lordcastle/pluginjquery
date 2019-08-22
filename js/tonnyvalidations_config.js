jQuery(document).ready(function() {

    $("#validar").click(function() {

        $(".message_error").remove();
<<<<<<< HEAD
        
        $("#nombre").tonnyvalidations({
            reglas: /^[A-Za-z]{10,50}$/,
            mensaje_reglas: "Ingrese solo de 10 a 50 letras"
=======
        $("#nombre").tonnyvalidations({ 
          reglas: /^[A-Za-z]{10,50}$/,
          mensaje_reglas:"Ingrese solo de 10 a 50 letras"
>>>>>>> 2244b8716a9e6f8ac3735bb4c7ecaea769a6c746
        });

        $("#email").tonnyvalidations({
            mensaje: "No debe quedar vacio el campo email!",
            reglas: /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/,
<<<<<<< HEAD
            mensaje_reglas: "Ingrese un formato de correo electronico!"
=======
            mensaje_reglas:"Ingrese un formato de correo electronico!"
>>>>>>> 2244b8716a9e6f8ac3735bb4c7ecaea769a6c746
        });

        $("#asunto").tonnyvalidations({
            mensaje: "Se necesita llenar el campo asunto!",
<<<<<<< HEAD
            reglas: /^[e||n||b||s]$/,
            mensaje_reglas: "Ingrese solo e,n,b,s !"
=======
            //reglas: /^[e||n||b||s||ins]$/,
            reglas:/^[e||n||b||s||ins]$/,
            mensaje_reglas:"Ingrese solo e,n,b,s o ins!"
>>>>>>> 2244b8716a9e6f8ac3735bb4c7ecaea769a6c746
        });

        $("#mensaje").tonnyvalidations({
            mensaje: "Se necesita llenar el campo mensaje!"
        });
        return false;
    });

});