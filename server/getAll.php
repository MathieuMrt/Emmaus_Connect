<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
require_once 'connection.php';

$response = array();
$query = $con->prepare("SELECT * FROM user");
$query->execute();

if ($query->execute()) {

    $user = array();
    $resultat = $query->get_result();

    while ($elmt = $resultat->fetch_array(MYSQLI_ASSOC)) {

        $user[] = $elmt;
    }

    $response['error'] = false;
    $response['user'] = $user;
    $response['message'] = "La commande a été executée avec succès";
    $query->close();
} else {

    $response['error'] = true;
    $response['message'] = "Impossible d'executer cette requete";
}

print_r($response);
