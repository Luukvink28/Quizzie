<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = "quizzieemmet@gmail.com";
    $inputMessage = $_POST['message'];
    $inputEmail = $_POST['email'];
    $inputName = $_POST['name'];
    $subject = "Form Submitted";
    $message = "A form has been filled in on your website. \r\n\n The message is: {$inputMessage} \r\n\n The email address is: {$inputEmail} \r\n\n  The name is: {$inputName}";
    $headers = "From: " . $_POST['email'];
    if (!preg_match("/^[a-zA-z]*$/",$inputName))
    {
        $php_errormsg = "Invalid name!";
        include 'email.view.error.php';
    }
    else if (!filter_var($inputEmail, FILTER_VALIDATE_EMAIL))
    {
        $php_errormsg = "Invalid email!";
        include 'email.view.error.php';
    }
    else if (empty($inputMessage))
    {
        $php_errormsg = "You didnt put in a message pleas try again!";
        include 'email.view.error.php';
    }
    else if (empty($inputEmail))
    {
        $php_errormsg = "You didnt put in a email pleas try again!";
        include 'email.view.error.php';
    }
    else if (empty($inputName))
    {
        $php_errormsg = "You didnt put in a name pleas try again!";
        include 'email.view.error.php';
    }
    else {
        $emailVerzonde = mail($to, $subject, $message, $headers);
        if ($emailVerzonde) {
            include_once 'email.view.success.php';
// create email headers

            $headers = 'From: '.$inputEmail."\r\n".
            "Reply-To: ".$inputEmail."\r\n" .
            "X-Mailer: PHP/" . phpversion();

/* Prepare autoresponder subject */

$respond_subject = "Thank you for contacting us!";

/* Prepare autoresponder message */

$respond_message = "Dank u voor het invullen van het contactformulier. 

Wij zullen zo spoedig mogelijk contact met u opnemen.

Met vriendelijke groet,

Team Quizzie.

";

mail($inputEmail, $respond_subject, $respond_message);


mail($to, $inputName, $inputMessage, $headers);
        } else {
            include 'email.view.error.php';
            $php_errormsg = "Something went wrong pleas call us at 06 123456789!";
        }
    }

}
?>