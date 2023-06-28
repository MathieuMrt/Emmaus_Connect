<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
require_once 'connection.php';

$response = array();

if (isset($_GET['id'])) {

    $id = $_GET['id'];

    $query = $con->prepare("SELECT * FROM user WHERE id = ?");
    $query->bind_param("i", $id);

    if ($query->execute()) {
        $query->bind_result($id, $login, $password);
        $query->fetch();

        $user = array(
            'id' => $id,
            'login' => $login,
            'password' => $password
        );

        $response['error'] = false;
        $response['user'] = $user;
        $response['message'] = "L'utilisateur recherché existe dans la base de données";
    } else {
        $response['error'] = true;
        $response['message'] = "L'utilisateur recherché n'existe pas dans la base de données";
    }
} else {
    $response['error'] = true;
    $response['message'] = "Veuillez fournir un ID";
}

print_r($response);
