<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Recoger datos del formulario
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validar los datos del formulario
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Credenciales y configuraciones de correo
        $smtpHost = 'smtp.espe.edu.ec';
        $smtpUser = 'xsarias@espe.edu.ec';
        $smtpPass = 'Sebas232323';
        $fromEmail = 'xsarias@espe.edu.ec';
        $toEmail = 'xsarias@espe.edu.ec';

        // Crear una nueva instancia de PHPMailer
        $mail = new PHPMailer(true);

        try {
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true,
                ),
            );

            // Configuración del servidor
            $mail->SMTPDebug = 0; // Cambiar a 0 para deshabilitar la salida de depuración
            $mail->isSMTP();
            $mail->Host       = $smtpHost;
            $mail->SMTPAuth   = true;
            $mail->Username   = $smtpUser;
            $mail->Password   = $smtpPass;
            $mail->SMTPSecure = 'ssl';
            $mail->Port       = 465;

            // Destinatarios
            $mail->setFrom($fromEmail, 'Formulario Web');
            $mail->addAddress($toEmail);

            // Contenido
            $mail->isHTML(true);
            $mail->Subject = 'Nuevo mensaje del formulario web';
            $mail->Body    = "<p>Nombre: $name</p><p>Email: $email</p><p>Mensaje: $message</p>";

            $mail->send();
            echo 'El mensaje ha sido enviado';
        } catch (Exception $e) {
            echo "El mensaje no se pudo enviar. Error de PHPMailer: {$mail->ErrorInfo}";
        }
    } else {
        echo 'Por favor, complete todos los campos del formulario.';
    }
}
?>
