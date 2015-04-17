<?php
	$postdata = file_get_contents("php://input");

	$userName = $_POST['name'];
	$userTel = $_POST['tel'];
	$userText = $_POST['text'];

	$message = " Имя: ".$userName." \r\n Телефон: ".$userTel." \r\n Сообщение: ".$userText."
	";

	mail('forms@iqpromo.ru', 'Письмо с лендинга' , $message)
?>
