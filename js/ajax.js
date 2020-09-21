$(document).ready(function() {
    $("#ajax_form").submit(
        function() {
            sendAjaxForm('ajax_form', 'php/formhandler.php');
            return false;
        }
    );
});

function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: $("#" + ajax_form).serialize(),
        success: function(response) {
            result = $.parseJSON(response);
            $('.form_wrap').toggleClass('form_send');
        },
        error: function(response) {
            $('.form_wrap').toggleClass('form_send');
            $('.form_response').html('Помилка! <br> Дані не відправлені.').css('color', '#f44336')

        }
    });

}