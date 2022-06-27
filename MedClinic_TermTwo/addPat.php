<?php

    if($_SERVER['REQUEST_METHOD'] != 'POST'){
        exit;
    }

    include 'db_connection.php';

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $first= $data->first;
    $last= $data->last;
    $age= $data->age;
    $gender= $data->gender;
    $contact= $data->contact;
    $email= $data->email;
    $PropertyOne= $data->PropertyOne;
    $PropertyTwo= $data->PropertyTwo;
    $pId = '9';
    $password= $data->password;

    $passwordEncrypt = md5($password);

    if($first === ''){
        echo 'Name is empty';
    } else {
        $sql = "INSERT INTO patients (Id, Name, Surname, Sex, MedHistoryOne, MedHistoryTwo, Img, Age, mAid, phoneNum, pId, email, password) VALUES (NULL, '$first', '$last', '$gender', '$PropertyOne', '', '', '$age', '$PropertyTwo', '$contact', '20', '$email', '$password');";
        $result = mysqli_query($conn, $sql);

        if(!$result){
            echo ("Error:" . mysqli_error($conn));
        } else {
            echo 'true';
        }
    }

?>