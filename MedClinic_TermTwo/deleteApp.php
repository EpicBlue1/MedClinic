<?php

    include 'db_connection.php';

    if($_SERVER['REQUEST_METHOD'] != 'POST'){
        exit;
    }

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $postId = $data->id;

    $sql = "DELETE FROM appointments WHERE Id = '$postId';";
    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo ("Error Description: " . mysqli_error($conn));
    } else {
        echo ("All is Goood! Post Deleted");
    }
?>