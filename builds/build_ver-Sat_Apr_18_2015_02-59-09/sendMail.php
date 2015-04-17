<?php
	$postdata = file_get_contents("php://input");

	$userName = $_POST['name'];
	$userTel = $_POST['tel'];
	$userText = $_POST['text'];
	$userSet = $_POST['setwork'];

	$message = " Имя: ".$userName." \r\n Телефон: ".$userTel." \r\n Сообщение: ".$userText." \r\n Выбранный тариф: ".$userSet."
	";

	mail('forms@iqpromo.ru', 'Письмо с лендинга' , $message)
?>
