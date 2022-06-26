<?php
    include 'db_connection.php';

    if($_SERVER['REQUEST_METHOD'] != 'POST'){
        exit;
    }

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $updatedAge = $data->Upage;
    $updatedNum = $data->UpphoneNum;
    $updatedHist = $data->UpHistory;
    $userId = $data->id;

    $sql = "UPDATE patients SET Age='$updatedAge', phoneNum='$updatedNum', MedHistoryTwo='$updatedHist' WHERE Id='$userId'";
    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo ("Error Description: " . mysqli_error($conn));
    } else {
        echo ("All is Goood! Post updated");
    }
?>