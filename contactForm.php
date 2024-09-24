<?php
    //reCAPTCHA verification
    if(isset($_POST['contact-form'])) {
        $url = 'https://www.google.com/recaptcha/api/siteverify';
        $privateKey = "6Lcb000qAAAAAGZSg8nyctL7cntu0w4_ZVzqVv0H";

        $response = file_get_contents($url."?secret=".$privateKey."&response=".$_POST['g-recaptcha-response']."&remoteip=".$_SERVER['REMOTE_ADDR']);

        $data = json_decode($response);
    }

    //E-mail the message
    echo '<div class="return-user-div">
            <p>Message sent!</p>
          </div>';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $to = "rtdegen579@gmail.com";
          
    $headers = "From: ".$name. "\r\nEmail: ".$email. "\r\nNumber: ".$number. "\r\nSubject: ".$subject. "\r\nMessage: ".$message. "\r\n";
            
    $txt = "You have received an email from: ".$name;
            
    if($email!=NULL) {
        mail($to, $txt, $headers);
    }

    header("refresh: 4; Location: index.html");
    exit;
            
?>