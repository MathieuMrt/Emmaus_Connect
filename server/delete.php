<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
require_once 'connection.php';

$response = array();

if (isset($_POST['id'])) {

    $id = $_POST['id'];
    $query = $con->prepare("DELETE FROM user WHERE id=? LIMIT 1");
    $query->bind_param("i", $id);

    if ($query->execute()) {
        $response['error'] = false;
        $response['message'] = "La donnée a bien été supprimée";
    } else {
        $response['error'] = true;
        $response['message'] = "La donnée n'a pas été supprimée";
    }
} else {
    $response['error'] = true;
    $response['message'] = "Veuillez fournir un ID";
}

print_r($response);
