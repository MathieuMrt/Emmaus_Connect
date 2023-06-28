<?php
require_once 'connection.php';

// Création de la base de données
$createDatabaseQuery = "CREATE DATABASE IF NOT EXISTS " . $dbname;
if ($con->query($createDatabaseQuery) === TRUE) {
    echo "La base de données a été créée avec succès.\n";
} else {
    echo "Erreur lors de la création de la base de données : " . $con->error;
}

// Utilisation de la base de données
$con->select_db($dbname);

// Création de la table "user"
$createUserTableQuery = "CREATE TABLE IF NOT EXISTS user (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
)";
if ($con->query($createUserTableQuery) === TRUE) {
    echo "La table 'user' a été créée avec succès.\n";
} else {
    echo "Erreur lors de la création de la table 'user' : " . $con->error;
}

// Création de la table "etat"
$createEtatTableQuery = "CREATE TABLE IF NOT EXISTS etat (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
)";
if ($con->query($createEtatTableQuery) === TRUE) {
    echo "La table 'etat' a été créée avec succès.\n";
} else {
    echo "Erreur lors de la création de la table 'etat' : " . $con->error;
}

// Création de la table "mobile"
$createMobileTableQuery = "CREATE TABLE IF NOT EXISTS mobile (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    marque VARCHAR(50) NOT NULL,
    modele VARCHAR(50) NOT NULL,
    etat_id INT(11) NOT NULL,
    FOREIGN KEY (etat_id) REFERENCES etat(id)
)";
if ($con->query($createMobileTableQuery) === TRUE) {
    echo "La table 'mobile' a été créée avec succès.\n";
} else {
    echo "Erreur lors de la création de la table 'mobile' : " . $con->error;
}

// Fermeture de la connexion
$con->close();

// http://localhost:8000/createDataBase.php