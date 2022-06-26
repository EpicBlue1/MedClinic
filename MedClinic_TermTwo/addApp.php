<?php

    if($_SERVER['REQUEST_METHOD'] != 'POST'){
        exit;
    }

    include 'db_connection.php';

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $Pat = $data->Patientname;
    $PatInfo = explode(' ', $Pat);
    echo $PatInfo[0];
    echo $PatInfo[1];
    $Time = $data->Time;
    $DrSurname = $data->DrSurname;
    $patId = 1;
    $Room = 1;

    if($Pat === ''){
        echo 'Message is empty';
    } else {
        $sql = "INSERT INTO appointments (Id, PatientId, Name, Surname, Timeslot, Cc, Image, Dayint, DrSurname, Room, Date) VALUES (NULL,'$patId','$PatInfo[0]','$PatInfo[1]','$Time','', '','','$DrSurname','$Room','');";
        $result = mysqli_query($conn, $sql);

        if(!$result){
            echo ("Error:" . mysqli_error($conn));
        } else {
            echo 'true';
        }
    }

?>