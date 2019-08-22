<html>
<head>
    <title>Plugin</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="js/tonnyvalidations.js"></script>
    <script src="js/tonnyvalidations_config.js"></script>

</head>

<body>
    <div class="container" style="margin-top:4em">
        <div class="row justify-content-lg-center align-items-lg-center">
            <div class="col-lg-6 align-self-center">

                <h1>Prueba Plugin</h1>
                <form class='contacto'>
                    <div class="form-group">
                        <label>Nombre:</label>
                        <input type='text' class="form-control" id="nombre">
                        <div class="invalid-feedback"> </div>
                    </div>
                    <div class="form-group">
                        <label>Email:</label>
                        <input type='text' class='form-control' id="email">
                    </div>
                    <div class="form-group">
                        <label>Asunto:</label>
                        <input type='text' class='form-control' id="asunto">
                    </div>
                    <div class="form-group">
                        <label>Mensaje:</label>
                        <textarea rows='6' class='form-control' id="mensaje"></textarea>
                    </div>
                    <div>
                        <input type='submit' value='Enviar Mensaje' class='btn btn-primary' id="validar">
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
<footer>&copy; 2019 por code8.com</footer>

</html>