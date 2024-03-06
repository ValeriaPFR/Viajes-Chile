$(document).ready(function () {

    // Mensaje emergente para cuando se apreta el botón ENVIAR //

    $("#Enviar").click(function () {
        alert("Su mensaje fue enviado correctamente. ¡Prepare sus maletas! :D");
    });

    // doble click en la sección "¿Quiénes somos?" para que cambien de color //

    $(".col-4").dblclick(function () {
        $(this).css({
            "color": "red",
        });
    });

    // doble click en la palabra "Destacados" para que desaparezcan las tarjetas //

    $(".titulo").dblclick(function () {
        $(".fotos").toggle();
    });

});