<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$check = $_POST['check'];
$datein = $_POST['datein'];
$dateout = $_POST['dateout'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = '	smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'izumy94';                 // Наш логин
$mail->Password = 'omirali12345';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('izumy94@mail.ru', 'Izumy Tau');   // От кого письмо 
$mail->addAddress('izumy.tau20@inbox.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта IZUMYTAU.COM';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	Тип номера: ' . $check . '<br>
	Дата заезда: ' . $datein . '<br>
	Дата отъезда: ' . $dateout . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>