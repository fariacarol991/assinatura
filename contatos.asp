<!DOCTYPE html>
<html>
<head>
    <title>Almeida Prado Sociedade Individual de Advocacia</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/reset.css" type="text/css" />
    <link rel="stylesheet" href="css/grid.css" type="text/css" />
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <link rel="stylesheet" href="css/nivo-slider.css" type="text/css" />
    <script type="text/javascript" src="js/html5.js"></script>
    <script type="text/javascript" src="js/calendario.js"></script>
    <script type="text/javascript" src="js/jquery-1.6.1.min.js"></script>
    <script type="text/javascript" src="js/tabs.js"></script>
    <script type="text/javascript" src="js/jquery.nivo.slider.pack.js"></script>
    <script type="text/javascript" src="js/gpjweb.js"></script>
    <script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pubid=xa-4fd158552aba472f"></script>
    <script type="text/javascript">
        $(window).load(function () {
            $('#slider').nivoSlider();
        });
    </script>
</head>
<body>
    <!-- header -->
    <!--#include file="header.html">
			<!-- content -->
    <section id="content">
        <div class="container_24">
            <div class="row">
                <div class="wrapper">
                    <div class="grid_2">
                        <h1>Contatos</h1>
                        <p>
                            &nbsp;aprado@apradoadvocacia.com.br
                            <br />
                            &nbsp;&#9742;&nbsp;&nbsp; (11)&nbsp;3297-7000
                            <br />
                            <a href="https://api.whatsapp.com/send/?phone=5511999863283&text&app_absent=0" target="_blank">
                                <img src="images/whatsapp1.gif" alt="">
                                (11) 99986-3283 (Em caso de urg&ecirc;ncia)<br />
                            </a>

                        </p>
                        <div id="contactForm">
                            <input style="width: 300px" type="text" id="name" name="name" value="Nome" onfocus="this.value=''" />
                            <br />
                            <input style="width: 300px" type="text" id="email" name="email" value="E-mail" onfocus="this.value=''" />
                            <br />
                            <input style="width: 300px" type="text" id="phone" name="phone" value="Telefone"
                                onfocus="this.value=''" />
                            <br />
                            <textarea class="inp_3" rows="20" cols="70" id="message" name="message" onfocus="this.value=''">Mensagem</textarea>
                            <br />
                            <button onclick="SendMail()">
                                Enviar</button>
                        </div>
                        <br />
                        <br />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.721850846036!2d-46.65368778502256!3d-23.542504584692235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58387be4d621%3A0x76aeb91549b04ed9!2sR.%20Martinico%20Prado%2C%2026%20-%20Vila%20Buarque%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001224-010!5e0!3m2!1sen!2sbr!4v1626362517357!5m2!1sen!2sbr" width="600" height="450" style="border: 0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>





                    <!--#include file=sidebar2.html -->
                </div>
            </div>
        </div>
    </section>
    <!--#include file=footer.html -->
    <!-- footer -->
</body>
</html>
<script type="text/javascript">
    function SendMail() {

        var routeAction = "send-email.asp";
        var parameters = "nome=" + encodeURI($("#name").val()) + "&email=" + encodeURI($("#email").val()) + "&phone=" + encodeURI($("#phone").val()) + "&message=" + encodeURI($("#message").val());
        var options = {
            dataType: "html",
            success: function (response) {
                $("#contactForm").html("Mensagem enviada, por favor, aguarde nosso contato.")


            }, error: function (response) {
                self.gpjwebCommon.processErrorAjax(response, self.moduleName)
            }, url: routeAction, data: parameters, type: "POST"
        };
        $.ajax(options);

    }




</script>
