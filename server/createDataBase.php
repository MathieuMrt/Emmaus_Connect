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

// Création de la table "systeme"
$createSystemeTableQuery = "CREATE TABLE IF NOT EXISTS systeme (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
)";
if ($con->query($createSystemeTableQuery) === TRUE) {
    echo "La table 'systeme' a été créée avec succès.\n";
} else {
    echo "Erreur lors de la création de la table 'systeme' : " . $con->error;
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

// Création de la table "marque"
$createMarqueTableQuery = "CREATE TABLE IF NOT EXISTS marque (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
)";
if ($con->query($createMarqueTableQuery) === TRUE) {
    echo "La table 'marque' a été créée avec succès.\n";
} else {
    echo "Erreur lors de la création de la table 'marque' : " . $con->error;
}


// Création de la table "taille"
$createTailleTableQuery = "CREATE TABLE IF NOT EXISTS taille (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
)";
if ($con->query($createTailleTableQuery) === TRUE) {
    echo "La table 'taille' a été créée avec succès.\n";
} else {
    echo "Erreur lors de la création de la table 'taille' : " . $con->error;
}

// Création de la table "reseau"
$createReseauTableQuery = "CREATE TABLE IF NOT EXISTS reseau (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
)";
if ($con->query($createReseauTableQuery) === TRUE) {
    echo "La table 'reseau' a été créée avec succès.\n";
} else {
    echo "Erreur lors de la création de la table 'reseau' : " . $con->error;
}

// Création de la table "mobile"
$createMobileTableQuery = "CREATE TABLE IF NOT EXISTS mobile (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    marque_id INT(11) NOT NULL,
    FOREIGN KEY (marque_id) REFERENCES marque(id),
    taille_id INT(11) NOT NULL,
    FOREIGN KEY (taille_id) REFERENCES taille(id),
    reseau_id INT(11) NOT NULL,
    FOREIGN KEY (reseau_id) REFERENCES reseau(id),
    etat_id INT(11) NOT NULL,
    FOREIGN KEY (etat_id) REFERENCES etat(id),
    systeme_id INT(11) NOT NULL,
    FOREIGN KEY (systeme_id) REFERENCES systeme(id),
    modele VARCHAR(50) NOT NULL,
    ram INT(3) NOT NULL,
    stockage INT(3) NOT NULL,
    chargeur TINYINT NOT NULL,
    imei VARCHAR(50) NOT NULL
)";
if ($con->query($createMobileTableQuery) === TRUE) {
    echo "La table 'mobile' a été créée avec succès.\n";
} else {
    echo "Erreur lors de la création de la table 'mobile' : " . $con->error;
}

// Ajout des valeurs systeme

$insertSystemeTableQuery = "INSERT INTO systeme (name) VALUES ('Android'), ('IOS')";
if ($con->query($insertSystemeTableQuery) === TRUE) {
    echo "La table 'systeme' a été alimentée.\n";
} else {
    echo "Erreur lors de la mise à jour de la table 'systeme' : " . $con->error;
}

// Ajout des valeurs marque

$insertMarqueTableQuery = "INSERT INTO marque (name) VALUES ('Samsung'), ('Apple'), ('LG'), ('Xiaomi'), ('Huawei'), ('Sony'), ('Honor'), ('Google')";
if ($con->query($insertMarqueTableQuery) === TRUE) {
    echo "La table 'marque' a été alimentée.\n";
} else {
    echo "Erreur lors de la mise à jour de la table 'marque' : " . $con->error;
}

// Ajout des valeurs taille

$insertTailleTableQuery = "INSERT INTO taille (name) VALUES ('3.5'), ('4'), ('5'), ('6'), ('7'), ('8'), ('9')";
if ($con->query($insertTailleTableQuery) === TRUE) {
    echo "La table 'taille' a été alimentée.\n";
} else {
    echo "Erreur lors de la mise à jour de la table 'taille' : " . $con->error;
}

// Ajout des valeurs etat

$insertEtatTableQuery = "INSERT INTO etat (name) VALUES ('Iréparable'), ('Réparable'), ('Bloqué'), ('Reconditionnable'), ('Reconditionné')";
if ($con->query($insertEtatTableQuery) === TRUE) {
    echo "La table 'etat' a été alimentée.\n";
} else {
    echo "Erreur lors de la mise à jour de la table 'etat' : " . $con->error;
}

// Ajout des valeurs reseau

$insertReseauTableQuery = "INSERT INTO reseau (name) VALUES ('3G'), ('4G'), ('5G')";
if ($con->query($insertReseauTableQuery) === TRUE) {
    echo "La table 'reseau' a été alimentée.\n";
} else {
    echo "Erreur lors de la mise à jour de la table 'reseau' : " . $con->error;
}



// Fermeture de la connexion
$con->close();

// http://localhost:8000/createDataBase.php