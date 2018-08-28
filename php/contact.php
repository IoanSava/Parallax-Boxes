<?php

$name =$_Post['name'];
$visitor_email=$_Post['email'];
$message=$_Post['message'];

@email_from = 'ionut_sava10@yahoo.com';
$email_subject = "Mesaj nou";
$email_body= "Nume: $name.\n".
              "Email: $vistor_email.\n".
              "Mesaj: $message.\n";

$to = 'ionut_sava10@yahoo.com';

$headers ="From: $email_from \r \n ";
$headers .="Reply-To: $visitor_email \r \n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html"); 


?>
