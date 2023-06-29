<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
require_once 'connection.php';

$response = array();
$query = $con->prepare("SELECT * FROM mobile
INNER JOIN taille ON mobile.taille_id = taille.id
INNER JOIN marque ON mobile.marque_id = marque.id
INNER JOIN reseau ON mobile.reseau_id = reseau.id
INNER JOIN systeme ON mobile.systeme_id = systeme.id
INNER JOIN etat ON mobile.etat_id = etat.id;");
$query->execute();

if ($query->execute()) {

    $mobile = array();
    $resultat = $query->get_result();

    while ($elmt = $resultat->fetch_array(MYSQLI_ASSOC)) {

        $mobile[] = $elmt;
    }

    $response['error'] = false;
    $response['mobile'] = $mobile;
    $response['message'] = "La commande a été executée avec succès";
    $query->close();
} else {

    $response['error'] = true;
    $response['message'] = "Impossible d'executer cette requete";
}

print_r($response);
