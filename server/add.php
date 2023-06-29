<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
require_once 'connection.php';

$response = array();

if (isset($_POST['systeme']) && isset($_POST['marque']) && isset($_POST['modele']) && isset($_POST['ram']) && isset($_POST['stockage']) && isset($_POST['taille']) && isset($_POST['reseau']) && isset($_POST['etat']) && isset($_POST['chargeur']) && isset($_POST['imei'])) {

    $systeme = $_POST['systeme'];
    $marque = $_POST['marque'];
    $modele = $_POST['modele'];
    $ram = $_POST['ram'];
    $stockage = $_POST['stockage'];
    $taille = $_POST['taille'];
    $reseau = $_POST['reseau'];
    $etat = $_POST['etat'];
    $chargeur = $_POST['chargeur'];
    $imei = $_POST['imei'];

    $query = $con->prepare("INSERT INTO mobile (systeme_id, marque_id, modele, ram, stockage, taille_id, reseau_id, etat_id, chargeur, imei) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $query->bind_param("iisiiiiiis", $systeme, $marque, $modele, $ram, $stockage, $taille, $reseau, $etat, $chargeur, $imei);

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
print_r($_POST);
