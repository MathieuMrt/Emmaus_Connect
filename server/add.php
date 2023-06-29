<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
require_once 'connection.php';

$response = array();

if (isset($_POST['login']) && isset($_POST['password'])) {

    $login = $_POST['login'];
    $password = $_POST['password'];

    $query = $con->prepare("INSERT INTO user (login, password) VALUE (?, ?)");
    $query->bind_param("ss", $login, $password);

    if ($query->execute()) {
        $response['error'] = false;
        $response['message'] = "La donnée a bien été ajoutée";
    } else {
        $response['error'] = true;
        $response['message'] = "La donnée n'a pas été ajoutée";
    }
} else {
    $response['error'] = true;
    $response['message'] = "Veuillez fournir les informations";
}

print_r($response);
