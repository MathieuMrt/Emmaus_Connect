<?php
header("Access-Control-Allow-Origin: *");
$user = $_POST['name'];
echo ("Hello from server: $user");
