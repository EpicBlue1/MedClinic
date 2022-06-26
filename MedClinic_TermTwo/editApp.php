<?php
    include 'db_connection.php';

    if($_SERVER['REQUEST_METHOD'] != 'POST'){
        exit;
    }

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $UpTime = $data->UpTime;
    $UpDr = $data->UpDr;
    $userId = $data->id;

    $sql = "UPDATE appointments SET Timeslot='$UpTime', DrSurname='$UpDr' WHERE Id='$userId'";
    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo ("Error Description: " . mysqli_error($conn));
    } else {
        echo ("All is Goood! Post updated");
    }
?>