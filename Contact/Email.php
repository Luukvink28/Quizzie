<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = "quizzieemmet@gmail.com";
    $subject = "Quizzie - Nieuw bericht";
    $message = "Er is een nieuw bericht: " . $_POST['message'] . " Het email adres is: " . $_POST['email'] . " De naam is: " . $_POST['name'];
    $headers = "Van: " . $_POST['email'];
    mail($to, $subject, $message, $headers);
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bedankt!</title>
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css">
</head>
<body>
    Bedankt voor het versturen van uw bericht.
</body>
</html>