<style>
    p{
        font-size: 3rem;
        color: #0e3c68;
        font-weight: bold;"
    }

    .return-user-div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: left;
        text-align: left;
        height: 200px;
        width: 600px;
        margin: auto;
        margin-left: 5%;
    }

    .contact-page-back-button{
        height: 3em;
        width: 10em;
        font-size: 24px;
        background-color: #0e3c68;
        color: white;
    }
</style>

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
            <button class="contact-page-back-button" onclick="javascript:history.back()">
                Back
            </button>
          </div>';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $to = "rtdegen579@gmail.com";
          
    $headers = "From: ".$name. "\r\nEmail: ".$email. "\r\nMessage: ".$message. "\r\n";
            
    $txt = "You have received an email from: ".$name;
            
    if($email!=NULL) {
        mail($to, $txt, $headers);
    }
            
?>