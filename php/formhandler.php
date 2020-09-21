<?php
$to = "info@enerlize.net.ua";
$subject = "Заявка с сайта";
$headers = "From: message@enerlize.net.ua";

if (

isset($_POST["name"]) && 
isset($_POST["phone"]) && 
isset($_POST["message"]) && 
isset($_POST["name_company"]) && 
isset($_POST["email"]) 

) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'Имя' => $_POST["name"],
        'Телефон' => $_POST["phone"],
    	'Сообщение' => $_POST["message"],        
    	'Компания' => $_POST["name_company"],        
    	'Email' => $_POST["email"]        
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 

    foreach ($result as $key => $value) {
        $txt_for_mail .= $key . ": " . $value ."\n";
 }

  mail($to, $subject, $txt_for_mail, $headers);

}

?>