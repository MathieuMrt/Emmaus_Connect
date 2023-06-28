<?php

$dbname = "emaus";
$host = "localhost";
$username = "main";
$password = "main";

$con = mysqli_connect($host, $username, $password, $dbname);

if (!$con) {
    echo "Message: Impossible de se connecter à la base de données";
    die();
}
