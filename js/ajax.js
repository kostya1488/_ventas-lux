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
            $('.feedback_inner_wrap').addClass('active');
        },
        error: function(response) {
            $('.response_text').css('color', 'red').html('Помилка! <br> Запит не відправлено. <br> Перезавантажте сторінку та <br> спробуйте ще раз.');
            $('.feedback_inner_wrap').addClass('active');
        }
    });

}