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
    $password= $data->password;
    $docId = 20;

    $passwordEncrypt = md5($password);

    if($first === ''){
        echo 'Name is empty';
    } else {
        $sql = "INSERT INTO doctors (Id, Name, Surname, img, Age, Sex, WorkHistory, docId, email, password, phoneNum, specialization) VALUES (NULL, '$first', '$last', '', '$age', '$gender', '$PropertyTwo', '$docId', '$email', '$passwordEncrypt', '$contact', '$PropertyOne');";
        $result = mysqli_query($conn, $sql);

        if(!$result){
            echo ("Error:" . mysqli_error($conn));
        } else {
            echo 'true';
        }
    }

?>