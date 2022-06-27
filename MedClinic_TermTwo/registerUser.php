<?php

include 'db_connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: * ');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$first = $data->first;
$last = $data->last;
$email = $data->email;
$age = $data->age;
$sex = $data->sex;
$contact = $data->contact;
$HeadReceptionist = $data->HeadReceptionist;
$password = $data->password;
$profileImg = $data->profileImg;
$rank = $data->rank;

$contact = (int)$contact;
$contact = (float)$contact;
$rank = (int)$rank;
$rank = (float)$rank;

$passwordEncrypt = md5($password);

list($type, $profileImg) = explode(';', $profileImg);
list(, $profileImg)      = explode(',', $profileImg);
$profileImg = base64_decode($profileImg);

$newPath = 'PFImages/' . time() . '.jpg';

$sql = "INSERT INTO receptionists (Id, Name, Surname, Age, Sex, HeadReceptionist, img, phoneNum, email, password, rank) VALUES (NULL, '$first', '$last', '$age', '$sex', 'false', '', '$contact', '$email', '$passwordEncrypt', '$rank');";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Added user");
}

?>