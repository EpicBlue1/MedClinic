<?php

    if($_SERVER['REQUEST_METHOD'] != 'POST'){
        exit;
    }

    include 'db_connection.php';

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $message = $data->message;
    $user = $data->user;

    if($message === ''){
        echo 'Message is empty';
    } else {
        $sql = "INSERT INTO `updatesection`(`id`, `Name`, `Message`, `Time`) VALUES (NULL,'$user','$message', CURRENT_TIMESTAMP);";
        $result = mysqli_query($conn, $sql);

        if(!$result){
            echo ("Error:" . mysqli_error($conn));
        } else {
            echo 'true';
        }
    }

?>