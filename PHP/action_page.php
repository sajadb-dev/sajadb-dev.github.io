<?php
	$name = $_POST['firstname'];
	$visitor_email = $_POST['email'];
	$message = $_POST['subject'];
	
	$email_from = 'sajjad60087@gmail.com';
	
	email_subject = "New From Submission";
	
	$email_body = "User Name: $name.\n".
					"User Email: $visitor_email.\n".
						"User Message: $message.\n";
	
	$to = "sajadb.cg@gmail.com";
	
	$headers = "From: $email_from \r\n";
	$headers .= "Reply-to: $visitor_email \r\n";
	
	mail($to,$email_subject,$email_body,$headers);
	
	header("Location: index.html");
?>